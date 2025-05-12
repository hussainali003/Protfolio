import {useState, useEffect} from 'react';

// import BioChat from bio components
import BioChat from "./bioFile/components/bioChat"

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
                return <div>certificate</div>;
            default:
                return null;
        }
    };

    return (
        <div className='max-w-[330px] min-w-[330px] h-full flex flex-col grow-[3.5]'>
            <div className='flex px-4 border-b border-b-line'>
                <div className='flex items-center py-2 '>
                    <p className='text-md whitespace-nowrap overflow-hidden text-ellipsis'>CHAT</p>
                </div>
            </div>
            {/* chat */}
            {renderChatContent()}
        </div>
    )
}