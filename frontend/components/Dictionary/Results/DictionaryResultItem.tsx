import DictionaryResultWord from "Frontend/components/Dictionary/Results/ResultItem/Word/DictionaryResultWord";
import DictionaryResultExplain from "Frontend/components/Dictionary/Results/ResultItem/Explain/DictionaryResultExplain";
import DictionaryResultExamples from "Frontend/components/Dictionary/Results/ResultItem/Examples/DictionaryResultExamples";
import DictionaryResultRelated from "Frontend/components/Dictionary/Results/ResultItem/Related/DictionaryResultRelated";
import DictionaryResultMinibar from "Frontend/components/Dictionary/Results/ResultItem/Minibar/DictionaryResultMinibar";
import Word from "Frontend/generated/com/application/models/Word";
import { motion } from "framer-motion";
import {createContext} from "react";

export const WordContext = createContext({} as Word);

export default function DictionaryResultItem(props : any) {

    return(
        <WordContext.Provider value={props.word}>
        <motion.div
            className={"lambda-dictionary-result-item"}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridGap: '10px',
                width: '100%',
                marginBottom: '100px',
                fontFamily: 'JetBrains Mono, monospace',
                padding: '10px 10px 0 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 10px rgba(200, 200, 200, 0.2)',
            }}
            initial={{ scale: 0.9, opacity: 0, }}
            whileInView={{ scale: 1, opacity: 1, transition: { type: 'spring'} }}

        >
            <DictionaryResultWord />
            <DictionaryResultMinibar />
            <DictionaryResultExplain />
            <DictionaryResultExamples />
            {/*<DictionaryResultRelated />*/}
        </motion.div>
        </WordContext.Provider>
    )
}