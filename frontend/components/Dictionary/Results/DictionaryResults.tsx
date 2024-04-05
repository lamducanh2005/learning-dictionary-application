import Word from "Frontend/generated/com/application/models/Word";
import DictionaryResultItem from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import { SearchResultsContext} from "Frontend/views/Dictionary/DictionaryView";
import {useContext} from "react";

export default function DictionaryResults(props : any) {

    const results = useContext(SearchResultsContext);

    return(
        <div
            className={"lambda-dictionary-search-results"}
            style={{
                width: '720px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {
                results.map((result : Word) => {
                    return <DictionaryResultItem key={result.id} word={result} />
                })
            }
        </div>
    )
}