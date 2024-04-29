import {AddIcon} from "@chakra-ui/icons";
import {
    Button, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

export default function AddProfileButton(props: any) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [profileName, setProfileName] = useState<String>("Người dùng không tên");

    const handleClick = () => {
        props.onClick({name: profileName});
        onClose();
    }

    return (
        <>
            <div className={"add-profile-button"} onClick={onOpen}><AddIcon/></div>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent className={"add-profile-popup"}>
                    <ModalHeader>Tạo hồ sơ mới</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Input
                            placeholder="Nhập tên hồ sơ"
                            onChange={(e) => setProfileName(e.target.value)}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <button className={"submit-button"} onClick={handleClick}>Tạo hồ sơ</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}