// src/components/PageTransition.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
                exit={{ opacity: 0 }}
                className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
            />
            {children}
        </AnimatePresence>
    );
}

export default PageTransition;