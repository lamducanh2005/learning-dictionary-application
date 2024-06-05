import 'Frontend/themes/Collection/CollectionMastering/CollectionMasteringQuestion.css';
import {motion} from 'framer-motion';
import {useContext, useEffect, useState} from "react";
import answer from "Frontend/generated/com/application/models/Answer";
import Answer from "Frontend/generated/com/application/models/Answer";
import {ProfileContext} from "Frontend/App";
import {WordService} from "Frontend/generated/endpoints";
import {MinusIcon, TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";
import {MasteringContext} from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMastering";


export default function CollectionMasteringQuestion(props: any) {

    const profile = useContext(ProfileContext);
    const masteringContext = useContext(MasteringContext);
    const question = props.question;
    const [time, setTime] = useState(
        (question.masteryMax <= 25) ? 30 :
            (question.masteryMax <= 50) ? 60 :
                (question.masteryMax <= 75) ? 90 : 120
    );
    const [result, setResult] = useState(7905);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => (prevTime <= 1) ? 0 : prevTime - 1);
        }, 1000);
    }, []);


    useEffect(() => {
        if (time === 0) {
            setResult(0);
            setTimeout(masteringContext.nextQuestion, 1000);
        }
    }, [time]);


    const handleSelect = async (answer: Answer) => {

        const response = await WordService.increaseMasteryRateWithMasteryMax(
            question.wordId, // @ts-ignore
            profile.id,
            answer.masteryIncrease,
            question.masteryMax
        );
        setResult(response);

        let newResultAnalysis = masteringContext.resultAnalysis;
        newResultAnalysis.questionAnswered += 1;
        if (response < 0) newResultAnalysis.decreaseMastery -= response;
        else newResultAnalysis.increaseMastery += response;
        masteringContext.setResultAnalysis(newResultAnalysis);
        setTimeout(masteringContext.nextQuestion, 1000);
    }

    return (
        <motion.div
            className={"collection-mastering-question"}
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 400, damping: 20}}
        >

            <div className={"question-information-bar"}>
                <div className={"question-index"}>Câu hỏi {masteringContext.index}</div>
                <div style={{flex: 1}}/>
                {(result === 7905) ? <></> : <QuestionResult result={result}/>}
                <div className={"question-timer"}>{time} giây</div>
            </div>

            <div className={"question-content"}>{question.question}</div>

            <div className={"question-answers"}>
                {question.answers.map((answer: Answer, index: number) => {
                    return (
                        <motion.div
                            className={"question-answer"}
                            key={answer.id}
                            onClick={() => handleSelect(answer)}
                            whileHover={{backgroundColor: '#d8eaff'}}
                            whileTap={{scale: 0.9}}
                        >
                            <div className={"question-answer-index"}>{String.fromCharCode(65 + index)}</div>
                            <div className={"question-answer-content"}>{answer.answer}</div>
                        </motion.div>
                    )
                })}
            </div>

        </motion.div>
    )
}


const QuestionResult = (props: any) => {
    return (
        <motion.div
            className={
                (props.result > 0) ? "question-result increase" :
                    (props.result < 0) ? "question-result decrease" : "question-result"
            }
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 400, damping: 20}}
        >
            {"Độ thành thạo  "}
            {(props.result > 0) ? <TriangleUpIcon/> :
                (props.result < 0) ? <TriangleDownIcon/> : <MinusIcon/>}
            {" " + Math.abs(props.result)}
        </motion.div>
    )
}