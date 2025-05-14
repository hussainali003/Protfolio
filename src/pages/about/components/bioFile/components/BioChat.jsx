// import image from assets
import { useState } from 'react';
import CopilotIcon from '../../../../../assets/images/copilotSvg.svg'
import githubProfile from '../../../../../assets/images/githubProfile.jpg'

// Import icons from react-icons 
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { CiHashtag } from "react-icons/ci";


export default function BioChat() {
    const [selectReference, setSelectReference] = useState([]);

    const handleReferenecToggle = (reference) => {
        setSelectReference((prev) => {
            const hasRefExist = prev.find((file) => file.index === reference);

            if (hasRefExist) {
                return selectReference.map((file) => {
                    if (file.index === hasRefExist.index) {
                        return {
                            index: file.index,
                            hasReferenceOpen: !file.hasReferenceOpen
                        }
                    } else {
                        return file;
                    }
                })
            } else {
                return [...selectReference, {
                    index: reference,
                    hasReferenceOpen: true,
                }]
            }
        })
    }

    return (
        <div className="h-full w-full py-2 px-2 text-sm text-slate-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            <div className="flex items-center gap-x-2">
                <div className='bg-black rounded-full p-[2px] border-2 border-line'>
                    <img src={CopilotIcon} className='size-4 text-white rounded-full'/>
                </div>
                <p className='text-purple-400'>GitHub Copilot</p>
            </div>
            <button onClick={() => handleReferenecToggle(0)} className='flex items-center justify-center gap-x-2 px-2 py-1 my-1 text-number rounded-md hover:text-white/70 hover:bg-white/5 cursor-pointer'>
                {selectReference.find((file) => file.index === 0)?.hasReferenceOpen ? (<FaChevronDown fontSize={10} />) : (<FaChevronRight fontSize={10} />)}
                <p>Used 1 reference</p>
            </button>
            {selectReference.find((file) => file.index === 0)?.hasReferenceOpen && (
                <div className='flex items-center gap-x-2 border px-2 py-1 mt-1 mb-2 border-line rounded-md'>
                    <CiHashtag color='#D2857E'/>
                    <p>bio.me</p>
                </div>
            )}
            <p className='text-sky-300'>Hi hussainali003! Can you tell me a bit about yourself?</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-5 text-white rounded-full'/>
                <p className='text-sky-400'>hussainali003</p>
            </div>
            <p>Hi, I’m Hussain Ali. I’m a front-end developer working with both React and React Native. My main focus is on creating highly responsive and well-designed user interfaces. I care deeply about design quality — I want every project I work on to look polished and perform smoothly across devices. I’m committed to implementing designs in a way that’s clean, consistent, and error-free. Right now, I’m looking for opportunities where I can bring that design-first mindset to a team and continue pushing the quality of my work even further</p>
            <div className="flex items-center gap-x-2 pt-4">
                <div className='bg-black rounded-full p-[2px] border-2 border-line'>
                    <img src={CopilotIcon} className='size-4 text-white rounded-full'/>
                </div>
                <p className='text-purple-400'>GitHub Copilot</p>
            </div>
            <button onClick={() => handleReferenecToggle(1)} className='flex items-center justify-center gap-x-2 px-2 py-1 my-1 text-number rounded-md hover:text-white/70 hover:bg-white/5 cursor-pointer'>
                {selectReference.find((file) => file.index === 1)?.hasReferenceOpen ? (<FaChevronDown fontSize={10} />) : (<FaChevronRight fontSize={10} />)}
                <p>Used 1 reference</p>
            </button>
            {selectReference.find((file) => file.index === 1)?.hasReferenceOpen && (
                <div className='flex items-center gap-x-2 border px-2 py-1 mt-1 mb-2 border-line rounded-md'>
                    <CiHashtag color='#D2857E'/>
                    <p>bio.me</p>
                </div>
            )}
            <p className='text-sky-300'>What do you enjoy doing outside of programming?</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-5 text-white rounded-full'/>
                <p className='text-sky-400'>hussainali003</p>
            </div>
            <p>Outside of programming, I really enjoy playing video games—both online with friends and offline when I’m on my own. It’s a great way for me to relax and stay creative. I also love cooking and experimenting with different recipes. Another thing I’m passionate about is photography, especially capturing nature and everyday moments. But my favorite hobby is anything related to art and storytelling—whether it’s thinking about characters, building worlds, or coming up with narratives. It’s actually a big part of what inspires my approach to design and development.</p>
            <br />
        </div>
    )
};