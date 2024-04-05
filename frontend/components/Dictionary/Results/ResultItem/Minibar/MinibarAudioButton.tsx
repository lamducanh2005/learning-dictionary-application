import LambdaAudioButton from "Frontend/components/LambdaComponents/LambdaAudio/LambdaAudioButton";

export default function MinibarAudioButton(props : any) {
    return(
        <LambdaAudioButton
            style={{
                height: '100%',
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px #eee',
                border: '1px solid #eee',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: '1 / 1',
            }}
            audioUrl={props.audioUrl}
        >

        </LambdaAudioButton>
    )
}