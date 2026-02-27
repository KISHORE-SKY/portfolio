import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { MdCancel } from "react-icons/md";


function Navbar() {
    
    const [open,setOpen]=useState(false);
    function menuHandler() {
        setOpen(true);
    }
    function menuclosehandler(){
        setOpen(false);
    }
    return(
        <>
            <header className='p-4 fixed top-0 left-0 w-full z-[1000] bg-main-bg flex items-center md:px-4'>
                <section className='flex justify-between w-full items-center md:w-fit'> 
                    <div className='flex items-center gap-[2px]'>
                        <Typography varient='h1' component='h1' sx={{color:'var(--color-main-text)',fontSize:'22px'}}>
                            Kishore
                        </Typography>
                        <div className='bg-gradient-bg w-[6px] h-[6px] rounded-[5px] mt-2'></div>
                    </div>
                    <div>
                        <CgMenuRight onClick={menuHandler} className='text-[24px] text-main-text cursor-pointer md:hidden'/>
                    </div>
                </section>

                <nav className={`p-2 transition-all duration-300 ease ${open ? "pointer-events-auto opacity-100 translate-y-0 w-[70%] h-screen z-[10000] fixed top-0 right-0 bg-[#111111] text-main-text" :
                    "pointer-events-none opacity-0 translate-x-[70%] z-[-1] h-screen w-[70%] fixed top-0 right-0"}
                     md:flex-row md:z-1 md:opacity-100 md:pointer-events-auto md:inline-block md:translate-x-0 md:w-fit md:left-[auto] md:h-fit lg:pr-3`}>

                    <ul className='flex flex-col gap-2 p-2 w-full md:flex-row md:items-center lg:gap-4'>
                        <li className='self-end'><MdCancel className='text-[24px] md:hidden text-main-text cursor-pointer' onClick={menuclosehandler}/></li>
                        <li className='navlists'><a href='#home'>Home</a></li>
                        <li className='navlists'>About me</li>
                        <li className='navlists'>Technical skills</li>
                        <li className='navlists'>Projects</li>
                        <li className='navlists'>Contact me</li>
                        <li><button className='bg-gradient-bg p-1 px-2 rounded-md text-main-text cursor-pointer text-lg font-semibold md:text-[16px] '>View Resume</button></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}


export default Navbar;