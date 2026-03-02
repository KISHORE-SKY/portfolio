import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import projectData from "../assets/jsons/project.json";
import Button from '@mui/material/Button';
import AOS from 'aos';


function Projects() {
    
    const [data,setData]=useState([]);

    useEffect(()=>{
        setData(projectData.datas);
    },[])
    useEffect(()=>{
         if(projectData.length>0){
            AOS.refreshHard();
        }
    },[projectData])


    return(
        <>
            <section className="p-4">
                <div className="flex flex-col items-center gap-[3px]">
                    <Typography variant="h4" component="h2" sx={{fontSize:'25px',color:'#ffffff'}}>My Projects</Typography>
                    <div className='w-[100px] h-[3px] bg-[linear-gradient(90deg,#000000,#00fffc)]'></div>
                </div>

                <div className="pt-6 flex flex-col items-center gap-4 p-2 md:p-0 md:pt-8 md:gap-0 justify-center text-main-text" >
                {data.map((item)=>(
                    <section className="grid grid-cols-[minmax(290px,325px)] gap-3 justify-center border-1 rounded-lg border-[rgba(255,255,255,0.3)] bg-bg-cart 
                    md:gap-0 md:border-0 md:bg-main-bg md:grid-cols-[40%_3px_40%] lg:grid-cols-[minmax(350px,375px)_3px_minmax(350px,375px)]" key={item.id}>
                                       
                        <div className="flex flex-col items-center md:p-5 relative " >
                            <div className=" w-auto lg:w-[350px] lg:mr-4 overflow-hidden rounded-lg">
                                <img src={item.image} alt={item.title} className="rounded-lg w-full lg:w-[350px] object-cover 
                                hover:scale-110 transiton-transform duration-300 ease" data-aos='fade-right'/>
                            </div>
                            <p className="self-end m-1 absolute text-[13px] bg-black/60 text-white px-[4px] py-[2px] tracking-wide rounded-[20px]"
                            data-aos='fade-right'>{item.count}</p>
                        </div>

                        <div className="hidden md:bg-[linear-gradient(90deg,#3ee20c,#10ebb7)]
                         md:inline-block md:w-[2px] md:h-auto bg-[rgba(255,255,255,0.6)] md:relative md:after:absolute 
                         md:after-content-[''] md:after:h-[15px] md:after:w-[15px] md:after:bg-[linear-gradient(90deg,#3ee20c,#10ebb7)]
                         md:after:rounded-[50%] md:after:top-0 md:after:right-[-6px] md:after:z-1" ></div>

                        <div className="flex flex-col gap-1 items-center justify-center p-2 text-center md:px-3 pb-5 md:p-0" data-aos='fade-left' data-aos-delay='100'>
                            <Typography variant="p" component="p" className="lg:text-lg">{item.description}</Typography>
                            <Typography variant="p" component="p" className="hidden lg:inline-block">
                                <span className="text-[19px] text-white">Techs: </span>
                                {item.techs}
                            </Typography>
                            <Button varient="contained" className="bg-gradient-bg text-white cursor-pointer hover:shadow-[0px_3px_7px_0px_rgba(250,0,222,0.4)]" 
                            sx={{padding:'2px',borderRadius:'6px',textTransform:'none'}}>
                                <a href={item.liveLink} target="_blank" className="cursor-pointer text-white">Live Site</a>
                            </Button>
                        </div>
                       
                    </section>
                ))}
                </div>
            </section>
        </>
    );
}


export default Projects;