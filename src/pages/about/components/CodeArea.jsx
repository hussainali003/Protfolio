// import custom components from components
import BioFile from "./BioFile";

// import icons from react-icons
import { CiHashtag } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import SkillsFile from "./skillsFile";

export default function CodeArea({file, onFileChange}) {
    const isFileTypeBio = file === "bio.me" ? true: false;

    const handleCloseFile = () => {
        onFileChange(null);
    }

    return (
        <div className='h-full flex flex-col grow-3 border-r border-r-line'>
            {/* Header */}
            <div className='flex items-center  border-b border-b-line'>
                <div className="flex items-center gap-x-1 px-2 py-2">
                    <div className="flex items-center">
                        {file === 'bio.me' ? (
                            <CiHashtag className='min-w-[24px]' color='#D2857E' />
                        ) : (
                            <FaReact className='min-w-[24px]' color='#6c74dd' />
                        )}
                        <p className={`${isFileTypeBio ? "text-intermediate" : "text-modified"} text-center whitespace-nowrap overflow-hidden text-ellipsis`}>{file}</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <p className={`${isFileTypeBio ? "text-intermediate/70" : "text-modified/70"} text-center whitespace-nowrap overflow-hidden text-ellipsis`}>U</p>
                        <button onClick={handleCloseFile}>
                            <RxCross2 className='hover:bg-white/10'/>
                        </button>
                    </div>
                </div>
                <div className="h-full grow border-l border-l-line"></div>
            </div>
            {/* Code Area */}
            {file === 'bio.me' && (
                <BioFile />
            )}
            {file === 'index.jsx' && (
                <SkillsFile />
            )}
        </div> 
    );
}