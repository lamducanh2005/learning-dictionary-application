import LambdaSearchBox from "Frontend/components/LambdaSearch/LambdaSearchBox";
import {useEffect, useState} from "react";
import {WordService} from "Frontend/generated/endpoints";

export default function LambdaDictionarySearchBox(props : any) {

    const [wordInput, setWordInput] = useState<string>("");
    const [wordSuggestions, setWordSuggestions] = useState<string[]>([]);

    const handleSearchChange = (searchInput : string) => {
        setWordInput(searchInput);
    }

    useEffect(() => {
        const updateSuggestions = async () => {
            if (wordInput.length > 0) {
                const response = await WordService.getSuggestionsByPrefix(wordInput);
                setWordSuggestions(response);
            }
        }
        updateSuggestions();
    })

    return(
        <div className={"lambda-dictionary-search-box"}>
            <LambdaSearchBox
                onSearchChange={handleSearchChange}
                suggestions={wordSuggestions}
                placeholder={"Nhập để tìm kiếm từ vựng"}
            />
        </div>
    )
}