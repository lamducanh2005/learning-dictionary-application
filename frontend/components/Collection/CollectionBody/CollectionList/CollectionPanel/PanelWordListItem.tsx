import {DeleteIcon} from "@chakra-ui/icons";
import {motion} from "framer-motion";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay, Button,
    useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";

export default function PanelWordListItem(props: any) {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const cancelRef = useRef<any>()

    const handleDelete = () => {
        props.onDelete(props.word.id);
        onClose();
    }

    return (
        <div className={"panel-word-list-item"}>
            <span className={"word"}>{props.word.word}</span>
            <motion.button
                className={"delete-button"}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                onClick={onOpen}
            >
                <DeleteIcon className={"icon"}/>
            </motion.button>

            <AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
                motionPreset={'slideInBottom'}
                isCentered
            >
                <AlertDialogOverlay style={{
                    backgroundColor: 'rgba(150, 150, 150, 0.25)'
                }}/>
                <AlertDialogContent className={"delete-alert-dialog"}>
                    <AlertDialogHeader>Chắc chắn xóa?</AlertDialogHeader>
                    <AlertDialogBody>
                        Bạn có chắc chắn muốn xóa từ {props.word.word} ra khỏi bộ sưu tập này không?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <motion.button
                            className={"cancel-button"}
                            ref={cancelRef}
                            onClick={onClose}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >Không
                        </motion.button>
                        <motion.button
                            className={"confirm-button"}
                            onClick={handleDelete}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >Chắn chắn xóa
                        </motion.button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}