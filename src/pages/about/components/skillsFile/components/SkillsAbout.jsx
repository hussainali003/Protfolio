export default function SkillsAbout() {
    return (
        <div className="w-full h-full flex max-[640px]:text-[12px] text-number/70 leading-6 flex-col pt-2 pr-2 ">
            {/** first **/}
            <p>/**</p>
            <div className="pl-4">
                <h1 className="text-white"><span className="text-condition">{'['}</span>html, css, javascript<span className="text-condition">{']'}</span></h1>
                <h4>Learned from:</h4>
                <p className="pl-4 py-2"><span className="px-2 py-1 text-white bg-intermediate">W3Schools</span> — followed official documentation to understand core concepts and syntax.</p>
                <h4>Validated through:</h4>
                <p className="pl-4 py-2"><span className="px-2 py-1 text-black bg-white">FreeCodeCamp</span> — completed interactive challenges and earned the <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/fcc693b89f3-2819-4eb5-a4fa-ae8a21730839/responsive-web-design" className="text-const hover:text-keyword">(Responsive Web Design Certificate)</a>.</p>
                <h4>Practical Experience::</h4>
                <p className="pl-4">Used HTML, CSS, and JavaScript fundamentals while working with modern libraries and frameworks such as React and Tailwind CSS to build responsive, component-based UIs.</p>
            </div>
            <p>**/</p>
            <br />
            {/** second **/}
            <p>/**</p>
            <div className="pl-4">
                <h1 className="text-white"><span className="text-yellow-300">{'{'}</span>react<span className="text-yellow-300">{'}'}</span></h1>
                <h4>Learned from:</h4>
                <p className="pl-4 py-2"><span className="px-2 py-1 text-white bg-bluish">React Documentation</span> — Studied official documentation on the React website to understand core concepts such as JSX, components, state management using useState, side effects with useEffect, props, hooks, and component lifecycle. This foundational knowledge was strengthened through building real-world projects..</p>
                <h4>Validated through:</h4>
                <p className="pl-4 py-2"><span className="px-2 py-1 text-black bg-white">FreeCodeCamp</span> — Completed hands-on challenges and earned the <a className="text-const">(Front End Development Libraries certification)</a>, gaining practical experience with libraries like React, Redux, Bootstrap, and jQuery through project-based learning.</p>
                <h4>Practical Experience::</h4>
                <p className="pl-4">React — Gained core understanding through the official React documentation, focusing on concepts like JSX, components, hooks (useState, useEffect), and state management. Reinforced learning through freeCodeCamp challenges and solidified practical skills by building real-world projects involving reusable components and dynamic UIs.</p>
            </div>
            <p>**/</p>
            <br />
            {/** third **/}
            <p>/**</p>
            <div className="pl-4">
                <h1 className="text-white"><span className="text-yellow-300">{'{'}</span>react native<span className="text-yellow-300">{'}'}</span></h1>
                <h4>Learned from:</h4>
                <p className="pl-4 py-2"><span className="px-2 py-1 text-white bg-keyword">React Native Documentation</span> — Studied the official documentation on the React Native website to understand core concepts such as cross-platform component structure, styling with the StyleSheet API, navigation using libraries like React Navigation, and platform-specific modules. This foundational knowledge was strengthened through building real-world mobile applications and applying React principles like useState, useEffect, props, and reusable components in a native mobile context.</p>
                <h4>Practical Experience::</h4>
                <p className="pl-4">React Native — Learned through practical development while building cross-platform mobile apps. Referenced the official React Native documentation to understand platform APIs, navigation, and styling. Strengthened knowledge by applying core React concepts like components, hooks, and state management in a mobile context.</p>
            </div>
            <p>**/</p>
            <br />
        </div>
    )
}