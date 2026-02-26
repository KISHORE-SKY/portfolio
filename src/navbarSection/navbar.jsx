import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";

function Navbar() {
    
    const [open,setOpen]=useState(false);

    return(
        <>
            <header className='p-2'>
                <section className='flex justify-between items-center'> 
                    <div className='flex items-center gap-[2px]'>
                        <Typography varient='h1' component='h1' sx={{color:'var(--color-main-text)',fontSize:'22px'}}>
                            Kishore
                        </Typography>
                        <div className='bg-gradient-bg w-[6px] h-[6px] rounded-[5px] mt-2'></div>
                    </div>
                    <div>
                        <CgMenuRight className='text-[24px] text-main-text cursor-pointer'/>
                    </div>
                </section>
                <nav className='flex flex-col items-center h-screen p-3 '>
                    <ul className='flex flex-col gap-2 p-2 pt-6'>
                        <li className='navlists'>Home</li>
                        <li className='navlists'>About me</li>
                        <li className='navlists'>Technical skills</li>
                        <li className='navlists'>Projects</li>
                        <li className='navlists'>Contact me</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}


export default Navbar;