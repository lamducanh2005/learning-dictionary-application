import { motion } from "framer-motion";

export default function SearchResultItem(props : any) {
    return (
        <motion.div
            className={"search-result-item"}
            initial={{scale: 0.5, opacity: 0.1}}
            whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    type: "spring",
                }
            }}
        >

        </motion.div>
    )
}