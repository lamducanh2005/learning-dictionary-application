import axios from 'axios';

export default async function LambdaAssistantGPTCore(request: string) {
    const options = {
        method: 'POST',
        url: 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '620199cee9mshc6129bc1e15efc6p185e94jsn04e1851615c6',
            'X-RapidAPI-Host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com'
        },
        data: {
            messages: [
                {
                    role: 'user',
                    content: request
                }
            ],
            model: 'gpt-4-turbo-preview',
            max_tokens: 4096,
            temperature: 0.9
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
    }
}