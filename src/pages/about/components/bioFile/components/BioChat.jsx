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
            <p className='pt-2 text-sky-300'>Hi hussainali003! Can you tell me a bit about yourself?</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-5 text-white rounded-full'/>
                <p className='text-sky-400'>hussainali003</p>
            </div>
            <p>Hi, I’m Hussain Ali. I’m a front-end developer working with both React and React Native. My main focus is on creating highly responsive and well-designed user interfaces. I care deeply about design quality — I want every project I work on to look polished and perform smoothly across devices. I’m committed to implementing designs in a way that’s clean, consistent, and error-free. Right now, I’m looking for opportunities where I can bring that design-first mindset to a team and continue pushing the quality of my work even further</p>
            <div className="flex items-center gap-x-2 pt-4">
                <div className='bg-black rounded-full p-[2px] border-2 border-line'>
                    <img src={CopilotIcon} className='size-4 text-white rounded-full'/>
                </div>
                <p className='text-purple-400'>GitHub Copilot</p>
            </div>
            <p className='px-2 pt-2 text-number '>{'>'} Used 4 reference</p>
            <p className='pt-2 text-sky-300'>Hi there! Can you tell me a bit about yourself?</p>
            <div className="flex items-center gap-x-2 py-4">
                <img src={githubProfile} className='size-5 text-white rounded-full'/>
                <p className='text-sky-400'>hussainali003</p>
            </div>
            <p>Outside of programming, I really enjoy playing video games—both online with friends and offline when I’m on my own. It’s a great way for me to relax and stay creative. I also love cooking and experimenting with different recipes. Another thing I’m passionate about is photography, especially capturing nature and everyday moments. But my favorite hobby is anything related to art and storytelling—whether it’s thinking about characters, building worlds, or coming up with narratives. It’s actually a big part of what inspires my approach to design and development.</p>
            <br />
        </div>
    )
};