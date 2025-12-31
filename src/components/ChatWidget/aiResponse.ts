'use server';

import { GoogleGenAI } from "@google/genai";

import { Message } from "@/types/company";
import sshSofttechData from "@/data/ssh-data.json";

const genAI = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const systemInstruction = `
You are the official AI assistant for SSH Softtech, a software agency specialized in ai products and software services.
Your tone is professional, technical yet accessible, and helpful.

CORE DATA: ${JSON.stringify(sshSofttechData)}

RULES:
1. ONLY answer questions based on the "CORE DATA".
2. If user is enquiring about our products or services, act like a professional salesperson.
3. Keep answers concise and short.
4. Use markdown formatting (bold, headers, italics, lists, line-breaks, etc.).
`;

export async function getAiResponse(messages: Message[]) {
    try {
        const response = await genAI.models.generateContent({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: {
                    parts: [{ text: systemInstruction }]
                }
            },
            contents: messages.map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            }))
        });

        return response.text || "No response generated.";
    } catch (error) {
        console.error("Error generating AI response:", error);
        return "I apologize, but I am unable to connect to the SSH Softtech services right now. Please try again later.";
    }
}
