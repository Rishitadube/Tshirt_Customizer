import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation} from "../config/motion"
import state from '../store'
import { CustomButton } from '../components'

const Home = () => {
    const snap = useSnapshot(state);
    return (
    <AnimatePresence>
        {snap.intro && (
            <motion.div className='home' {...slideAnimation('left')}>
                <motion.div className='home-content' {...headContentAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            MAKE IT <br className='xs:block hidden'/>HAPPEN.
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-black-600 text-base'>
                            Craft a shirt using our brand-new 3D customization tool!
                            <br/>
                            <strong>Set your imagination free </strong>{" "}
                            and establish a style that's uniquely yours. We've got more colors than a unicorn's dreams! Pick from a rainbow of t-shirt shades that make every design pop.
                        </p>
                        <CustomButton type = "filled" title = " Customize" handleClick = {() => state.intro = false} customStyles = "w-fit px-4 py-2.5 font-bold text-sm"/>
                    </motion.div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Home
