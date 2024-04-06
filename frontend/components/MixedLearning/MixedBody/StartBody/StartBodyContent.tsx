import ContentSection from "Frontend/components/MixedLearning/MixedBody/StartBody/StartBodyContent/ContentSection";
import 'Frontend/themes/MixedLearning/MixedBody/StartBody/StartBodyContent.css';

export default function StartBodyContent() {
    return (
        <div className={"start-body-content"}>
            <ContentSection title={"Cuộc sống"} items={[1, 2, 3, 4]}/>
            <ContentSection title={"Giải trí"} items={[1, 2, 3, 4]}/>
            <ContentSection title={"Phim ảnh"} items={[1, 2, 3, 4]}/>
            <ContentSection title={"Trò chơi"} items={[1, 2, 3, 4]}/>
        </div>
    )
}