import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults.css'
import {useParams} from "react-router-dom";
import DevResultWord from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultWord";
import DevResultType from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultType";
import DevResultExplain from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultExplain";
import DevResultRelated from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultRelated";
import DevResultLevel from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultLevel";
import DevResultExamples from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultExamples";


export default function DevDictionaryResults(props: any) {

    return (
        <div className={"dev-dictionary-results"}>
            <DevResultWord wordId={props.id}/>
            <DevResultType wordId={props.id}/>
            <DevResultLevel wordId={props.id}/>
            <DevResultExplain wordId={props.id}/>
            <DevResultExamples wordId={props.id}/>
            <DevResultRelated wordId={props.id}/>
        </div>
    );
}