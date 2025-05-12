// import useState from react
import {useState} from 'react';

// Import icons from react-icons 
import { TfiFiles } from "react-icons/tfi";
import { FaCaretDown } from "react-icons/fa";
import { VscExtensions } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";


// import custom components from components
import FileExplorer from './components/FileExplorer.jsx';
import CodeArea from './components/CodeArea.jsx';

// import image from assets
import VsCodeIcon from '../../assets/images/vsCodeSvg.svg';
import Chat from './components/Chat.jsx';


export default function About() {
  const [selectedFile, setSelectedFile] = useState('bio.me');

  const onFileChange = (file) => {
    setSelectedFile(file);
  }
  
  return (
    <div className='flex h-full overflow-hidden'> 
        {/* Left side of the screen */}
        <div className='flex flex-col px-4 items-center gap-8 pt-6 text-gray-400 border-r-1 border-r-line'>
            <TfiFiles className='hover:text-white' fontSize={24}/>
            <VscSourceControl className='hover:text-white' fontSize={24}/>
            <VscExtensions className='hover:text-white' fontSize={24}/>
        </div>
        {/* Right side of the screen */}
        <div className='flex w-full h-full'>
            {/* File Explorer */}
            <FileExplorer file={selectedFile} onFileChange={onFileChange} />
            {/* Code Area */}
            {selectedFile === null ? (
              <div className='h-full flex grow items-center justify-center border-r border-r-line '>
                <img src={VsCodeIcon} className="w-[35%] h-[50%] filter grayscale invert opacity-10"/>
              </div>
            ) : (
              <>
                {/* Code */}
                <CodeArea file={selectedFile} onFileChange={onFileChange} />
              </>
            )}
            {/* Chat */}
            {selectedFile !== "index.jsx" ? (
              <Chat file={selectedFile} />
            ) : (
              <div>index</div>
            )}
        </div>
    </div>
  );
}

           
