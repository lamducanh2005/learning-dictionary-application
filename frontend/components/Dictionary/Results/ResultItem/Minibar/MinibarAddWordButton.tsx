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
import {motion} from "framer-motion";

export default function MinibarAddWordButton() {
    return(
        <Popover>
            <PopoverTrigger>
                <motion.button className={"minibar-add-word-button"}><AddIcon/></motion.button>
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