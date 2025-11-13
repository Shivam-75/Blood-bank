import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ChatGpt = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // 🧹 Clean text (remove markdown)
  const cleanText = (text) => {
    if (!text || typeof text !== "string") return "";
    return text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/_/g, "")
      .replace(/`/g, "")
      .replace(/#+\s/g, "")
      .trim();
  };

  // 🧠 Format text (bold before ":" + indent numbered/subpoints)
  const formatText = (text) => {
    if (!text || typeof text !== "string") return null;
    const lines = text.split("\n");

    return lines.map((line, i) => {
      const cleaned = cleanText(line.trim());
      if (!cleaned) return null;

      // 4. Heading style
      const numbered = cleaned.match(/^(\d+\.)\s*(.*)/);
      if (numbered) {
        const [_, num, rest] = numbered;
        const [title, ...desc] = rest.split(":");
        return (
          <div key={i} className="pl-2 sm:pl-4">
            <p className="font-semibold text-gray-900">
              {num} {title && <strong>{title}:</strong>} {desc.join(":")}
            </p>
          </div>
        );
      }

      // subpoints like "Quantitative Data:"
      const [title, ...desc] = cleaned.split(":");
      if (desc.length > 0) {
        return (
          <div key={i} className="pl-6 text-gray-800">
            <p>
              <strong>{title}:</strong> {desc.join(":")}
            </p>
          </div>
        );
      }

      return (
        <p key={i} className="pl-8 text-gray-700">
          {cleaned}
        </p>
      );
    });
  };

  // ⌨️ Typing animation
  const typeText = (text, callback, speed = 15) => {
    let index = 0;
    const interval = setInterval(() => {
      callback(text.slice(0, index + 1));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
  };

  // 🧠 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage, { role: "bot", text: "" }]);
    setInput("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_URL}/api/v1/ai/response`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();

      // 🔒 Handle any data type (string/object/array)
      const fullText =
        typeof data.data === "string"
          ? data.data
          : JSON.stringify(data.data || "No response");

      const cleaned = cleanText(fullText);

      typeText(cleaned, (partial) => {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = partial;
          return updated;
        });
      });
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: "⚠️ Network error. Please try again." },
      ]);
    }
  };

  // 🔽 Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col font-serif">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-red-600 text-white rounded-full px-4 py-1 font-bold text-xl hover:bg-red-700 duration-200">
        ←
      </button>

      {/* 🧠 Header */}
      <header className="h-[120px] flex items-center justify-center shadow-sm">
        <h1 className="text-3xl text-center sm:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
          ChatGPT Medicine Assistant
        </h1>
      </header>

      {/* 💬 Chat Window */}
      <main className="flex-1 sm:w-[80%] mx-auto overflow-y-auto px-2 sm:px-10 py-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 p-3 rounded-2xl max-w-[100%]  sm:max-w-[90%] ${
              msg.role === "user"
                ? "bg-red-600 w-[40%] text-white ml-auto rounded-br-none"
                : "bg-gray-100  text-black rounded-bl-none"
            }`}>
            {msg.role === "user" ? (
              <p>{msg.text}</p>
            ) : (
              <div className="whitespace-pre-wrap  leading-relaxed">
                {formatText(msg.text)}
              </div>
            )}
          </div>
        ))}
        {/*<div ref={chatEndRef} />*/}
      </main>

      {/* ✍️ Input Box */}
      <form
        onSubmit={handleSubmit}
        className="py-4 sm:w-[70%] mx-auto flex items-center justify-center gap-3 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your question about medicine..."
          className="flex-1 border border-gray-300 rounded-3xl px-4 py-2 outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-3xl hover:bg-green-500 transition font-semibold">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatGpt;
