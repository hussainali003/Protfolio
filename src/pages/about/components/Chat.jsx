import {useState, useEffect} from 'react';

// import BioChat from components
import BioChat from "./bioFile/components/BioChat"
import SkillsChat from './skillsFile/components/SkillsChat';
import CertificateChat from "./certificateFile/components/CertificateChat"

export default function Chat({file}) {
    const [prevFile, setPrevFile] = useState('bio.me');

    useEffect(() => {
        if (file !== null) {
            setPrevFile(file);
        }
    }, [file])

    const renderChatContent = () => {
        const activeFile = file || prevFile;
        switch (activeFile) {
            case "bio.me":
                return <BioChat />;
            case "certificate.jsx":
                return <CertificateChat />
            case "index.jsx":
                // If file is null, render BioChat instead of SkillsChat
                return file === null ? <BioChat /> : <SkillsChat />;
            default:
                return null;
        }
    };

    return (
        <div className='max-[1280px]:hidden max-w-[350px] min-w-[350px] h-full flex flex-col grow-[3.5]'>
            <div className='flex px-4 border-b border-b-line'>
                <div className='flex items-center py-2 '>
                    <p className={`text-md whitespace-nowrap overflow-hidden text-ellipsis ${file === "index.jsx" && 'invisible'}`}>CHAT</p>
                </div>
            </div>
            {/* chat */}
            {renderChatContent()}
        </div>
    )
}