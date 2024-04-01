import {AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList} from "@choc-ui/chakra-autocomplete";
import * as events from "events";
import { motion } from "framer-motion";

export default function LambdaSearchBox(props : any) {

    return(
        <div
            className={"lambda-search-box"}
            style={{ display: "flex", flexDirection: "row" }}
        >
            <AutoComplete>
                <AutoCompleteInput
                    onChange={(e : any) => props.onSearchChange(e.target.value)}
                    placeholder={props.placeholder}
                    className={"lambda-search-input"}
                    style={{
                        minWidth: 480,
                        height: 50,
                        backgroundColor: 'white',
                    }}
                />
                <AutoCompleteList>
                    {
                        props.suggestions.map((item : string) => {
                            return <AutoCompleteItem value={item} key={item} />;
                        })
                    }
                </AutoCompleteList>
            </AutoComplete>

            <div style={{width: 20}}></div>
            <motion.button
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    minWidth: 120,
                    height: 50,
                }}
            >
                Tìm kiếm
            </motion.button>
        </div>
    )
}