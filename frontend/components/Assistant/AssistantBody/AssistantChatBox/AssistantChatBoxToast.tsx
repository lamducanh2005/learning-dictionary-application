import {ViewIcon} from "@chakra-ui/icons";

export default function AssistantChatBoxToast(props: any) {
    return (
        <div
            className={"assistant-chat-box-toast"}
            style={{
                backgroundColor: 'rgba(240, 240, 245, 0.5)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(200, 200, 200, 0.5)',
                borderRadius: '10px',
                fontSize: '14px',
                textAlign: 'justify',
                textIndent: '1.5em',
                width: '320px',
                padding: '10px 30px',
                fontFamily: 'JetBrains Mono, monospace',
                boxShadow: '0 0 10px rgba(200, 200, 200, 0.25)',
                marginBottom: '50px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <ViewIcon color={"#000"} style={{marginRight: 20}} w={10} h={10}/>
            <div>Trợ lý đã nhận được câu hỏi của bạn và đang suy nghĩ câu trả lời...</div>

        </div>
    )
}