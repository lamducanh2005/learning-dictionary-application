import {motion} from "framer-motion";
import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Portal
} from "@chakra-ui/react";
import {useContext} from "react";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";

export default function DictionaryResultRelatedItem(props : any) {

    const word = useContext(WordContext);
    const comparedWord = props.relatedItem.comparedWord;
    const score = props.relatedItem.score;
    const explaining = props.relatedItem.explaining;

    const statusColor =
        (score >= 90) ? "#0f880b" :
            (score >= 75) ? "#34a86b" :
                (score <= -90) ? "#9f1f1f" :
                    (score <= -75) ? "#ff6600" :
                        "#1e34c0";

    const scoreMeaning =
        (score >= 75) ? ("Tỷ lệ đồng nghĩa: " + score.toString() + "%") :
            (score <= -75) ? ("Tỷ lệ trái nghĩa: " + (-score).toString() + "%") :
                "Từ liên quan";

    return(
        <Popover>
            <PopoverTrigger>
                <button className={"dictionary-result-related-item"}>
                    <div className={"status"} style={{backgroundColor: statusColor, outlineColor: statusColor}}/>
                    {comparedWord}
                </button>
            </PopoverTrigger>
            <PopoverContent className={"related-item-popover"} style={{zIndex: 100000}}>
                <PopoverArrow/>
                <PopoverCloseButton/>
                <PopoverBody>
                    <div className={"related-item-score"}>
                        <div
                            className={"status"}
                            style={{backgroundColor: statusColor, outlineColor: statusColor}}
                        />
                        <div style={{color: statusColor}}>{scoreMeaning}</div>

                    </div>
                    <div className={"related-item-word"}>
                        {comparedWord}
                        {/*<span style={{color: '#ccc', }}>{" ~ " + word.word}</span>*/}
                    </div>
                    <div className={"related-item-explaining"}>
                        {explaining.split(/\[(.*?)\]/).map((part: any, index: number) => {
                            if (index % 2 === 0) {
                                return <span key={index}>{part}</span>;
                            } else {
                                return (
                                    <span key={index} style={{
                                        padding: '2px 5px',
                                        backgroundColor: '#faedbe',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}
                                    >{part}</span>
                                )
                            }
                        })}</div>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    )
}