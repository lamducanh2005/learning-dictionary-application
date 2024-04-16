import {Avatar, useToast} from "@chakra-ui/react";
import RequestType from "Frontend/components/Assistant/AssistantBody/AssistantChatDisplay/RequestType";
import {motion} from "framer-motion";
import ReactMarkdown from "react-markdown";
import {useEffect} from "react";

export default function ResponseFromAssistant(props: any) {

    const toast = useToast();

    useEffect(() => {
        toast.closeAll();
    }, []);

    return (
        <motion.div
            className={"response-from-assistant"}
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: 'spring', stiffness: 400, damping: 15}}
        >
            <div className={"left"}>
                <div className={"assistant-avatar"}></div>
            </div>
            <div className={"right"}>
                <div className={"assistant-name"}>Lambda Assistant</div>
                <div className={"request-type"}>
                    {// @ts-ignore
                        RequestType[props.request.type]
                    }
                </div>
                <div className={"response-content"}>
                    <ReactMarkdown>{props.request.response}</ReactMarkdown>
                </div>
            </div>
        </motion.div>
    )
}