export default function LambdaHeaderTitle(props : any) {
    return(
        <div
            {...props}
            className={"lambda-header-title"}
            style={{
                fontSize: "20px",
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: "bold",
            }}
        >
            {props.title}
        </div>
    )
}