import DictionaryHeader from "Frontend/views/Dictionary/DictionaryHeader";
import DictionaryBody from "Frontend/views/Dictionary/DictionaryBody";

export default function DictionaryView(props : any) {



    return(
        <div className={"dictionary-view"}>
            <DictionaryHeader />
            <DictionaryBody />
        </div>
    )
}