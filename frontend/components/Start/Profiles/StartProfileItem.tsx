import {Avatar} from "@chakra-ui/react";
import {motion} from "framer-motion";

export default function StartProfileItem(props: any) {

    const handleClick = () => {
        localStorage.setItem('profile-id', props.profile.id.toString());
        window.location.href = "/lambda";
    }

    return (
        <motion.div
            className={"start-profile-item"} onClick={handleClick}
            initial={{scale: 0.9, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            whileHover={{backgroundColor: 'rgba(245, 245, 245, 1)'}}
            whileTap={{scale: 0.9,}}
            transition={{type: "spring", stiffness: 200, damping: 20}}
        >
            <Avatar bg={"#999"} size={"sm"}/>
            <div className={"profile-name"}>{props.profile.name}</div>
        </motion.div>
    )
}