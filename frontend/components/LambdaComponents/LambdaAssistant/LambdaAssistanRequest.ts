import LambdaAssistantCore from "Frontend/components/LambdaComponents/LambdaAssistant/LambdaAssistantCore";

export default async function LambdaAssistantRequest(request: string, type: string) {
    const templates = {
        'translate-eng-to-vie': 'Tôi cần dịch đoạn tiếng Anh sau, hãy dịch sang tiếng Việt giúp tôi: "' + request + '"',
        'translate-vie-to-eng': 'Tôi cần dịch đoạn tiếng Việt sau, hãy dịch sang tiếng Anh giúp tôi: "' + request + '"',
    }


    // @ts-ignore
    return await LambdaAssistantCore(templates[type])

}