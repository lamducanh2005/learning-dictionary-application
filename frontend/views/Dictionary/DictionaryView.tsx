import DictionaryHeader from "Frontend/views/Dictionary/DictionaryHeader";
import DictionaryBody from "Frontend/views/Dictionary/DictionaryBody";
import {useEffect, useState} from "react";
import Word from "Frontend/generated/com/application/models/Word";
import {WordService} from "Frontend/generated/endpoints";

export default function DictionaryView(props : any) {

    const [searchResults, setSearchResults] = useState<Word[]>([]);

    const handleSearch = async (searchKey : string) => {
        const response = await WordService.getWordsByWord(searchKey);
        setSearchResults(response);
        console.log(response);
    }

    return(
        <div className={"dictionary-view"}>
            <DictionaryHeader onSearch={handleSearch} />
            <DictionaryBody results={searchResults} />
        </div>
    )
}