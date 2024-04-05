import DictionaryResultRelatedItem
    from "Frontend/components/Dictionary/Results/ResultItem/Related/DictionaryResultRelatedItem";

export default function DictionaryResultRelated(props : any) {
    return(
        <div className={"dictionary-result-synonyms"}>
            {
                props.relatedItems.maps((relatedItem : any) => {
                    return <DictionaryResultRelatedItem/>
                })
            }
        </div>
    )
}