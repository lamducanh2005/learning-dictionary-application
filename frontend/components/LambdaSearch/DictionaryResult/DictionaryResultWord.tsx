export default function DictionaryResultWord(props : any) {

    const backgroundColor : any = {
        'A1': '#228102',
        'A2': '#a1f584',
        'B1': '#7cbeee',
        'B2': '#041e60',
        'C1': '#ad0909',
        'C2': '#440606'
    }

    const textColor : any = {
        "A1" : "#c8eabe",
        "A2" : "#287028",
        "B1" : "#091386",
        "B2" : "#83aff6",
        "C1" : "#f5afa8",
        "C2" : "#f68989",

    }



    return(
        <div
            className={"dictionary-result-word"}
            style={{
                gridColumn: 'span 4',
                gridRow: 'span 2',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 20px',
                aspectRatio: '1 / 1',
                fontFamily: 'JetBrains Mono, monospace',

                backgroundColor: backgroundColor[props.level],
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
            }}
        >
            <div
                className={"wrapper"}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <div style={{ fontSize: 32, fontWeight: 'bold', color: textColor[props.level] }}> {props.word} </div>
                <div style={{ fontSize: 14, color: textColor[props.level] }}> {props.type + ", mức độ " + props.level} </div>


            </div>

        </div>
    )
}