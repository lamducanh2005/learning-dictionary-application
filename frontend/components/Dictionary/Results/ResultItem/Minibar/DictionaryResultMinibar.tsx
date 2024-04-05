
import MinibarAddWordButton from "Frontend/components/Dictionary/Results/ResultItem/Minibar/MinibarAddWordButton";
import MinibarAudioButton from "Frontend/components/Dictionary/Results/ResultItem/Minibar/MinibarAudioButton";
import MinibarKnownWordMarker
    from "Frontend/components/Dictionary/Results/ResultItem/Minibar/MinibarKnownWordMarker";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext} from "react";

export default function DictionaryResultMinibar(props : any) {

    const word = useContext(WordContext)

    return(
        <div
            className={"dictionary-result-minibar"}
            style={{
                gridColumn: "span 8",
                gridRow: "span 1",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: '5px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid #eee',

            }}
        >
            <MinibarKnownWordMarker />
            <div style={{width: '5px'}} />
            <MinibarAudioButton audioUrl={word.audioUrl} />
            <div style={{flex: 1}} />
            <MinibarAddWordButton />
        </div>
    )
}