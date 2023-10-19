import React from 'react'
import check from "../images/icon-list.svg";
import MailForm from "../form/MailForm.jsx";
const Main = ({setShowSuccess}) => {
  return (
    <main className='grid gap-3.5 text-[#242742] py-8 px-6  bg-white lg:py-[5.3125rem] lg:h-[40.125rem] lg:rounded-1-[2.0625rem]  lg:pl-16 lg:gap-0 lg:w-[60rem]'>
        <h1 className=' font-bold text-[2.375rem] tracking-wide lg:text-[3.375rem lg:mb-[-0.5rem]] '>Stay Updated!</h1>
        <p className='lg:translate-y-[-0.25rem]'>Join 60,000+ product managers receiving monthly updates on:</p>
        
        <ul className='grid gap-y-2.5 mt-2.5 lg:gap-y-1 lg:translate-y-[-0.625rem]'>
            <li className='flex items-start gap-4'>
                <img className="w-[1.375rem] translate-y-0.5" src={check} alt="" aria-hidden="true" />
                <span>Product discovery and building what matters</span>
            </li>
            <li className="flex items-start gap-4">
          <img className="w-[1.375rem] translate-y-0.5" src={check} alt="" aria-hidden="true" />
          <span>Measuring to ensure updates are a success</span>
        </li>
        <li className="flex items-start gap-4">
          <img className="w-[1.375rem] translate-y-0.5" src={check} alt="" aria-hidden="true" />
          <span>And much more!</span>
        </li>
        </ul>
        <MailForm setShowSuccess={setShowSuccess} />
    </main>
  )
}

export default Main;