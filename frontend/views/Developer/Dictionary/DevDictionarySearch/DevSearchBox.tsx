export default function DevSearchBox(props: any) {
    return (
        <div className={"dev-search-box"}>
            <input
                type={"text"}
                placeholder={"Tìm kiếm"}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
}