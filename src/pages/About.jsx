import React from 'react';

// Import icons from react-icons 
import { TfiFiles } from "react-icons/tfi";
import { VscSourceControl } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";

// import components
import FileExplorer from '../components/FileExplorer.jsx';

export default function About() {
  return (
    <div className='flex grow'>
        {/* Left side of the screen */}
        <div className='flex flex-col px-4 items-center gap-8 pt-6 text-gray-400 border-r-1 border-r-line'>
            <TfiFiles className='hover:text-white' fontSize={24}/>
            <VscSourceControl className='hover:text-white' fontSize={24}/>
            <VscExtensions className='hover:text-white' fontSize={24}/>
        </div>
        {/* Right side of the screen */}
        <div className='flex grow'>
            <FileExplorer />
            {/* Code Area */}
            <div className='grow-3 border-r-1 border-r-line'>
            </div>
            {/* Terminal */}
            <div className='grow-[3.5] '>
            </div>
        </div>
    </div>
  );
}

           // <div className='h-full flex items-center justify-between gap-x-2 px-3 text-gray-400 border-r-1 border-r-line'>
            //  <p className='text-center'>bio.jsx</p>
            //  <RxCross2 className='hover:bg-white/10'/>
           // </div>
