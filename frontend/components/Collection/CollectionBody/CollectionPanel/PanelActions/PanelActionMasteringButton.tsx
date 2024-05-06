import {useDisclosure} from "@chakra-ui/react";
import {useState} from "react";
import Question from "Frontend/generated/com/application/models/Question";
import {motion} from "framer-motion";
import CollectionMastering from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMastering";

export default function PanelActionMasteringButton(props: any) {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [questions, setQuestions] = useState<Question[]>([])
    const [buttonText, setButtonText] = useState("Chế độ cày cuốc")

    return (<>
        <motion.button
            className={"panel-action-button mastering"}
            onClick={onOpen}
            whileHover={{backgroundColor: '#3454ce', color: '#eee', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}
            whileTap={{scale: 0.9}}
        >{buttonText}</motion.button>
        <CollectionMastering isOpen={isOpen} onClose={onClose} setButtonText={setButtonText}/>
    </>)
}