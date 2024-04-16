import {motion} from "framer-motion";

export default function NavigationDictionaryItem() {
    return (
        <motion.a
            className={"navigation-item dictionary"}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.95}}
            href={"/lambda/dictionary"}
        >
            <div className={"title"}>Từ điển</div>
        </motion.a>
    )
}