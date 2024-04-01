export default function LambdaHeader(props : any) {
    return(
        <div
            className={"lambda-header"}
            style={{
                position: 'sticky',
                top: 10,
                zIndex: 100,
                width: '100%',
                height: '75px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px 20px',

                backgroundColor: 'rgba(230, 230, 230, 0.5)',
                border: '1px solid rgba(200, 200, 200, 0.5)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'JetBrains Mono, monospace',

            }}
        >
            {props.children}
        </div>
    )
}