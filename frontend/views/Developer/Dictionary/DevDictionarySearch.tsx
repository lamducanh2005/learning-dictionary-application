import DevSuggestions from "Frontend/views/Developer/Dictionary/DevDictionarySearch/DevSuggestions";
import DevSearchBox from "Frontend/views/Developer/Dictionary/DevDictionarySearch/DevSearchBox";
import 'Frontend/themes/Developer/DevDictionary/DevDictionarySearch.css'
import {useState} from "react";

export default function DevDictionarySearch(props: any) {

    const [input, setInput] = useState("");


    return (
        <div className={"dev-dictionary-search"}>
            <DevSearchBox onChange={setInput}/>
            <DevSuggestions onNavigate={props.onNavigate} inputData={input}/>
        </div>
    );
}