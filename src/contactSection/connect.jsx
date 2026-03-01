import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";

function ConnectMe() {
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [submit,setSubmit]=useState(false);

    function nameHandler(event){
        setName(event.target.value);
    }
    function emailHandler(event){
        setEmail(event.target.value);
    }
    function messageHandler(event){
        setMessage(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
 
        setSubmit(true);
    }
    useEffect(()=>{
        setTimeout(()=>{
            setSubmit(false);
        },4000)

        return ()=>clearTimeout();
    },[submit])


    return(
        <>
            <footer className="p-4 pt-9 flex flex-col items-center gap-7 ">
                <div className="flex flex-col items-center gap-[2px]">
                    <Typography variant="h4" component="h2" sx={{color:'#fff',fontSize:'25px'}} >Get In Touch</Typography>
                    <div className='w-[100px] h-[3px] bg-[linear-gradient(90deg,#000000,#00fffc)]'></div>
                </div>
                <div className="sm:w-[550px] md:w-[600px]">
                    <p className="text-main-text md:text-lg">I'm currently open to work and actively looking for frontend opportunities and freelance projects.
                    If you have a project in mind, want to collaborate, or think I'd be a good fit for your team, feel free to reach out.</p>
                </div>
                <div className="flex flex-col items-center pt-4">
                    <form className="flex flex-col items-center gap-4" onSubmit={submitHandler}>
                        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                            <div>
                                <input type="text" name="name" placeholder="enter your name" required value={name} onChange={nameHandler} className="inputFields"/>
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="enter your email" required value={email} onChange={emailHandler} className="inputFields"/>
                            </div>
                        </div>
                        <div>
                            <textarea placeholder="enter your message" value={message} required onChange={messageHandler} className="messageField"/>
                        </div>
                        <div>
                            <Button variant="contained" sx={{textTransform:'none',color:'#fff',fontSize:'17px',padding:'3px',borderRadius:'6px',
                                "&:hover":{
                                    boxShadow:"0px 3px 5px 0px rgba(250,0,222,0.4)"
                                },
                            }} 
                            type="submit"
                            className="bg-gradient-bg tracking-wide">sent message <IoMdSend className="mt-[1px]"/> </Button>
                        </div>
                    </form>
                </div>
                <div className="h-[45px]">
                    {submit && <div className="bg-white p-1 rounded-md flex gap-1 ">
                        <GiCheckMark className="text-green-600 text-2xl"/>
                        <p className="text-sm">Your message has been sent. I'll get back to you soon.</p>
                    </div>}
                </div>
            </footer>
        </>
    );
}

export default ConnectMe;