import SkillsAbout from "./components/SkillsAbout";

export default function SkillsFile() {
    return (
        <div className="flex px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            {/* code */}
            <SkillsAbout />
        </div>
    )
}