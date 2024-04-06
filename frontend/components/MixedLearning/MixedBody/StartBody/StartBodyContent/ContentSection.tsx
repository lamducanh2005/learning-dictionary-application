import 'Frontend/themes/MixedLearning/MixedBody/StartBody/StartBodyContent/ContentSection.css';
import ContentSectionItem
    from "Frontend/components/MixedLearning/MixedBody/StartBody/StartBodyContent/ContentSectionItem";
import {motion} from 'framer-motion';

export default function ContentSection(props: any) {
    return (
        <motion.div
            className={"start-body-content-section"}
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
        >
            <div className={"title"}>{props.title}</div>
            <div className={"wrapper"}>
                {props.items.map((item: any, index: any) => {
                    return <ContentSectionItem key={index}/>
                })}
            </div>
        </motion.div>
    )
}