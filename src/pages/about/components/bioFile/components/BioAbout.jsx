export default function BioAbout() {
    return (
        <div className="pt-2 pr-2 max-[640px]:text-[12px]">
            {/* about section */}
            <p className="text-intermediate/70 overflow-hidden text-ellipsis">/* eslint-disable no-contact-provide */</p>
            <p className="overflow-hidden text-ellipsis"><span className="text-const">const</span> <span className="text-keyword">about</span> = <span className="text-yellow-300">{'{'}</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-property">name:</span> <span className="text-string">"Hussain Ali"</span>,</p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-property">title:</span> <span className="text-string">"Front-end Developer"</span>,</p>
            <div className="pl-11">
                <p className="pl-10 [text-indent:-2.5rem]"><span className="text-property">description:</span> <span className="text-string">"I am a front-end developer with a passion for building 
                    web and mobile applications using React and React Native."</span>
                </p> 
            </div>
            <p className="text-yellow-300 overflow-hidden text-ellipsis">{'}'}<span className="text-white">;</span></p>
            {/* variable section */}
            <br />
            <p className="text-intermediate/70 overflow-hidden text-ellipsis">/* services i provide */</p>
            <p className="overflow-hidden text-ellipsis"><span className="text-const">const</span> <span className="text-keyword">whatIProvide</span> = <span className="text-yellow-300">{'{'}</span></p>
            <div className="pl-11">
                <p className="pl-10 [text-indent:-2.5rem]"><span className="text-property">webDevelopment:</span> <span className="text-string">"I can help you build a website from scratch or improve an existing one. I have experience with React, Redux, and RESTful APIs."</span>,</p>
            </div>
            <div className={"pl-11"}>
                <p className="pl-10 [text-indent:-2.5rem]"><span className="text-property">appDevelopment:</span> <span className="text-string">"I can help you build a mobile application using React Native. I have experience with building responsive and user-friendly interfaces."</span>,</p>
            </div>
            <p className="text-yellow-300 overflow-hidden text-ellipsis">{'}'}<span className="text-white">;</span></p>
            <br />
            {/* functions section */}
            <p className="text-intermediate/70 overflow-hidden text-ellipsis">// Create a website and mobile app based on the provided type and design input</p>
            <p className="overflow-hidden text-ellipsis"><span className="text-const">const</span> <span className="text-function">createWebsiteAndMobileApp</span> = <span className="text-yellow-300">{'('}</span><span className="text-property">type</span>, <span className="text-property">design</span><span className="text-yellow-300">{')'}</span>  = <span className="text-yellow-300">{'{'}</span></p>
            <p className="overflow-hidden text-ellipsis">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-const">const</span> <span className="text-keyword">appType</span> = <span className="text-keyword">whatIProvide</span><span className="text-condition">{'['}</span><span className="text-property">type</span><span className="text-condition">{']'}</span>;</p>
            <br />
            <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-condition">if</span> <span className="text-condition">{'('}</span><span className="text-keyword">appType</span> === <span className="text-string">'undefined'</span> <span>||</span> <span className="text-property">design</span> === <span className="text-keyword">null</span><span className="text-condition">{')'}</span> <span className="text-yellow-300">{'{'}</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-condition">return</span>;</p>
            <p className="text-yellow-300 overflow-hidden text-ellipsis">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
            <br />
            <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-condition">if</span> <span className="text-condition">{'('}</span><span className="text-keyword">type</span> === <span className="text-string">'appDevelopment'</span> <span>&&</span> <span className="text-property">design</span> !== <span className="text-keyword">null</span><span className="text-condition">{')'}</span> <span className="text-yellow-300">{'{'}</span></p>
            <div className="pl-18">
                <p className="pl-7 [text-indent:-1.7rem]"><span className="text-condition">return</span> <span className="text-string">'I can create a mobile application for you based on your</span> <span className="text-keyword">{'${'}</span><span className="text-property">design</span><span className="text-keyword">{'}'}</span><span className="text-string">. I have experience with React Native and can help you with user-friendly interfaces.'</span>;</p>
            </div>
            <p className="text-yellow-300 overflow-hidden text-ellipsis">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
            <br />
            <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-condition">if</span> <span className="text-condition">{'('}</span><span className="text-keyword">type</span> === <span className="text-string">'webDevelopment'</span> <span>&&</span> <span className="text-property">design</span> !== <span className="text-keyword">null</span><span className="text-condition">{')'}</span> <span className="text-yellow-300">{'{'}</span></p>
            <div className="pl-18">
                <p className="pl-7 [text-indent:-1.7rem]"><span className="text-condition">return</span> <span className="text-string">"I can build a website tailored to your </span> <span className="text-keyword">{'${'}</span><span className="text-property">design</span><span className="text-keyword">{'}'}</span><span className="text-string">. With my experience in React, I’ll ensure it features a clean and responsive design that works seamlessly across all devices."</span>;</p>
            </div>
            <p className="text-yellow-300 overflow-hidden text-ellipsis">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
            <p className="text-yellow-300 overflow-hidden text-ellipsis">{'}'}<span className="text-white">;</span></p>
            <br />
        </div>
    )
}