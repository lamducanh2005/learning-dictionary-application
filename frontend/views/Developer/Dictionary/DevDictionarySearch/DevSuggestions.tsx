import {useEffect, useState} from "react";
import {WordService} from "Frontend/generated/endpoints";
import Word from "Frontend/generated/com/application/models/Word";

export default function DevSuggestions(props: any) {

    const [words, setWords] = useState<Word[]>([])

    useEffect(() => {
        const updateSuggestions = async () => {
            if (props.inputData !== "") {
                const response = await WordService.getWordsByPrefix(props.inputData);
                setWords(response);
            }
        }
        updateSuggestions();
    }, [props.inputData]);

    return (
        <div className={"dev-suggestions"}>
            {words.map((word: Word) => {
                return (
                    <div onClick={() => props.onNavigate(word.id)} className={"dev-suggestions-item"} key={word.id}>
                        <div className={"word"}>{word.word}</div>
                        <div style={{flex: 1}}></div>
                        <div className={"id"}>{word.id}</div>
                    </div>
                )
            })}
        </div>
    );
}