import certificateOne from "../../../../assets/images/certificateOne.png"
import certificateTwo from "../../../../assets/images/certificateTwo.png"

export default function certificateFile() {
    return (
        <div className="flex flex-col py-8 px-4 gap-8 h-full items-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            <img src={certificateTwo} className="h-auto w-[80%] rounded-md border-2 border-line"/>
            <img src={certificateOne} className="h-auto w-[80%] rounded-md border-2 border-line"/>
        </div>
    )
}