import { WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";
import LambdaAnimatedText from "Frontend/components/LambdaComponents/LambdaText/LambdaAnimatedText";
import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultExplain.css';
import {Highlight} from "@chakra-ui/react";
import {motion} from "framer-motion";
export default function DictionaryResultExplain(props : any) {
    const word = useContext(WordContext);
    return(
        <div className={"dictionary-result-explain"}>
            <div className={"title"}>Giải mã</div>
            <div className={"content"}>
                {word.explain?.split(/\[(.*?)\]/).map((part, index) => {
                    if (index % 2 === 0) {
                        return <span key={index}>{part}</span>;
                    } else {
                        return (
                            <motion.span
                                key={index}
                                style={{
                                    padding: '2px 5px',
                                    backgroundColor: '#faedbe',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {part}
                            </motion.span>
                        )
                    }

                })}
            </div>
        </div>
    )
}