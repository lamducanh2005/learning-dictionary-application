import DictionaryResults from "Frontend/components/Dictionary/Results/DictionaryResults";

export default function DictionaryBody(props : any) {
    return(
        <div
            className={"dictionary-view-body"}
            style={{marginTop: 150}}
        >
            <DictionaryResults />
        </div>
    )
}