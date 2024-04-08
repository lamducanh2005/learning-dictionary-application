import LambdaAudioButton from "Frontend/components/LambdaComponents/LambdaAudio/LambdaAudioButton";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";

export default function MinibarAudioButton(props : any) {

    const word = useContext(WordContext)

    const getAudioUrl = () => {
        if (word.audioUrl !== '-' && props.text === 'US') return word.audioUrl;

        const specialWord1 = (props.text === 'US') ? 'us_pron' : 'uk_pron';
        const specialWord2 = (props.text === 'US') ? '__us_1.mp3' : '__gb_1.mp3';
        const specialWord = word.word + specialWord2;
        return 'https://www.oxfordlearnersdictionaries.com/media/english/'
            + specialWord1 + '/'
            + specialWord.substring(0, 1) + '/'
            + specialWord.substring(0, 3) + '/'
            + specialWord.substring(0, 5) + '/'
            + word.word + specialWord2;

    }

    return(
        <LambdaAudioButton audioUrl={getAudioUrl()}>
            {props.text}
        </LambdaAudioButton>
    )
}