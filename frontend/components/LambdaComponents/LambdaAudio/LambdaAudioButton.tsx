export default function LambdaAudioButton(props : any) {
    return(

        props.audioUrl === "-" ? <></> :
            <div
                className={"lambda-audio-button"}
                style={props.style}
                onClick={() => {
                    const audio = new Audio(props.audioUrl);
                    audio.play();
                    console.log(props.audioUrl);
                }}
            >
                {props.children}
            </div>
    )
}