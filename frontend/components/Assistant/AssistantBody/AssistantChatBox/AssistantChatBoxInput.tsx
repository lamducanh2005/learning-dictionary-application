import {useEffect, useRef, useState} from "react";

export default function AssistantChatBoxInput(props: any) {

    const [input, setInput] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        props.setRequest(input);
        if (textareaRef.current) {
            textareaRef.current.style.height = "45px";
            if (textareaRef.current.scrollHeight < 145)
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            else
                textareaRef.current.style.height = `145px`;
        }
    }, [input]);

    return (
        <textarea
            ref={textareaRef}
            className={"assistant-chat-box-input"}
            onChange={(e) => setInput(e.target.value)}
            style={{overflow: "auto", resize: "none"}}
            spellCheck={false}
        />
    )
}