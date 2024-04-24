import {motion} from "framer-motion";

export default function LambdaAudioButton(props : any) {
    return(

        props.audioUrl === "-" ? <></> :
            <motion.div
                className={"lambda-audio-button"}
                style={props.style}
                onClick={() => {
                    const audio = new Audio(props.audioUrl);
                    audio.play();
                    console.log(props.audioUrl);
                }}
                whileTap={{scale: 0.8}}
            >
                {props.children}
            </motion.div>
    )
}