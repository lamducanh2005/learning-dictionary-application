import {motion} from "framer-motion";
import CollectionLearning from "Frontend/components/Collection/CollectionBody/CollectionLearning/CollectionLearning";
import {useDisclosure} from "@chakra-ui/react";

export default function PanelActionLearningButton(props: any) {

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (<>
        <motion.button
            className={"panel-action-button learning"}
            onClick={onOpen}
            whileHover={{
                backgroundColor: '#3454ce',
                color: '#eee',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}
            whileTap={{scale: 0.9}}
        >Chế độ học</motion.button>
        <CollectionLearning isOpen={isOpen} onClose={onClose}/>
    </>)
}