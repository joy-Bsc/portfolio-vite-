// src/components/Photo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import image from '../../assets/photo.png';
export const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                duration:0.4,
                delay:2,
                ease:'easeIn'
            }
        }}>
            <motion.div
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{
                    duration:0.4,
                    delay:2,
                    ease:'easeInOut'
                }
            }}
             className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
                <img src={image}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt=""
                />
            </motion.div>
        </motion.div>
    </div>
  )
}