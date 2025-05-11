// Import icons from react-icons 
import { TfiFiles } from "react-icons/tfi";
import { VscSourceControl } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";

// import custom components from components
import FileExplorer from './components/FileExplorer.jsx';
import CodeArea from './components/CodeArea.jsx';

export default function About() {
  return (
    <div className='flex h-full overflow-hidden'> 
        {/* Left side of the screen */}
        <div className='flex flex-col px-4 items-center gap-8 pt-6 text-gray-400 border-r-1 border-r-line'>
            <TfiFiles className='hover:text-white' fontSize={24}/>
            <VscSourceControl className='hover:text-white' fontSize={24}/>
            <VscExtensions className='hover:text-white' fontSize={24}/>
        </div>
        {/* Right side of the screen */}
        <div className='flex h-full'>
            <FileExplorer />
            {/* Code Area */}
            <CodeArea />
            {/* Terminal */}
            <div className='grow-[3.5] '>
            </div>
        </div>
    </div>
  );
}

           
