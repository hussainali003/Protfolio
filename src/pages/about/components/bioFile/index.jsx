import CodeLines from "../codeLines";

import BioAbout from "./components/BioAbout";

export default function BioFile() {
    return (
        <div className="flex h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            {/* code lines  */}
            <CodeLines number={35}/>
            {/* code */}
            <BioAbout />
        </div>
    )
}