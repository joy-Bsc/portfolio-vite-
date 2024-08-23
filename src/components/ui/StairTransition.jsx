// src/components/StairTransition.jsx
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

const StairTransition = ({ pathname }) => {
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <Stairs />
                </div>
                <motion.div
                    key={pathname}
                    className="h-screen w-screen fixed bg-primary top-0 left-0 right-0 pointer-events-none z-48 flex"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
                />
            </div>
        </AnimatePresence>
    );
};

export default StairTransition;