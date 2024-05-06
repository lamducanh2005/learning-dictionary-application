import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultWord.css'
import { WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";

export default function DictionaryResultWord(props : any) {

    const word = useContext(WordContext);

    return(
        <div className={"dictionary-result-word"}>
            <div className={"wrapper"}>
                <div className={"word"}> {word.word} </div>
                <div className={"type"}> {word.type} </div>
                <div style={{height: '30px'}}/>
                <div className={ // @ts-ignore
                    "level " + word.level
                }> {word.level} </div>
            </div>
        </div>
    )
}