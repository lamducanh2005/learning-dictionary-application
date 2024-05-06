import DictionaryResults from "Frontend/components/Dictionary/Results/DictionaryResults";

export default function DictionaryBody(props : any) {
    return(
        <div
            className={"dictionary-view-body"}
            style={{paddingTop: 150, paddingBottom: 150}}
        >
            <DictionaryResults />
        </div>
    )
}