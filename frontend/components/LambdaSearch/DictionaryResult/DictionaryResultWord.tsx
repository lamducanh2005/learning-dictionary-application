import 'Frontend/themes/LambdaSearch/DictionaryResult/DictionaryResultWord.css'

export default function DictionaryResultWord(props : any) {

    const state : any = {
        "A1" : "a1-level",
        "A2" : "a2-level",
        "B1" : "b1-level",
        "B2" : "b2-level",
        "C1" : "c1-level",
        "C2" : "c2-level"
    }

    return(
        <div className={"dictionary-result-word " + state[props.level]}>
            <div className={"wrapper"}>
                <div className={"word " + state[props.level]}> {props.word} </div>
                <div className={"type-and-level" + state[props.level]}> {props.type + ", mức độ " + props.level} </div>
            </div>
        </div>
    )
}