import { ValidationError, useForm } from '@formspree/react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'

const ContactSection = ({submitted}) => {
  const succesAlertRef = useRef(null);
  const successAlertLoadRef = useRef(null)
  const loadingSectionRef = useRef(null);

  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [messageInputValue, setMessageInputValue] = useState("");

  // handle click button form 
  const onClickButton = () => {
    if(nameInputValue.length > 0 && emailInputValue.length > 0 && messageInputValue.length > 0 ) {
      loadingSectionRef.current.classList.replace("bg-opacity-0", "bg-opacity-100")
      setTimeout(() => {
        loadingSectionRef.current.style.display = "grid"
      }, 300)
    }
  }
  
  useEffect(() => {
    if (submitted) {
      succesAlertRef.current.style.opacity = "100%";
      succesAlertRef.current.style.display = "grid";
      setTimeout(() => {
        successAlertLoadRef.current.style.width = "100%";  
        successAlertLoadRef.current.style.background = "#4cffcc"
        setTimeout(() => {
          succesAlertRef.current.style.opacity = 0;
          setTimeout(() => {
            succesAlertRef.current.style.display = "none";
          }, 500);
        }, 4300)
      }, 100)

      loadingSectionRef.current.classList.add("bg-opacity-0")
      setTimeout(() => {
        loadingSectionRef.current.style.display = "hidden"
      }, 300)
    }
  }, [succesAlertRef, successAlertLoadRef])

  const [state, handleSubmit] = useForm("mrbzwgvz")
  if (state.succeeded) {
    return <ContactSection submitted={true} />
  }

  return (
    <div name='contact' className='w-full min-h-screen py-40 px-10 bg-[#fa5f4a] flex justify-center items-center p-4 relative z-10' id='contact-section'>
      {/* loading */}
      <div className='fixed w-full h-full bottom-0 left-0 hidden bg-opacity-80 place-content-center bg-[#151515] duration-300 z-50' ref={loadingSectionRef}>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <img className='w-20' src="/img/ui/loader.svg"></img>
          <span className='text-white text-xl'>sending...</span>
        </div>
      </div>
      
      {/* succes message */}
      <div className='w-full h-full hidden opacity-0 place-content-center top-0 left-0 absolute z-10 bg-[#fa5f4a] text-white duration-500' ref={succesAlertRef}>
        <div className='flex flex-col items-center'>
          <div className='w-fit h-fit px-8 py-7 rounded-full bg-[#FFCF97] text-4xl mb-10'>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </div>
          <span className='text-3xl font-bold mb-2'>Thank You</span>
          <span className='mb-10'>
            The form has been successfully submitted
          </span>
          <div className="flex flex-col items-center space-y-2">
            <div className='w-80 h-1 rounded-full bg-[#FFCF97]'>
              <div className='h-full w-0 bg-purple-1 duration-[4300ms]' ref={successAlertLoadRef}></div>
            </div>
            <span className='text-neutral-200 text-sm'>Close automatically</span>
          </div>
        </div>
      </div>
      {/* form */}
      <form method='POST' action="https://formspree.io/f/mrbzwgvz" className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold'>Contact</p>
          <p className='py-4'>For inquiries or just to say hello, the form below awaits you, or feel free to email me at antelocode@gmail.com</p>
        </div>
        {/* name */}
        <input className='bg-white text-black focus:outline-none p-2' type="text" placeholder='Name' name='name' id='name' value={nameInputValue} onChange={(e) => setNameInputValue(e.target.value)} required/>
        <ValidationError field='name' prefix='Name' errors={state.errors}></ValidationError>
        {/* email */}
        <input className='my-4 p-2 bg-white text-black focus:outline-none' type="email" placeholder='Email' name='email' id='email' value={emailInputValue} onChange={(e) => setEmailInputValue(e.target.value)} required/>
        <ValidationError field='email' prefix='Email' errors={state.errors}></ValidationError>
        {/* message */}
        <textarea className='bg-white text-black focus:outline-none p-2' name="message" id='message' type="text" rows="10" placeholder='Message' value={messageInputValue} onChange={(e) => setMessageInputValue(e.target.value)} required></textarea>
        <ValidationError field='message' prefix='Message' errors={state.errors}></ValidationError>
        {/* submit button */}
        <button className='border-2 border-slate-800 hover:bg-[#eaff4c] hover:border-[#eaff4c] hover:shadow-2xl shadow-pink-1 px-4 py-3 my-8 mx-auto flex items-center duration-200 w-full justify-center' type='submit' disabled={state.submitting} onClick={onClickButton}>Submit</button>
      </form>
    </div>
  )
}

export default ContactSection;