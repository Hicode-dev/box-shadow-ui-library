import React ,{useState} from 'react'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import Navbar from './component/Navbar';
const Box = () => {
    const [boxShadow, setBoxShadow] = useState('')
   const  handleClick =(shadow)=> {
        navigator.clipboard.writeText(boxShadow)
        setBoxShadow(shadow)
        toast.success(`${shadow} copied`)
    }
    
  return (
    <div>
 <Navbar>
 <ToastContainer className='fixed top-0' />

 <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-8  mx-9 my-5 ">

        <div className="boxes border p-10 cursor-pointer  "  style={{ boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'}} onClick={() => handleClick(' rgba(149, 157, 165, 0.2) 0px 8px 24px')}>
        box Shadow 1
        </div>

        <div className="boxes border p-10 cursor-pointer"  style={{boxShadow:'0 0 30px rgba(0, 0, 0, 0.5'}} onClick={() => handleClick('0 0 30px rgba(0, 0, 0, 0.5')}>
        box Shadow 2
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}} onClick={() => handleClick('rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px')}>
        box Shadow 3
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} onClick={() => handleClick('rgba(0, 0, 0, 0.35) 0px 5px 15px')}>
        box Shadow 4
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}} onClick={() => handleClick('rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px')}>
        box Shadow 5
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} onClick={() => handleClick('rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px')}>
        box Shadow 6
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}} onClick={() => handleClick('rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset')}>
        box Shadow 7
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}} onClick={() => handleClick('rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px')}>
        box Shadow 8
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px'}} onClick={() => handleClick('rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px')}>
        box Shadow 9
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} onClick={() => handleClick('rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px')}>
        box Shadow 10
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'}} onClick={() => handleClick('rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px')}>
        box Shadow 11
        </div>
     
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px'}} onClick={() => handleClick('rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px')}>
        box Shadow 13
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset'}} onClick={() => handleClick('rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset')}>
        box Shadow 14
        
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}} onClick={() => handleClick('rgba(0, 0, 0, 0.56) 0px 22px 70px 4px')}>
        box Shadow 15
        </div>
        <div className="boxes border p-10 cursor-pointer" style={{boxShadow:'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'}} onClick={() => handleClick('rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px')}>
        box Shadow 16
        </div>
        <div className='fixed top-[30rem] right-10' >
  <div className='gap-y-8'>
  <FaGithub size={30} />
    <IoLogoTwitter size={30} />
  </div>
</div>

      </div>
 </Navbar>
    </div>
  )
}

export default Box
