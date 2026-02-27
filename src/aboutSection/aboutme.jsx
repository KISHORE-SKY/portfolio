import Typography from '@mui/material/Typography';
import aboutImage from '../assets/images/1000429220.jpg';
import { GiGraduateCap } from "react-icons/gi";

function AboutMe(){

    return(
        <>
            <section className='flex flex-col items-center gap-3 text-main-text p-4'>
                <div>
                    <Typography variant='h4' component='h2' sx={{fontSize:'26px', color:'#ffffff'}} >About me</Typography>
                </div>
                <div className='mt-4'>
                    <img src={aboutImage} alt='profile image' loading='Lazy' className='w-[200px] rounded-2xl'/>
                </div>
                <div className='text-center'>
                    <p>I'm a Frontend Developer who enjoys combining logic, styling, and design to build clean and interactive user interfaces.
                    I love creating well-structured UI layouts that focus on usability, responsiveness, and visual clarity</p>
                </div>
                <div className='flex flex-col items-ceter justify-center gap-1 mt-3 border-1 p-2 border-[rgba(255,255,255,0.4)] rounded-2xl'>
                    <div className='flex items-center justify-center gap-1 '>
                        <GiGraduateCap className='text-[22px] text-white'/>
                        <Typography variant='h5' component='h3' sx={{fontSize:'19px',color:'#ffffff'}} >Education</Typography>
                    </div>
                    <div className='flex flex-col items-center p-1'>
                        <Typography variant='h6' component='h5' sx={{fontSize:'17px'}}>B.E - Computer Science and Engineering</Typography>
                        <Typography variant='p' component='p'>2021 - 2025</Typography>
                        <Typography variant='p' component='p'>CGPA: 7.11</Typography>    
                    </div>            
                </div>
            </section>
        </>
    );
}


export default AboutMe;