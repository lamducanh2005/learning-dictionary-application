import DictionaryResultWord from "Frontend/components/LambdaSearch/DictionaryResult/DictionaryResultWord";
import DictionaryResultExplain from "Frontend/components/LambdaSearch/DictionaryResult/DictionaryResultExplain";
import DictionaryResultExamples from "Frontend/components/LambdaSearch/DictionaryResult/DictionaryResultExamples";
import DictionaryResultRelated from "Frontend/components/LambdaSearch/DictionaryResult/DictionaryResultRelated";
import DictionaryResultMinibar from "Frontend/components/LambdaSearch/DictionaryResult/DictionaryResultMinibar";
import Word from "Frontend/generated/com/application/models/Word";

export default function LambdaDictionaryResultItem(props : any) {



    return(
        <div
            className={"lambda-dictionary-result-item"}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridGap: '10px',
                width: '100%',
                marginBottom: '75px'
            }}
        >
            <DictionaryResultWord word={props.word.word} type={props.word.type} level={props.word.level} />
            <DictionaryResultMinibar />
            <DictionaryResultExplain />
            <DictionaryResultExamples />
            <DictionaryResultRelated />
        </div>
    )
}