import {AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList, Item} from "@choc-ui/chakra-autocomplete";
import * as events from "events";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import {SearchIcon} from "@chakra-ui/icons";

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

            <div style={{width: 10}}></div>
            <motion.button
                onClick={() => props.onSearch(inputValue)}
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '5px',
                    height: 40,
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <SearchIcon />
            </motion.button>
        </div>
    )
}