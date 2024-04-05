import { WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";

export default function DictionaryResultExplain(props : any) {
    const word = useContext(WordContext);
    return(
        <div
            className={"dictionary-result-explain"}
            style={{
                gridColumn: "span 8",
                gridRow: "span 5",
                padding: '20px 10px',
                borderRadius: '10px',
                border: '1px solid #eee',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                boxShadow: '0 0 10px #eee',
            }}
        >
            {word.explain}
        </div>
    )
}