import {motion} from "framer-motion";

export default function NavigationAssistantItem() {
    return (
        <motion.a
            className={"navigation-item assistant"}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.95}}
            href={"/lambda/assistant"}
        >
            <div className={"title"}>Trợ lý</div>
        </motion.a>
    )
}