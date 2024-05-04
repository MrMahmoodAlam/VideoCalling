import React from 'react'
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Landing() {

    const [value, SetValue] =  useState();

    const navigate =  useNavigate();

    const hadleJoin = useCallback(()=>{
        navigate(`/room/${value}`)
    }, [navigate, value])

  return (
    <div id='landing-div'>

        <div id='text-div'>
            <h3 className='text-4xl md:text-5xl text-white font-bold text-wrap'>FREE VIDEO CALLING, TEXT MESSAGE & LIVE CHAT</h3>
        </div>

        <div id='form-div'>
            <form>
                <div>
                    <h3 className='md:text-3xl text-yellow-500'>Enter Login ID</h3>
                </div>
                <div>
                    <input type='text' name='id' placeholder='Id number' id='input-text' value={value}  onChange={(e)=>SetValue(e.target.value)} className='text-white'/>
                </div>
                <div>
                    <input type='submit' name='Join' value="Join" id='send' onClick={hadleJoin}/>
                </div>
            </form>
            
        </div>


    </div>
  )
}
