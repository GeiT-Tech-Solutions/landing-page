import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import "../assets/styles/components/FadeIn.scss";

const Fadein = ({ children }) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 600 }
    })

    return (
        <animated.div style={props} ref={ref} className="fade-in-text">
            {children}
        </animated.div>
    )
}


export default Fadein;