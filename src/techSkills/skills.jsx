import Typography from "@mui/material/Typography";
import html from "../assets/images/skillsImage/html-5.png";
import css from "../assets/images/skillsImage/css-3.png";
import javascript from "../assets/images/skillsImage/js.png";
import react from "../assets/images/skillsImage/react.svg";
import typescript from "../assets/images/skillsImage/typescript.png";
import mui from "../assets/images/skillsImage/mui.png";
import tailwind from "../assets/images/skillsImage/tailwind.png";
import redux from "../assets/images/skillsImage/icons8-redux.svg";
import github from "../assets/images/skillsImage/github.png";
import vercel from "../assets/images/skillsImage/Vercel-convert.png";
import netlify from "../assets/images/skillsImage/icons8-netlify.svg";
import vite from "../assets/images/skillsImage/vite.svg";
import vscode from "../assets/images/skillsImage/icons8-visual-studio-code-2019.svg";
import npm from "../assets/images/skillsImage/icons8-npm.svg";
import chrome from "../assets/images/skillsImage/icons8-chrome.svg";

function Skills() {
    
    return(
        <>
            <section className="flex flex-col items-center pt-8 p-4">
                <div className="flex flex-col items-center">
                    <Typography variant="h4" component="h2" className="text-white" sx={{fontSize:'27px'}}>Technical Skills</Typography>
                    <div className='w-[100px] h-[3px] bg-[linear-gradient(90deg,#000000,#00fffc)]'></div>
                </div>

                <div className="pt-8 text-center flex flex-col gap-4 items-center sm:gap-6 md:gap-8">
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                        <img src={html} alt="html logo" className="skillsIcons" />
                        <img src={css} alt="css logo" className="skillsIcons"/>
                        <img src={javascript} alt="js logo" className="skillsIcons" />
                        <img src={react} alt="react logo" className="skillsIcons" />
                        <img src={typescript} alt="ts logo" className="skillsIcons" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                        <img src={mui} alt="mui logo" className="skillsIcons" />
                        <img src={tailwind} alt="tailwind logo" className="skillsIcons" />
                        <img src={redux} alt="redux logo" className="skillsIcons" />
                        <img src={github} alt="github logo" className="skillsIcons" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                        <img src={npm} alt="npm logo" className="skillsIcons" />
                        <img src={vercel} alt="vercel logo" className="skillsIcons" />
                        <img src={netlify} alt="netlify logo" className="skillsIcons" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                        <img src={vite} alt="vite logo" className="skillsIcons" />
                        <img src={chrome} alt="chrome logo" className="skillsIcons" />
                    </div>
                    <div className="bg-transparent">
                        <img src={vscode} alt="vscode logo" className="skillsIcons" />
                    </div>
                </div>
            </section>
        </>
    );
}


export default Skills;