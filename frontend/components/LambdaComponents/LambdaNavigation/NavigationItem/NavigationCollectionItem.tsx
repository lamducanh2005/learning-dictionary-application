import {motion} from "framer-motion";

export default function NavigationCollectionItem() {
    return (
        <motion.a
            className={"navigation-item collection"}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.95}}
            href={"/lambda/collection"}
        >
            <div className={"title"}>Bộ sưu tập</div>
        </motion.a>
    )
}