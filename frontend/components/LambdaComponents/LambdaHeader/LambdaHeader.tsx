import 'Frontend/themes/LambdaHeader/LambdaHeader.css'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import {useState} from "react";

export default function LambdaHeader(props : any) {

    const { scrollY} = useScroll();
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setY(latest);
    });

    const scrollVariants = {
        unScroll: {

        },
        scroll: {
            backgroundColor: 'rgba(248, 248, 248, 0.2)',
            backdropFilter: 'blur(10px)',
            height: '60px',
        }
    }

    return(
        <motion.div
            className={"lambda-header"}
            animate={y > 150 ? "scroll" : "unScroll"}
            variants={scrollVariants}
        >
            {props.children}
        </motion.div>
    )
}