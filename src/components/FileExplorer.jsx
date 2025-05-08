// Import react 
import React, {useState} from 'react';

// Import icons from react-icons 
import { FaReact } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

export default function FileExplorer() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFolder, setSelectedFolder] = useState([{
        name: 'bio',
        hasOpen: false,
    }, {
        name: 'skills',
        hasOpen: true,
    }])


    // select file
    const handleFileClick = (file) => {
        setSelectedFile(file);
    }

    // select folder
    const handleFolderClick = (folderName) => {
        setSelectedFolder((prev) => prev.map((folder) => {
            if (folder.name === folderName) {
                return {...folder, hasOpen: !folder.hasOpen};
            }
            return folder;
        }));
    }

    return (
        <div className='min-w-[150px] w-[13%]  border-r-1 border-r-line'>
            <div className='flex items-center gap-x-2 px-2 py-2 border-b-1 border-b-line'>
                <FaCaretDown className='min-w-[24px]' fontSize={12}/>
                <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>personal-info</p>
            </div>
            <div className='flex flex-col pt-2 px-2'>
                <button onClick={() => handleFolderClick('bio')} className='flex gap-x-2 items-center '>
                {selectedFolder[0].hasOpen ? <FaChevronDown className='min-w-[24px]' fontSize={12}/> : <FaChevronRight className='min-w-[24px]' fontSize={12}/>}
                    <IoFolderSharp className='min-w-[24px]' color='#D2857E'/>
                    <p className='text-md text-white'>bio</p>
                </button>
                {selectedFolder[0].hasOpen && (
                    <button onClick={() => handleFileClick('bio.me')} className={`flex pl-10 gap-x-2 items-center text-gray-400 ${selectedFile === 'bio.me' ? 'bg-white/10' : ''}`}>
                        <CiHashtag className='min-w-[24px]' color='#D2857E' />
                        <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>bio.me</p>
                    </button>
                )}
                <button onClick={() => handleFolderClick('skills')} className='flex gap-x-2 items-center text-gray-400'>
                    {selectedFolder[1].hasOpen ? <FaChevronDown className='min-w-[24px]' fontSize={12}/> : <FaChevronRight className='min-w-[24px]' fontSize={12}/>}
                    <IoFolderSharp className='min-w-[24px]' color='#10b981'/>
                    <p className='text-md'>skills</p>
                </button>
                {selectedFolder[1].hasOpen && (
                    <>
                        <button onClick={() => handleFileClick('index.jsx')} className={`flex pl-10 gap-x-2 items-center text-gray-400 ${selectedFile === 'index.jsx' ? 'bg-white/10' : ''}`}>
                            <FaReact className='min-w-[24px]' color='#10b981' />
                            <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>index.jsx</p>
                        </button>
                        <button onClick={() => handleFileClick('certificate.jsx')} className={`flex pl-10 gap-x-2 items-center text-gray-400 ${selectedFile === 'certificate.jsx' ? 'bg-white/10' : ''}`}>
                            <FaReact className='min-w-[24px]' color='#10b981' />
                            <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>certificate.jsx</p>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}