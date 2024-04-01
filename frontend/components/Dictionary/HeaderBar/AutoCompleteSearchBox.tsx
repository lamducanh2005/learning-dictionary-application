import {AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList} from "@choc-ui/chakra-autocomplete";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import {WordService} from "Frontend/generated/endpoints";

export default function AutoCompleteSearchBox(props: any) {
    const [searchKey, setSearchKey] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState<String[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if(searchKey !== "") {
                const response = await WordService.getSuggestionsByPrefix(searchKey);
                setSearchSuggestions(response);
            }
        }
        fetchData();
    }, [searchKey]);

    return (
        <div className={props.className}>

            <AutoComplete maxSuggestions={10}>
                <AutoCompleteInput className={props.inputClassName} onChange={(e : any) => setSearchKey(e.target.value)}/>
                <AutoCompleteList  spellCheck={false}>
                    {
                        searchSuggestions.map((item) => {
                            return (
                                <AutoCompleteItem
                                    key={item}
                                    value={item}
                                    className={props.itemClassName}
                                    onClick={() => props.onSearch(searchKey)}
                                />
                            );
                        })
                    }
                </AutoCompleteList>
            </AutoComplete>

            <motion.button
                className={props.buttonClassName}
                onClick={() => props.onSearch(searchKey)}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{
                    scale: 0.9,
                }}
            >
                Search
            </motion.button>
        </div>
    )
}