import {MessageInput} from "@hilla/react-components/MessageInput";
import 'Frontend/themes/Assistant/AssistantChat/AssistantChatBox.css';
import {useContext, useState} from "react";
import {Menu} from "@chakra-ui/react";
import AssistantChatBoxMenu from "Frontend/components/Assistant/AssistantBody/AssistantChatBox/AssistantChatBoxMenu";
import AssistantChatBoxInput from "Frontend/components/Assistant/AssistantBody/AssistantChatBox/AssistantChatBoxInput";
import {ChatIcon} from "@chakra-ui/icons";
import {motion} from "framer-motion";
import AssistantRequest from "Frontend/generated/com/application/models/AssistantRequest";
import {ProfileContext} from "Frontend/App";
import {AssistantRequestService} from "Frontend/generated/endpoints";
import LambdaAssistantRequest from "Frontend/components/LambdaComponents/LambdaAssistant/LambdaAssistanRequest";

export default function AssistantChatBox(props: any) {

    const profile = useContext(ProfileContext);
    const [type, setType] = useState("text");
    const [request, setRequest] = useState("");

    const handleClick = async () => {
        const newRequest: AssistantRequest = {
            request: request,
            response: await LambdaAssistantRequest(request, type),
            type: type,
            profileId: (profile.id) ? profile.id : 1
        }
        props.onAddRequest(newRequest);
        await AssistantRequestService.addRequest(newRequest);
    }

    return (
        <div className={"assistant-chat-box"}>
            <AssistantChatBoxMenu setType={setType}/>
            <AssistantChatBoxInput setRequest={setRequest}/>
            <motion.button
                className={"assistant-chat-box-submit"}
                whileHover={{backgroundColor: 'rgba(25, 25, 25, 1)'}}
                whileTap={{scale: 0.9}}
                onClick={handleClick}
            >
                <ChatIcon color={"#fff"}/>
            </motion.button>
        </div>
    )
}