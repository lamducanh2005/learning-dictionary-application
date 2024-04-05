import DictionaryHeader from "Frontend/views/Dictionary/DictionaryHeader";
import DictionaryBody from "Frontend/views/Dictionary/DictionaryBody";
import {createContext, useEffect, useState} from "react";
import Word from "Frontend/generated/com/application/models/Word";
import {WordService} from "Frontend/generated/endpoints";

export const SearchResultsContext = createContext([] as Word[])

export default function DictionaryView(props : any) {

    const [searchResults, setSearchResults] = useState<Word[]>([]);

    const handleSearch = async (searchKey : string) => {
        const response = await WordService.getWordsByWord(searchKey);
        setSearchResults(response);
        console.log(response);
    }

    return(
        <SearchResultsContext.Provider value={searchResults}>
        <div className={"dictionary-view"}>
            <DictionaryHeader onSearch={handleSearch} />
            <DictionaryBody />
        </div>
        </SearchResultsContext.Provider>
    )
}