import {AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList, Item} from "@choc-ui/chakra-autocomplete";
import * as events from "events";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";

export default function LambdaSearchBox(props : any) {

    const [inputValue, setInputValue] = useState();

    return(
        <div
            className={"lambda-search-box"}
            style={{ display: "flex", flexDirection: "row" }}
        >
            <AutoComplete
                onSelectOption={(item : any) => {
                    setInputValue(item.item.value);
                    props.onSearch(item.item.value);
                }}
            >
                <AutoCompleteInput
                    spellCheck={false}
                    onChange={(e : any) => {
                        setInputValue(e.target.value);
                        props.onSearchChange(e.target.value);
                    }}
                    placeholder={"Nhập vào từ cần tìm kiếm"}
                    className={"lambda-search-input"}
                    style={{
                        minWidth: 480,
                        height: 40,
                        backgroundColor: 'white',
                    }}
                />
                <AutoCompleteList >
                    {
                        props.suggestions.map((item : string) => {
                            return (
                                <AutoCompleteItem value={item} key={item} />
                            );
                        })
                    }
                </AutoCompleteList>
            </AutoComplete>

            <div style={{width: 20}}></div>
            <motion.button
                onClick={() => props.onSearch(inputValue)}
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    minWidth: 120,
                    height: 40,
                }}
            >
                Tìm kiếm
            </motion.button>
        </div>
    )
}