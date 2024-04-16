import {Avatar, useToast} from "@chakra-ui/react";
import {LockIcon, RepeatIcon} from "@chakra-ui/icons";
import {motion} from "framer-motion";
import {useContext} from "react";
import {ProfileContext} from "Frontend/App";

export default function NavigationProfile() {

    const profile = useContext(ProfileContext);

    return (
        <div className={"navigation-profile"}>
            <Avatar bg={"#999"} size={"sm"}/>
            <div className={"profile-name"}>{profile.name}</div>
            <div style={{flex: 1}}/>
            <motion.a
                className={"profile-logout"}
                whileHover={{scale: 1.05, backgroundColor: '#c91c1c', color: '#ddd'}}
                whileTap={{scale: 0.95, backgroundColor: '#8c0e0e', color: '#dcb8b8'}}
                href={"/"}
            >
                Chuyển hồ sơ
            </motion.a>
        </div>
    )
}