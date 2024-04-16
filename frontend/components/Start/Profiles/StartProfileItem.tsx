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
            initial={{rotate: -5, scale: 0.9, opacity: 0}}
            animate={{rotate: 0, scale: 1, opacity: 1}}
            whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                color: 'black',
            }}
            whileTap={{
                scale: 0.95,
            }}
            transition={{type: "spring", stiffness: 400, damping: 10}}
        >
            <Avatar bg={"#999"} size={"sm"}/>
            <div className={"profile-name"}>{props.profile.name}</div>
        </motion.div>
    )
}