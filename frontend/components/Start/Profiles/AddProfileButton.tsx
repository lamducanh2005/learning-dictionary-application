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
import {useEffect, useState} from "react";

export default function AddProfileButton(props: any) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [profileName, setProfileName] = useState<String>("Người dùng không tên");

    const handleClick = () => {
        props.onClick({name: profileName, visible: 1});
        onClose();
    }

    return (
        <>
            <div className={"add-profile-button"} onClick={onOpen}><AddIcon/></div>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay className={"add-profile-overlay"}/>
                <ModalContent className={"add-profile-popup"}>
                    <ModalHeader>Tạo hồ sơ mới</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Input
                            placeholder="Nhập tên hồ sơ"
                            onChange={(e) => setProfileName(e.target.value)}
                            spellCheck={false}
                            style={{backgroundColor: "#fff"}}
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