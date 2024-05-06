import {motion} from "framer-motion";
import {useContext, useState} from "react";
import {PanelContext, CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {CollectionService} from "Frontend/generated/endpoints";
import * as events from "events";

export default function PanelActionEditButton(props: any) {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const collection = useContext(CollectionContext)
    const panel = useContext(PanelContext)
    const [collectionName, setCollectionName] = useState(collection.name);

    const handleSave = async () => {
        let newCollection = collection;
        newCollection.name = collectionName;
        await CollectionService.saveCollection(newCollection);
        onClose();
        panel.reopenPanel()
    }

    const handleDelete = async () => {

        onClose(); // @ts-ignore
        await CollectionService.deleteCollectionById(collection.id);
        setTimeout(panel.closePanel, 100);
    }

    return (
        <>
            <motion.button
                className={"panel-action-button edit"}
                onClick={onOpen}
                whileHover={{
                    backgroundColor: '#3454ce',
                    color: '#eee',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{scale: 0.9}}
            >Chỉnh sửa bộ sưu tập
            </motion.button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
                <ModalOverlay backgroundColor={'rgba(0, 0, 0, 0.1)'}/>
                <ModalContent className={"collection-edit-popover"}>
                    <ModalHeader>Chỉnh sửa bộ sưu tập</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormLabel>Tên bộ sưu tập</FormLabel>
                        <Input
                            value={collectionName}
                            onChange={(e) => setCollectionName(e.target.value)}
                            backgroundColor={'white'}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <motion.button
                            className={"delete-collection-button"}
                            onClick={(e: any) => {
                                if (e.target.innerText === 'Xóa bộ sưu tập') {
                                    e.target.innerText = 'Bấm lần nữa để xóa';
                                } else {
                                    handleDelete();
                                }
                            }}
                            whileHover={{
                                backgroundColor: '#ce3434',
                                color: '#eee',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                            }}
                            whileTap={{scale: 0.9}}
                            transition={{duration: 0.1}}
                        >Xóa bộ sưu tập
                        </motion.button>
                        <div style={{flex: 1}}/>
                        <motion.button
                            className={"cancel-change-button"}
                            onClick={onClose}
                            whileTap={{scale: 0.9}}
                            whileHover={{
                                backgroundColor: '#333',
                                color: '#eee',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                            }}
                            transition={{duration: 0.1}}
                        >Hủy
                        </motion.button>
                        <motion.button
                            className={"save-change-button"}
                            onClick={handleSave}
                            whileHover={{
                                backgroundColor: '#3454ce',
                                color: '#eee',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                            }}
                            whileTap={{scale: 0.9}}
                            transition={{duration: 0.1}}
                        >Lưu thay đổi
                        </motion.button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}