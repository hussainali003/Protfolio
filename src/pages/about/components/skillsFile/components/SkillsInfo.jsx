import githubProfile from '../../../../../assets/images/githubProfile.jpg';
import ChatGpt from '../../../../../assets/images/chatgptSvg.svg';

// import icons from react icons
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { SiNpm } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiEslint } from "react-icons/si";
import { RiClaudeFill } from "react-icons/ri";

export default function SkillsInfo() {
    return (
        <div className="w-[400px] min-w-[400px] pt-2 pb-6 px-4 text-sm text-slate-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            {/* languages i learn for web development */}
            <p className="text-md text-number">// languages i learn for web and mobile development</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-10 text-white rounded-full'/>
                <div>
                    <p className='text-sky-400'>hussainali003</p>
                    <p className='text-xs text-number'>created 3 years ago</p>
                </div>
            </div>
            <div className='w-full flex px-4 py-4 bg-[#011221] p-4 border-1 border-line rounded-md'>
                <div className='flex flex-col grow gap-y-4'>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <FaHtml5 className='ml-1 text-orange-400'/>
                        <p>HTML</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <FaCss3 className='ml-1 text-keyword' />
                        <p>CSS</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdCheckBoxOutlineBlank />
                        <SiTypescript className='ml-1 text-[#087ECE]' />
                        <p>TYPESCRIPT</p>
                    </div>
                </div>
                <div className='flex flex-col grow gap-y-4'>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <IoLogoJavascript className='ml-1 text-yellow-300' />
                        <p>JAVASCRIPT</p>
                    </div>
                </div>
            </div>
            {/* libraries and frameworks i learn for web development */}
            <p className="text-md text-number pt-4">// libraries and frameworks i learn for web and mobile development</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-10 text-white rounded-full'/>
                <div>
                    <p className='text-sky-400'>hussainali003</p>
                    <p className='text-xs text-number'>created 3 years ago</p>
                </div>
            </div>
            <div className='w-full flex px-4 py-4 bg-[#011221] p-4 border-1 border-line rounded-md'>
                <div className='flex flex-col grow gap-y-4'>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <FaReact className='ml-1 text-bluish'/>
                        <p>REACT</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <FaReact className='ml-1 text-keyword'/>
                        <p>REACT NATIVE</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <SiReactrouter className='ml-1 text-[#F44855]'/>
                        <p>REACT ROUTER</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <RiTailwindCssFill className='ml-1 text-keyword'/>
                        <p>TAILWIND CSS</p>
                    </div>
                </div>
                <div className='flex flex-col grow gap-y-4'>
                    <div className='flex items-center gap-1'>
                        <MdCheckBoxOutlineBlank />
                        <FaBootstrap className='ml-1 text-[#8C19FE]'/>
                        <p>BOOSTTRAP</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <SiRedux className='ml-1 text-condition'/>
                        <p>REDUX</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <SiJest className='ml-1 text-[#943f57]'/>
                        <p>JEST</p>
                    </div>
                </div>
            </div>
            {/* libraries and frameworks i learn for web development */}
            <p className="text-md text-number pt-4">// tools i use for web and mobile development</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-10 text-white rounded-full'/>
                <div>
                    <p className='text-sky-400'>hussainali003</p>
                    <p className='text-xs text-number'>created 3 years ago</p>
                </div>
            </div>
            <div className='w-full flex px-4 py-4 bg-[#011221] p-4 border-1 border-line rounded-md'>
                <div className='flex flex-col grow gap-y-4'>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <SiNpm className='ml-1 text-[#C60000]'/>
                        <p>NPM</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <FaGitAlt className='ml-1 text-[#E84D31]'/>
                        <p>GIT</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <FaGithub className='ml-1 text-white'/>
                        <p>GITHUB</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <DiVisualstudio className='ml-1 text-bluish'/>
                        <p>VISUAL STUDIO CODE</p>
                    </div>
                </div>
                <div className='flex flex-col grow gap-y-4'>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <RiFirebaseFill className='ml-1 text-orange-400'/>
                        <p>FIREBASE</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <SiEslint className='ml-1 text-condition'/>
                        <p>ESLINT</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <RiClaudeFill className='ml-1 text-[#C96442]'/>
                        <p>CLAUDE</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckbox className='text-gray-400' />
                        <img src={ChatGpt} className='ml-1'/>
                        <p>CHAT GPT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}