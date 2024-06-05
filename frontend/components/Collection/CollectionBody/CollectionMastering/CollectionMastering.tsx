import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {createContext, useContext, useEffect, useState} from "react";
import 'Frontend/themes/Collection/CollectionMastering/CollectionMastering.css';
import Question from "Frontend/generated/com/application/models/Question";
import {CollectionContext, PanelContext} from "Frontend/components/Collection/CollectionBody";
import {CollectionService} from "Frontend/generated/endpoints";
import {motion} from "framer-motion";
import CollectionMasteringStart
    from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMasteringStart";
import CollectionMasteringEnd
    from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMasteringEnd";
import CollectionMasteringQuestion
    from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMasteringQuestion";
import {ProfileContext} from "Frontend/App";

export const MasteringContext = createContext({} as any);

export default function CollectionMastering(props: any) {
    const panel = useContext(PanelContext)
    const collection = useContext(CollectionContext);
    const profile = useContext(ProfileContext);
    const [questions, setQuestions] = useState<Question[]>([])
    const [index, setIndex] = useState(-1);

    const [resultAnalysis, setResultAnalysis] = useState({
        // Số liệu thống kê sau khi hoàn thành bài cày cuốc
        increaseMastery: 0,
        decreaseMastery: 0,
        beforeCollectionMastery: 0,
        afterCollectionMastery: 0,
        questionAnswered: 0,
    })

    useEffect(() => {
        const updateQuestions = async () => {
            if (collection.id) {
                const response = await CollectionService.getQuestionsForCollection(collection.id);
                setQuestions(response);
                let newResultAnalysis = resultAnalysis; // @ts-ignore
                newResultAnalysis.beforeCollectionMastery = await CollectionService.getExactMasteryOfCollection(collection.id, profile.id);
                setResultAnalysis(newResultAnalysis);
            }
        }
        updateQuestions();
    }, [collection]);

    useEffect(() => {
        if (index >= questions.length) props.setButtonText("Xem lại thành quả");
        else if (index >= 0) props.setButtonText("Tiếp tục cày cuốc");
        else props.setButtonText("Bắt đầu cày cuốc");
    }, [index]);

    useEffect(() => {
        const updateResult = async () => {
            let newResultAnalysis = resultAnalysis; // @ts-ignore
            if (collection.id) newResultAnalysis.beforeCollectionMastery = await CollectionService.getExactMasteryOfCollection(collection.id, profile.id);
            setResultAnalysis(newResultAnalysis);
        }
        updateResult();
    }, [collection]);


    return (
        <MasteringContext.Provider value={{
            resultAnalysis: resultAnalysis,
            setResultAnalysis: setResultAnalysis,
            index: index + 1,
            setIndex: setIndex,
            nextQuestion: () => setIndex(index + 1),
            numberOfQuestion: questions.length,
            onClose: props.onClose,
        }}>
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay className={"collection-mastering-overlay"}/>
            <ModalContent className={"collection-mastering"}>
                <ModalHeader>Cày cuốc</ModalHeader>
                <ModalCloseButton onClick={() => setTimeout(panel.reopenPanel, 100)}/>
                <ModalBody>
                    {
                        (index === -1) ?
                            <CollectionMasteringStart/> : (index >= questions.length) ?
                                <CollectionMasteringEnd/> :
                                <CollectionMasteringQuestion key={questions[index].id} question={questions[index]}/>
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
                                    onClick={() => setIndex(index + 1)}
                                >Bỏ qua câu này
                                </motion.button>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.9}}
                                    className={"end-button"}
                                    onClick={() => setIndex(questions.length)}
                                >Kết thúc
                                </motion.button>
                            </> : (index >= questions.length) ?
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.9}}
                                    className={"restart-button"}
                                    onClick={async () => {
                                        setIndex(-1);
                                        setResultAnalysis({
                                            increaseMastery: 0,
                                            decreaseMastery: 0, // @ts-ignore
                                            beforeCollectionMastery: await CollectionService.getExactMasteryOfCollection(collection.id, profile.id),
                                            afterCollectionMastery: 0,
                                            questionAnswered: 0,
                                        });
                                    }}
                                >Làm lại lần nữa</motion.button> : <></>
                    }

                </ModalFooter>
            </ModalContent>
        </Modal>
        </MasteringContext.Provider>
    )
}