import {Avatar} from "@chakra-ui/react";
import {useContext} from "react";
import {ProfileContext} from "Frontend/App";
import RequestType from "Frontend/components/Assistant/AssistantBody/AssistantChatDisplay/RequestType";
import ReactMarkdown from "react-markdown";

export default function RequestFromProfile(props: any) {

    const profile = useContext(ProfileContext)

    return (
        <div className={"request-from-profile"}>
            <div className={"left"}>
                <Avatar bg={"#999"} zIndex={-1}/>
            </div>
            <div className={"right"}>
                <div className={"profile-name"}>{profile.name}</div>
                <div className={"request-type"}>
                    {// @ts-ignore
                        RequestType[props.request.type]
                    }
                </div>
                <div className={"request-content"}>
                    <ReactMarkdown>{props.request.request}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}