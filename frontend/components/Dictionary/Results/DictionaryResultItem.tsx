import DictionaryResultWord from "Frontend/components/Dictionary/Results/ResultItem/Word/DictionaryResultWord";
import DictionaryResultExplain from "Frontend/components/Dictionary/Results/ResultItem/Explain/DictionaryResultExplain";
import DictionaryResultExamples from "Frontend/components/Dictionary/Results/ResultItem/Examples/DictionaryResultExamples";
import DictionaryResultRelated from "Frontend/components/Dictionary/Results/ResultItem/Related/DictionaryResultRelated";
import DictionaryResultMinibar from "Frontend/components/Dictionary/Results/ResultItem/Minibar/DictionaryResultMinibar";
import Word from "Frontend/generated/com/application/models/Word";
import { motion } from "framer-motion";
import {createContext} from "react";
import DictionaryResultStatistic
    from "Frontend/components/Dictionary/Results/ResultItem/Statistic/DictionaryResultStatistic";
import DictionaryResultNote from "Frontend/components/Dictionary/Results/ResultItem/Note/DictionaryResultNote";

export const WordContext = createContext({} as Word);

export default function DictionaryResultItem(props : any) {

    return(
        <WordContext.Provider value={props.word}>
            <motion.div
                className={"lambda-dictionary-result-item"}
                style={{zIndex: props.zIndex}}
                initial={{scale: 0.95, opacity: 0,}}
                whileInView={{scale: 1, opacity: 1, transition: {type: 'spring'}}}
            >
                <DictionaryResultWord/>
                <DictionaryResultMinibar/>
                <DictionaryResultNote/>
                <DictionaryResultExplain/>
                {(props.word.examples.length > 0) ? <DictionaryResultExamples/> : <> </>}
                <DictionaryResultRelated/>
            </motion.div>
        </WordContext.Provider>
    )
}