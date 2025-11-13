import React, { useEffect, useRef, useState } from "react";

const BloodDonationVideos = () => {
  const data = [
    { videos: "LVJs-yCURTg" },
    { videos: "9K-8JK2Z5hA" },
    { videos: "uapeyFaibaQ" },
    { videos: "PnQN6Ogf2rE" },
    { videos: "kOISEM6L4xk" },
    { videos: "AxJuZs3BUGM" },
  ];

  const playersRef = useRef([]);

  const [videolaoding, setvideolanding] = useState(navigator.onLine);

  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Initialize players after API is ready
    window.onYouTubeIframeAPIReady = () => {
      data.forEach((item, index) => {
        playersRef.current[index] = new window.YT.Player(`yt-player-${index}`, {
          videoId: item.videos,
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                // Pause all other videos
                playersRef.current.forEach((player, i) => {
                  if (i !== index && player) player.pauseVideo();
                });
              }
            },
          },
        });
      });
    };
  }, [navigator.onLine]);

  useEffect(() => {
    window.addEventListener("online", setvideolanding(true));
    window.addEventListener("offline", setvideolanding(false));

    return () => {
      window.removeEventListener("online", setvideolanding(true));
      window.removeEventListener("offline", setvideolanding(false));
    };
  }, []);

  return (
    <div className="w-[90%] mx-auto  py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-red-600 text-center mb-4">
        Blood Donation Awareness
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg text-center mb-10 max-w-3xl mx-auto">
        Watch these inspiring videos about blood donation and learn how your
        small act of kindness can save lives.
      </p>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full h-[35vmin] rounded-xl overflow-hidden shadow-lg">
            <div id={`yt-player-${index}`} className="w-full h-full">
              {!videolaoding ? (
                <h1 className="text-[30px] font-extrabold text-center pt-12">
                  Loading....
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodDonationVideos;
