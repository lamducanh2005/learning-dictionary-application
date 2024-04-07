import {useEffect, useState} from "react";
import Word from "Frontend/generated/com/application/models/Word";
import {WordService} from "Frontend/generated/endpoints";
import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults/DevResultWord.css';

export default function DevResultWord(props: any) {

    const [word, setWord] = useState({} as Word);

    useEffect(() => {
        const findWord = async () => {
            const response = await WordService.getWordById(props.wordId);
            setWord(response);
        }
        if (props.wordId)
            findWord();
    }, [props.wordId]);

    return (
        props.wordId ? (
            <div className={"dev-result-word"}>
                <div className={"id"}> ID: {word.id} </div>
                <div className={"word"}> {word.word}</div>
            </div>
        ) : <></>
    );
}