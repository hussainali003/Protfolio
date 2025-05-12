import CodeLines from "../codeLines";

import SkillsAbout from "./components/SkillsAbout";

export default function SkillsFile() {
    return (
        <div className="h-full flex overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            {/* code lines  */}
            <CodeLines number={35}/>
            {/* code */}
            <SkillsAbout />
        </div>
    )
}