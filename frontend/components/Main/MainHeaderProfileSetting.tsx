import 'Frontend/themes/Main/MainHeader/ProfileSetting.css';
import {SettingsIcon} from "@chakra-ui/icons";
import {
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import {motion} from 'framer-motion';
import {useContext, useEffect, useState} from "react";
import {ProfileContext} from "Frontend/App";
import {ProfileService} from "Frontend/generated/endpoints";


export default function MainHeaderProfileSetting(props: any) {

    const profile = useContext(ProfileContext);
    const [profileName, setProfileName] = useState<string>("");
    const [deleteConfirm, setDeleteConfirm] = useState("Xóa hồ sơ");

    useEffect(() => {// @ts-ignore
        setProfileName(profile.name);
    }, [profile]);

    const handleSaveChange = async () => {
        let savedProfile = profile;
        savedProfile.name = profileName;
        await ProfileService.addProfile(savedProfile);
        onClose();
        setTimeout(() => window.location.reload(), 100);
    }

    const handleDeleteProfile = async () => {
        if (deleteConfirm === "Xóa hồ sơ") {
            setDeleteConfirm("Nhấn 2 lần nữa để xóa");
        } else if (deleteConfirm === "Nhấn 2 lần nữa để xóa") {
            setDeleteConfirm("Nhấn 1 lần nữa để xóa");
        } else { // @ts-ignore
            await ProfileService.deleteProfileById(profile.id);
            onClose();
            window.location.href = "/"
        }
    }

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (<>

        <motion.div
            className={"main-header-profile-setting"}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={onOpen}
        >
            <SettingsIcon/>
        </motion.div>

        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
            <ModalOverlay className={"profile-setting-overlay"}/>
            <ModalContent className={"profile-setting-popup"}>
                <ModalHeader>Thiết đặt hồ sơ</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <div className={"profile-setting-label"}>Tên hồ sơ</div>
                    <Input
                        style={{backgroundColor: "#fff"}}
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        spellCheck={false}
                    />
                </ModalBody>
                <ModalFooter>
                    <motion.button
                        className={"delete-profile-button"}
                        onClick={handleDeleteProfile}
                        whileHover={{backgroundColor: "#ac1717", color: "#eee"}}
                        whileTap={{scale: 0.9}}
                    >{deleteConfirm}</motion.button>
                    <motion.button
                        className={"switch-profile-button"}
                        onClick={() => window.location.href = "/"}
                        whileHover={{backgroundColor: "#e42a2a", color: "#eee"}}
                        whileTap={{scale: 0.9}}
                    >
                        Chuyển hồ sơ
                    </motion.button>
                    <div style={{flex: 1}}/>
                    <motion.button
                        className={"save-change-button"}
                        onClick={handleSaveChange}
                        whileHover={{backgroundColor: "#1f59d7", color: "#eee"}}
                        whileTap={{scale: 0.9}}
                    >Lưu thay đổi
                    </motion.button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </>)
}