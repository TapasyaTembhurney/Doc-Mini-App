import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"

function Card({data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} className=' relative flex-shrink-0 w-60 h-80 rounded-[45px] bg-zinc-900/90 text-white px-7 py-20 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <MdOutlineClose /> : <LuDownload size=".8em" color='#fff'/> }
                    
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                    )
                }
               
            </div>
        </motion.div>
    )
}

export default Card
