export default function Home() {
    return (
        <div className='flex grow items-end'>
            <div className="absolute top-[15%] right-[15%] w-[35%] h-[40%] bg-intermediate opacity-40 rounded-full blur-[80px] rotate-25 -translate-x-0 z-10"></div>
            <div className="absolute bottom-[15%] right-0 w-[35%] h-[40%] bg-blue-500 opacity-30 rounded-full blur-[80px] rotate-120 -translate-x-0 z-5"></div>
            <div className="grow-1"></div>
            <div className="mb-20">
                <p className="text-md text-gray-400">Hi all. I am</p>
                <h1 className="text-6xl font-light">Hussain Ali</h1>
                <h2 className="text-3xl text-bluish">&gt; Front-end developer</h2>
                <br />
                <div className="text-sm leading-7">
                    <p className="text-gray-400">// my number</p>
                    <p className="text-bluish">
                    const <span className="text-intermediate">phoneNum</span> ={" "}
                    <span className="text-white">92 311 104 057 1</span>;
                    </p>
        
                    <p className="text-gray-400 mt-4">// my e-mail</p>
                    <p>
                    <span className="text-bluish">const</span> <span className="text-intermediate">email</span> ={" "}
                    <span className="text-string">"hussainali9203@gmail.com"</span>;
                    </p>

                    <p className="text-gray-400 mt-4">// you can also see it on my Github page</p>
                    <p>
                    <span className="text-bluish">const</span> <span className="text-intermediate">githubLink</span> ={" "}
                    <span className="text-string">"https://github.com/hussainali003"</span>;
                    </p>
                    
                    <p className="text-gray-400 mt-4">// you can check my Linkedin page</p>
                    <p>
                    <span className="text-bluish">const</span> <span className="text-intermediate">linkedinPage</span> ={" "}
                    <span className="text-string">"https://www.linkedin.com/in/hussain-ali-755120295/"</span>;
                    </p>
        
                    {/* Add other links here like github, behance, linkedin */}
                </div>
            </div>
            <div className="grow-[2.5]"></div>
        </div>
    );
  }
  