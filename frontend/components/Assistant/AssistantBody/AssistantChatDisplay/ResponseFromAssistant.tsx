import {Avatar} from "@chakra-ui/react";
import RequestType from "Frontend/components/Assistant/AssistantBody/AssistantChatDisplay/RequestType";
import {motion} from "framer-motion";

export default function ResponseFromAssistant(props: any) {
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
                <div className={"response-content"}>{props.request.response}</div>
            </div>
        </motion.div>
    )
}