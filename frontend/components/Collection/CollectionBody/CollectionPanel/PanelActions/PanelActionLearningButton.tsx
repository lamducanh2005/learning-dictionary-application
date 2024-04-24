import {motion} from "framer-motion";

export default function PanelActionLearningButton(props: any) {
    return (
        <motion.button
            className={"panel-action-button learning"}
            whileHover={{
                backgroundColor: '#3454ce',
                color: '#eee',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}
            whileTap={{scale: 0.9}}
        >Chế độ học</motion.button>
    )
}