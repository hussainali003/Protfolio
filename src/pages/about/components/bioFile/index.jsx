import BioAbout from "./components/BioAbout";

export default function BioFile() {
    return (
        <div className="flex px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            {/* code */}
            <BioAbout />
        </div>
    )
}