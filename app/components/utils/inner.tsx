import { motion, Variants as FramerVariants } from "framer-motion";
import React from "react";

// Use Framer Motion's Variants type directly or define a structure that matches it
interface Variants extends FramerVariants {}

export default function Inner({ children }: { children: React.ReactNode }) {
    const anim = (variants: Variants) => ({
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants,
    });

    const opacity: Variants = {
        intial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
            transition: {
                duration: 2
            }
        },
        exit: {
            opacity: 1
        }
    }

    const slide: Variants = {
        initial: {
            top: "100vh"
        },
        enter: {
            top: "100vh"
        },
        exit: {
            top: "0"
        }
    }

    return (
        <div>
            <motion.div {...anim(slide)} className="slide fixed bg-red-700 top-0 left-0 w-screen h-screen" />
            <motion.div {...anim(opacity)} className="page">
                {children}
            </motion.div>
        </div>
    );
}