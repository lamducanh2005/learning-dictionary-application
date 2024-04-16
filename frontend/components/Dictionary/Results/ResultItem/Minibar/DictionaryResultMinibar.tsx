import MinibarAddWordButton from "Frontend/components/Dictionary/Results/ResultItem/Minibar/MinibarAddWordButton";
import MinibarAudioButton from "Frontend/components/Dictionary/Results/ResultItem/Minibar/MinibarAudioButton";
import MinibarKnownWordMarker
    from "Frontend/components/Dictionary/Results/ResultItem/Minibar/MinibarKnownWordMarker";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";
import 'Frontend/themes/Dictionary/Results/ResultItem/Minibar/DictionaryResultMinibar.css';

export default function DictionaryResultMinibar(props : any) {

    const word = useContext(WordContext)

    return(
        <div className={"dictionary-result-minibar"}>
            {/*<MinibarKnownWordMarker />*/}
            {/*<div style={{width: '5px'}} />*/}
            <MinibarAudioButton audioUrl={word.audioUrl} text={'US'}/>
            <div style={{width: '5px'}}/>
            <MinibarAudioButton audioUrl={word.audioUrl} text={'UK'}/>
            <div className={"flex-spacer"}/>
            <MinibarAddWordButton />
        </div>
    )
}