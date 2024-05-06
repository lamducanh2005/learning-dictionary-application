import {motion} from "framer-motion";

export default function MainViewReadingItem(props: any) {
    return (
        <div className={"main-view-menu-item reading"}>
            <div className={"title"}>Truyện chêm</div>
            <div className={"description"}>
                Học tiếng Anh theo cách rất tự nhiên và không áp lực
            </div>
            <motion.a
                className={"button"}
                animate={{
                    backgroundImage: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(5px)',
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                }}
                whileHover={{
                    scale: 1.05,
                    backdropFilter: 'blur(20px)',
                }}
                whileTap={{
                    scale: 0.95,
                }}
                href={"/lambda/reading"}
            >Khám phá
            </motion.a>
        </div>
    )
}