import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultExamples.css';
import { motion } from 'framer-motion';
export default function DictionaryResultExampleItem(props : any) {
    return(
        <motion.div
            className={"dictionary-result-example-item"}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1}}
        >
            {props.example}
        </motion.div>
    )
}