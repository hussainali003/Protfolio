// import image from assets
import CopilotIcon from '../../../../../assets/images/copilotSvg.svg'
import githubProfile from '../../../../../assets/images/githubProfile.jpg'

export default function BioChat() {
    return (
        <div className="h-full w-full py-2 px-2 text-sm text-slate-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-400">
            <div className="flex items-center gap-x-2">
                <div className='bg-black rounded-full p-[2px] border-2 border-line'>
                    <img src={CopilotIcon} className='size-4 text-white rounded-full'/>
                </div>
                <p className='text-purple-400'>GitHub Copilot</p>
            </div>
            <p className='px-2 pt-2 text-number '>{'>'} Used 1 reference</p>
            <p className='pt-2 text-sky-300'>hussainali003, I'd love to hear about your JavaScript Algorithms and Data Structures Certificate-what key concepts did you take away from it, and how have you used those skills in your projects??</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-5 text-white rounded-full'/>
                <p className='text-sky-400'>hussainali003</p>
            </div>
            <p>Certainly. Through FreeCodeCamp's <a target='_blank' className='text-const hover:text-keyword' href='https://www.freecodecamp.org/certification/fcc693b89f3-2819-4eb5-a4fa-ae8a21730839/javascript-algorithms-and-data-structures'>JavaScript Algorithms and Data Structures Certification</a>, I gained a solid understanding of core JavaScript concepts, including ES6 syntax, functions, arrays, and objects. The curriculum emphasized both object-oriented and functional programming paradigms, enhancing my problem-solving skills. I applied these concepts by completing projects such as a palindrome checker and a Roman numeral converter, which reinforced my ability to implement algorithms effectively. This foundation has been instrumental in developing interactive features in my web applications.</p>
            <div className="flex items-center gap-x-2 pt-4">
                <div className='bg-black rounded-full p-[2px] border-2 border-line'>
                    <img src={CopilotIcon} className='size-4 text-white rounded-full'/>
                </div>
                <p className='text-purple-400'>GitHub Copilot</p>
            </div>
            <p className='pt-2 text-sky-300'>hussainali003, could you tell me more about your Responsive Web Design Certificate—what did you learn and how did you apply those skills?</p>
            <p className='px-2 pt-2 text-number '>{'>'} Used 1 reference</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-5 text-white rounded-full'/>
                <p className='text-sky-400'>hussainali003</p>
            </div>
            <p>I earned the  <a target='_blank' className='text-const hover:text-keyword' href='https://www.freecodecamp.org/certification/fcc693b89f3-2819-4eb5-a4fa-ae8a21730839/responsive-web-design'>Responsive Web Design Certificate</a> from FreeCodeCamp, where I learned to build modern, responsive, and accessible websites using HTML5 and CSS.The course covered layout techniques like Flexbox and Grid, and emphasized semantic HTML and accessibility.I applied these skills by completing hands-on projects like landing pages and personal portfolios.This gave me a strong foundation in frontend development.</p>
            <br />
        </div>
    )
};