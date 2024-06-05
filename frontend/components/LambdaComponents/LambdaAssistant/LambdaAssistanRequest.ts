import LambdaAssistantGeminiCore from "Frontend/components/LambdaComponents/LambdaAssistant/LambdaAssistantGeminiCore";
import LambdaAssistantGPTCore from "Frontend/components/LambdaComponents/LambdaAssistant/LambdaAssistantGPTCore";
import LambdaAssistantTranslationCore
    from "Frontend/components/LambdaComponents/LambdaAssistant/LambdaAssistantTranslationCore";

export default async function LambdaAssistantRequest(request: string, type: string) {
    const templates = {
        'translate-eng-to-vie': 'Tôi cần dịch đoạn tiếng Anh sau, hãy dịch sang tiếng Việt giúp tôi: "' + request + '"',
        'translate-vie-to-eng': 'Tôi cần dịch đoạn tiếng Việt sau, hãy dịch sang tiếng Anh giúp tôi: "' + request + '"',
        'synonym': 'Hãy liệt kê các từ tiếng Anh đồng nghĩa với từ "' + request + '", trong đó nên giải thích một chút xem mỗi từ đó giống và khác từ "' + request + '" như thế nào?',
        'antonym': 'Hãy liệt kê các từ tiếng Anh trái nghĩa với từ "' + request + '", các từ trái nghĩa nhất thì sắp xếp lên đầu, mỗi từ thì hãy giải thích một chút.',
        'explaining': 'Tôi là một đang học tiếng Anh, hãy giải nghĩa cho tôi từ "' + request + '"',
        'grammar-check': 'Tôi đang học tiếng Anh, hãy giúp tôi kiểm tra ngữ pháp trong câu sau: "' + request + '". Hãy chỉ ra cụ thể lỗi sai ở đâu, vì sao nó sai và cách sửa nó.',
        'paraphrase': 'I would like to paraphrase the sentence: "' + request + '". Please rephrase it in the most natural way possible, ensuring that it remains similar in length and maintains the same level of English proficiency.',
    }


    // @ts-ignore
    if (type === 'translate-eng-to-vie')
        return LambdaAssistantTranslationCore(request, 'en', 'vi');
    else if (type === 'translate-vie-to-eng')
        return LambdaAssistantTranslationCore(request, 'vi', 'en');
    else if (type === 'paraphrase')
        return await LambdaAssistantGeminiCore(templates[type]);
    else // @ts-ignore
        return await LambdaAssistantGPTCore(templates[type]);

}