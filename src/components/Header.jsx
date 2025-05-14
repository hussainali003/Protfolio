import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="max-[640px]:text-[12px] flex border-b border-line text-sm">
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
            <p>_about</p>
          </NavLink>
          {/* <NavLink to="/projects" className={({ isActive }) =>
            `px-8 py-4 border-r border-line ${
              isActive
                ? "text-white border-b-2 border-b-orange-500"
                : "text-gray-400 hover:text-white"
            }`
          }>
            <p>_projects</p>
          </NavLink> */}
          <div className="max-[640px]:hidden grow-4" />
        </nav>
    )
}