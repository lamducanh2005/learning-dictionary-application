import {motion} from "framer-motion";

export default function CollectionPrivateItem(props: any) {
    return (
        <motion.div
            className={"collection-item"}
            initial={{scale: 0.9, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.95}}
        >
            <div className={"title"}>{props.collection.name}</div>
            <div className={"description"}>{props.collection.description}</div>
        </motion.div>
    )
}