import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <nav className="flex border-t border-line text-sm ">
          <div className="px-4 py-4  border-r border-line  text-intermediate hover:text-white cursor-pointer">find me in:</div>
          <div className="items-center px-4 py-4  border-r border-line  text-intermediate/60 hover:text-white cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=100028481423294">
              <FaFacebookF size={18}/>
            </a>
          </div>
          <div className="items-center px-4 py-4  border-r border-line  text-intermediate/60 hover:text-white cursor-pointer">
            <a href="https://www.linkedin.com/in/hussain-ali-755120295/">
              <FaLinkedinIn size={18}/>
            </a>
          </div>
          <div className="grow border-r border-line"></div>
          <div  className="flex items-center gap-x-2 px-8 py-4  text-intermediate hover:text-white cursor-pointer">
            <a href="https://github.com/hussainali003">
              <p>@hussainali003</p>
            </a>
            <a href="https://github.com/hussainali003">
              <FaGithub />
            </a>
          </div>
        </nav>
    )
}