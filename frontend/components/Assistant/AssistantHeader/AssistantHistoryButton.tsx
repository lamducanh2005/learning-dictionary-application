import {RepeatClockIcon} from "@chakra-ui/icons";
import {motion} from "framer-motion";
import AssistantHistoryPanel from "Frontend/components/Assistant/AssistantHeader/AssistantHistoryPanel";
import {useDisclosure} from "@chakra-ui/react";

export default function AssistantHistoryButton(props: any) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <motion.button
            className={"assistant-history-button"}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
            onClick={onOpen}
        >
            <RepeatClockIcon/>
            <AssistantHistoryPanel isOpen={isOpen} onClose={onClose}/>
        </motion.button>
    )
}