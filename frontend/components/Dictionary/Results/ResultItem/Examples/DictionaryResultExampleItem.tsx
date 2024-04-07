import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultExamples.css';
import { motion } from 'framer-motion';

const formatExample = (exampleText: string) => {
    return exampleText.split(/\[(.*?)\]/).map((part: any, index: any) =>
        (index % 2 === 0) ? <span key={index}>{part}</span> :
            (
                <span key={index} style={{
                    padding: '2px 5px',
                    backgroundColor: '#faedbe',
                    color: 'black',
                    fontWeight: 'bold',
                }}>{part}</span>
            )
    )
}

export default function DictionaryResultExampleItem(props : any) {
    return(
        <motion.div
            className={"dictionary-result-example-item"}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1}}
        >
            <div className={"label"}>{props.example.label}</div>
            <div className={"content"}>
                <div className={"vi"}>{formatExample(props.example.viExample)}</div>
                <div className={"en"}>{formatExample(props.example.enExample)}</div>
            </div>
        </motion.div>
    )
}