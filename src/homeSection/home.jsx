import profile from "../assets/images/home-profile.jpg";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";


function Home() {
   
    return(
        <>
            <section id="home" className="h-screen p-4 flex flex-col justify-center items-center gap-1">
                <div>
                    <img src={profile} alt="profile image" loading="Lazy" className="w-[100px] rounded-[50%] " />
                </div>
                <div className="flex flex-col items-center gap-1 text-main-text">
                    <p className="text-lg">Hi! I'm <span className="text-2xl bg-[linear-gradient(90deg,#3ee20c,#10ebb7)] bg-clip-text text-transparent">Kishore</span></p>
                    <p className="text-2xl text-white">frontend web developer</p>
                    <div className="sm:px-[100px]">
                        <p className="sm:text-lg text-center">I build responsive, user-focused web applications using React, JavaScript, and modern UI tools.</p>
                    </div>
                    <div className="flex intems-center gap-2 mt-2">
                        <div className="icons">
                            <a href="https://github.com/KISHORE-SKY/" target="_blank"><FaGithub className="text-lg no-underline text-white cursor-pointer"/></a>
                        </div>
                        <div className="icons">
                            <a href="mailto:kishores12fde@gmail.com" target="_blank"><MdEmail className="text-lg text-white no-underline cursor-pointer"/></a>
                        </div>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/kishore017/" target="_blank"><FaLinkedin className="text-lg text-white no-underline cursor-pointer"/></a>
                        </div>
                        <div className="icons">
                            <a href="https://app.netlify.com/teams/skkishore1273/projects" target="_blank"><SiNetlify className="text-lg text-white no-underline cursor-pointer"/></a>
                        </div>
                        <div className="icons">
                            <a href="https://vercel.com/kishore-s-projects-47e6768e" target="_blank"><IoLogoVercel className="text-lg text-white no-underline cursor-pointer"/></a>
                        </div>

                    </div>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-[3px] bg-gradient-bg p-1 px-2 rounded-2xl">
                            <button className="cursor-pointer">my resume</button>
                            <FaDownload />
                        </div>
                        <div className="flex items-center gap-[3px] bg-main-text text-main-bg p-1 px-2 rounded-2xl">
                            <button className="cursor-pointer">contact me</button>
                            <FaArrowRightLong className="mt-1"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;