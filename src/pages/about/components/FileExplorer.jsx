// Import react 
import React, {useState} from 'react';

// Import icons from react-icons 
import { FaReact } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

export default function FileExplorer({file, onFileChange}) {
    const [selectedFolder, setSelectedFolder] = useState([{
        name: 'bio',
        hasOpen: true,
    }, {
        name: 'skills',
        hasOpen: false,
    }])


    // select file
    const handleFileClick = (file) => {
        onFileChange(file);
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
        <div className='max-[1024px]:hidden min-w-[230px] max-w-[230px] border-r-1 border-r-line'>
            <div className='flex items-center gap-x-2 px-2 py-2 border-b-1 border-b-line'>
                <FaCaretDown className='min-w-[24px]' fontSize={12}/>
                <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>personal-info</p>
            </div>
            <div className='flex flex-col pt-2 px-2'>
                <button onClick={() => handleFolderClick('bio')} className={`flex gap-x-2 items-center text-gray-400 ${selectedFolder[0].hasOpen === false ? "hover:text-white" : ""}`}>
                {selectedFolder[0].hasOpen ? <FaChevronDown className='min-w-[24px]' fontSize={12}/> : <FaChevronRight className='min-w-[24px]' fontSize={12}/>}
                    <IoFolderSharp className='min-w-[24px]' color='#D2857E'/>
                    <p className='text-md'>bio</p>
                </button>
                {selectedFolder[0].hasOpen && (
                    <button onClick={() => handleFileClick('bio.me')} className={`flex pl-10 gap-x-2 items-center text-gray-400 ${file === 'bio.me' ? 'bg-white/10' : 'hover:text-white'}`}>
                        <CiHashtag className='min-w-[24px]' color='#D2857E' />
                        <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>bio.me</p>
                    </button>
                )}
                <button onClick={() => handleFolderClick('skills')} className={`flex gap-x-2 items-center text-gray-400 ${selectedFolder[1].hasOpen === false ? "hover:text-white" : ""}`}>
                    {selectedFolder[1].hasOpen ? <FaChevronDown className='min-w-[24px]' fontSize={12}/> : <FaChevronRight className='min-w-[24px]' fontSize={12}/>}
                    <IoFolderSharp className='min-w-[24px]' color='#10b981'/>
                    <p className='text-md'>skills</p>
                </button>
                {selectedFolder[1].hasOpen && (
                    <>
                        <button onClick={() => handleFileClick('index.jsx')} className={`flex pl-10 gap-x-2 items-center text-gray-400 ${file === 'index.jsx' ? 'bg-white/10' : 'hover:text-white'}`}>
                            <FaReact className='min-w-[24px]' color='#6c74dd' />
                            <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>index.jsx</p>
                        </button>
                        <button onClick={() => handleFileClick('certificate.jsx')} className={`flex pl-10 gap-x-2 items-center text-gray-400 ${file === 'certificate.jsx' ? 'bg-white/10' : 'hover:text-white'}`}>
                            <FaReact className='min-w-[24px]' color='#6c74dd' />
                            <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>Certificate.jsx</p>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}