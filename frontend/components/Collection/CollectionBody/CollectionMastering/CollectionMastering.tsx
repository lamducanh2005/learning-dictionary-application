import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";
import 'Frontend/themes/Collection/CollectionMastering/CollectionMastering.css';
import Question from "Frontend/generated/com/application/models/Question";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {CollectionService} from "Frontend/generated/endpoints";
import {motion} from "framer-motion";
import CollectionMasteringStart
    from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMasteringStart";
import CollectionMasteringEnd
    from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMasteringEnd";
import CollectionMasteringQuestion
    from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMasteringQuestion";

export default function CollectionMastering(props: any) {

    const collection = useContext(CollectionContext);
    const [questions, setQuestions] = useState<Question[]>([])
    const [index, setIndex] = useState(-1);

    const [resultAnalysis, setResultAnalysis] = useState({
        // Số liệu thống kê sau khi hoàn thành bài cày cuốc
        increaseMastery: 0,
        decreaseMastery: 0,
        beforeCollectionMastery: 0,
        afterCollectionMastery: 0,
        questionAnswered: 0,
        increaseMasteryLine: [0,],
        decreaseMasteryLine: [0,],
    })

    useEffect(() => {
        const updateQuestions = async () => {
            if (collection.id) {
                const response = await CollectionService.getQuestionsForCollection(collection.id);
                setQuestions(response);
                let newResultAnalysis = resultAnalysis;
                newResultAnalysis.beforeCollectionMastery = await CollectionService.getExactMasteryOfCollection(collection.id);
                setResultAnalysis(newResultAnalysis);
            }
        }
        updateQuestions();
    }, [collection]);

    useEffect(() => {
        if (index >= questions.length) props.setButtonText("Xem lại thành quả");
        else if (index >= 0) props.setButtonText("Tiếp tục cày cuốc");
    }, [index]);

    useEffect(() => {
        const updateResult = async () => {
            let newResultAnalysis = resultAnalysis;
            if (collection.id) newResultAnalysis.beforeCollectionMastery = await CollectionService.getMasteryOfCollection(collection.id);
            setResultAnalysis(newResultAnalysis);
        }
        updateResult();
    }, [collection]);


    const nextQuestion = () => setIndex(index + 1);
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay className={"collection-mastering-overlay"}/>
            <ModalContent className={"collection-mastering"}>
                <ModalHeader>Chinh phục</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    {
                        (index === -1) ?
                            <CollectionMasteringStart
                                numberOfQuestion={questions.length}
                                nextQuestion={nextQuestion}
                                onClose={props.onClose}
                            /> : (index >= questions.length) ?

                                <CollectionMasteringEnd
                                    numberOfQuestion={questions.length}
                                    resultAnalysis={resultAnalysis}
                                /> :

                                <CollectionMasteringQuestion
                                    key={questions[index].id}
                                    index={index + 1}
                                    question={questions[index]}
                                    nextQuestion={nextQuestion}
                                    numberOfQuestion={questions.length}
                                    resultAnalysis={resultAnalysis}
                                    setResultAnalysis={setResultAnalysis}
                                />
                    }
                </ModalBody>
                <ModalFooter>
                    {
                        (index >= 0 && index < questions.length) ?
                            <>
                                <motion.button
                                    className={"skip-button"}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.9}}
                                    onClick={nextQuestion}
                                >Bỏ qua câu này
                                </motion.button>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.9}}
                                    className={"end-button"}
                                    onClick={() => setIndex(questions.length)}
                                >Kết thúc
                                </motion.button>
                            </> : <></>
                    }

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}