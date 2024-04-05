import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultWord.css'
import { WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";

export default function DictionaryResultWord(props : any) {

    const word = useContext(WordContext);
    const state : any = {
        "A1" : "a1-level",
        "A2" : "a2-level",
        "B1" : "b1-level",
        "B2" : "b2-level",
        "C1" : "c1-level",
        "C2" : "c2-level"
    }

    return(
        <div className={"dictionary-result-word"}>
            <div className={"wrapper"}>
                <div className={"word"}> {word.word} </div>
                <div className={"type-and-level"}> {word.type + ", mức độ " + word.level} </div>
            </div>
        </div>
    )
}