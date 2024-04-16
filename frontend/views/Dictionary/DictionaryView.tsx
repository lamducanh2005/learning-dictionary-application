import DictionaryHeader from "Frontend/components/Dictionary/DictionaryHeader";
import DictionaryBody from "Frontend/components/Dictionary/DictionaryBody";
import {createContext, useContext, useEffect, useState} from "react";
import Word from "Frontend/generated/com/application/models/Word";
import {WordService} from "Frontend/generated/endpoints";
import {ProfileContext} from "Frontend/App";

export const SearchResultsContext = createContext([] as Word[])

export default function DictionaryView(props : any) {

    const [searchResults, setSearchResults] = useState<Word[]>([]);

    const handleSearch = async (searchKey : string) => {
        const response = await WordService.getWordsByWord(searchKey);
        setSearchResults(response);
        console.log(response);
    }

    const profile = useContext(ProfileContext);

    return(
        <SearchResultsContext.Provider value={searchResults}>
        <div className={"dictionary-view"}>
            <DictionaryHeader onSearch={handleSearch} />
            <DictionaryBody />
        </div>
        </SearchResultsContext.Provider>
    )
}