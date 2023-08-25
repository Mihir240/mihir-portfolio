import React from "react";
import About from "./About";


export default function Home (){

    return (
        <div>
            <div className='h-screen flex flex-col items-center pt-48'>
                <div className='flex flex-col items-center gap-8'>
                    <h1 className='sm:text-8xl text-4xl text-white text-center'>I am Mihir Rana.</h1>
                    <p className='sm:text-lg text-sm text-white break-words text-center w-1/2'>I am a Software Engineer at ADP. I love working with Node.js, React and cloud technologies on AWS!</p>
                </div>
                <hr className='w-1/6 mt-6'/>
                {/* <FontAwesomeIcon icon={faCoffee} size="lg"/> */}

            </div>
            <About/>
         </div>
    )

}