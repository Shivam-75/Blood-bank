import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";
import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
config({ path: "./.env" });

const ai = new GoogleGenAI({ apiKey: process.env.AI_KEYTOKEN });


const SYSTEM_PROMPT = `
You are a medical assistant AI that provides detailed and reliable information about medicines.
When the user provides only a medicine name, respond in Hinglish (simple Hindi written in Latin script mixed with English) using the following structured format in clear, easy-to-understand language:

1. Medicine Name: (Full name of the medicine)
2. Generic Name: (If available)
3. Category / Type: (e.g., Antibiotic, Painkiller, Antihistamine, etc.)
4. Uses: (Main uses and conditions this medicine treats)
5. Dosage Information: (Common dosage and form: tablet, syrup, injection, etc.)
6. Side Effects: (Common and serious side effects)
7. Precautions / Warnings: (When not to use, medical advice, pregnancy warnings, etc.)
8. Interactions: (With other drugs, alcohol, or food)
9. Storage Instructions: (How to store the medicine safely)
10. Note: (Any special instructions, doctor advice, or country-specific information)

- Always reply in Hinglish: use simple Hindi words written in Latin script (for example "bukhar", "dard", "garbhavati") mixed with clear English medical terms when helpful.
- Do not use any markdown symbols like ** or ## in the reply.
- Keep sentences short and user-friendly; avoid technical jargon unless necessary, and if you use it, briefly explain in Hinglish.
- If the user asks a general question (not a medicine name), give a natural, informative answer about medicine or healthcare in Hinglish.
- If information is region-specific (laws, brand names, availability), mention the country if known, otherwise say "country-specific info ho sakta hai alag ho".
- When giving dosage or safety advice, include a clear recommendation to consult a qualified doctor for personalized guidance.
`;


export const AiHandler = async (req, res) => {
  const { message } = req.body;

  try {
    if (!message) {
      return res.status(400).json({ message: "Ask Question ", success: false });
    }
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${SYSTEM_PROMPT}\nUser Query: ${message}`,
    });

    return res.status(200).json({ message: "Successfully Reponse ", success: true, data: response?.text });
  } catch (err) {
    return res.status(500).json({ message: "Server Error ai !!", success: false, err: err.message });
  }

}


//? admin login Checker


export const AdminLoginProfile = async (req, res) => {
  const { emailId, password } = req.body;
  try {

    const userSearch = await User.findOne({ emailId });

    if (!userSearch) {
      return res.status(401).json({ message: "User Not Found !!", success: false });
    }

    const passwordVerify = await bcrypt.compare(password, userSearch.password);

    if (!passwordVerify) {
      return res.status(403).json({ message: "Credentail Error Email Password Wrong !!", success: false });
    }

    const createJwtToken = await jwt.sign(
      {
        payload: emailId,
        id: userSearch._id,
      },
      process.env.ADMIN_SECREAT_TOKEN,
      { expiresIn: process.env.ADMIN_TOKEN_EXPIRY })


    return res.status(200)
      .cookie("AdminAccessToken", createJwtToken, { httpOnly: true, secure: true, maxAge: 30 * 60 * 1000 }).json({ message: "Admin Login Successfully !!", success: true });

  } catch (err) {
    return res.status(500).json({ message: "Server Error admin Login !!", success: false, err: err.message });

  }
}

//? admin profile checker

export const adminDetailChecker = async (req, res) => {
  try {
    if (!req.admin) {
      return res.status(402).json({ message: "User Not A Admin !!", success: false });
    }

    return res.status(200).json({ message: "Successfully Fatched Admin Data !!", data: req.adminData, success: true });

  } catch (err) {
    return res.status(500).json({ message: "Admin Detail Server Error", success: false, err: err.message });
  }
}