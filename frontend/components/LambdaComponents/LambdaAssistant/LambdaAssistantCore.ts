import {GoogleGenerativeAI, HarmBlockThreshold, HarmCategory} from "@google/generative-ai";
import {useEffect, useState} from "react";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyA680XOSflL0iM1CMQDuPsb-Z2e_MX3JBU";
export default async function LambdaAssistantCore(request: string) {

    var response = '-'

    const runChat = async () => {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({model: MODEL_NAME});

        const generationConfig = {
            temperature: 0.9, topK: 1, topP: 1, maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
        ];

        const chat = model.startChat({
            generationConfig, safetySettings, history: []
        });

        const result = await chat.sendMessage(request);
        return result.response.text()
    }

    return await runChat();
}