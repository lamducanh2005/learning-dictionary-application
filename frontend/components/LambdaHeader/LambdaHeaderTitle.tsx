export default function LambdaHeaderTitle(props : any) {


    return(
        <div
            {...props}
            className={"lambda-header-title"}
            style={{
                fontSize: "24px",
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: "bold",
            }}

        >
            {props.title}
        </div>
    )
}