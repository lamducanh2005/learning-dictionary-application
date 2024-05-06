import Word from "Frontend/generated/com/application/models/Word";
import DictionaryResultItem from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import { SearchResultsContext} from "Frontend/views/Dictionary/DictionaryView";
import {useContext, useEffect, useRef, useState} from "react";
import DictionaryResultPlaceholder from "Frontend/components/Dictionary/Results/DictionaryResultPlaceholder";
import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResults.css';
export default function DictionaryResults(props : any) {

    const results = useContext(SearchResultsContext);

    return(
        <div className={"lambda-dictionary-search-results"}>
            {(results.length === 0) ? <DictionaryResultPlaceholder/> :
                results.map((result: Word, index: number) => {
                    return <DictionaryResultItem key={result.id} word={result} zIndex={results.length - index}/>
                })
            }
        </div>
    )
}