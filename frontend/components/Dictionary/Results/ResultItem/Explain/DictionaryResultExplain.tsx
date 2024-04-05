import { WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";
import LambdaAnimatedText from "Frontend/components/LambdaComponents/LambdaText/LambdaAnimatedText";
import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultExplain.css';
export default function DictionaryResultExplain(props : any) {
    const word = useContext(WordContext);
    return(
        <div className={"dictionary-result-explain"}>
            <div className={"title"}>Giải mã</div>
            <div className={"content"}>
                { word.explain }
            </div>
        </div>
    )
}