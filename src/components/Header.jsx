import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="flex text-sm border-b border-line">
          <div className="grow-1 pl-4 pr-4 py-4 border-r border-line text-intermediate">hussain-ali</div>
          <NavLink to="/" className={({ isActive }) =>
            `px-8 py-4 border-r border-line ${
              isActive
                ? "text-white border-b-2 border-b-orange-500"
                : "text-gray-400 hover:text-white"
            }`
          }>
            <p>_hello</p>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `px-8 py-4 border-r border-line ${
              isActive
                ? "text-white border-b-2 border-b-orange-500"
                : "text-gray-400 hover:text-white"
            }`
          }>
            <p>_about-me</p>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) =>
            `px-8 py-4 border-r border-line ${
              isActive
                ? "text-white border-b-2 border-b-orange-500"
                : "text-gray-400 hover:text-white"
            }`
          }>
            <p>-projects</p>
          </NavLink>
          <div className="grow-4 border-r border-line" />
          <div className="px-8 py-4  text-intermediate hover:text-white cursor-pointer">_contact-me</div>
        </nav>
    )
}