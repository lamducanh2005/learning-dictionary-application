import ReadingHeader from "Frontend/components/Reading/ReadingHeader";
import ReadingBody from "Frontend/components/Reading/ReadingBody";

export default function ReadingView() {
    return (
        <div className={"reading-view"}>
            <ReadingHeader/>
            <ReadingBody/>
        </div>
    )
}