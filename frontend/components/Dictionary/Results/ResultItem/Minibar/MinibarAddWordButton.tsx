import {AddIcon} from "@chakra-ui/icons";
import 'Frontend/themes/Dictionary/Results/ResultItem/Minibar/MinibarAddWord.css';

import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/react";
import MinibarAddWord from "Frontend/components/Dictionary/Results/ResultItem/Minibar/AddWord/MinibarAddWord";

export default function MinibarAddWordButton() {
    return(
        <Popover>
            <PopoverTrigger>
                <button className={"minibar-add-word-button"}><AddIcon/></button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow/>
                <PopoverHeader>Thêm vào bộ sưu tập</PopoverHeader>
                <PopoverCloseButton/>
                <PopoverBody>
                    <MinibarAddWord/>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}