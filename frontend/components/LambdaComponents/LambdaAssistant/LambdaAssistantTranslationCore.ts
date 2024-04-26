export default async function LambdaAssistantTranslationCore(request: String, sourceLanguage: String, targetLanguage: String) {
    const response = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + sourceLanguage + '&tl=' + targetLanguage + '&dt=t&q=' + request);
    const data = await response.json();
    return data[0][0][0];
}