import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultExamples.css';
import DictionaryResultExampleItem from "Frontend/components/Dictionary/Results/ResultItem/Examples/DictionaryResultExampleItem";
import { WordContext } from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";
import Word from "Frontend/generated/com/application/models/Word";

export default function DictionaryResultExamples(props : any) {

    const word : Word = useContext(WordContext);
    return (
        <div className={"dictionary-result-examples"}>
            <div className={"title"}>Các ví dụ </div>
            <div className={"wrapper"}>
                {word.examples?.map((example : any) => {
                    return <DictionaryResultExampleItem key={example.id} example={example}/>
                })}
            </div>
        </div>
    )
}