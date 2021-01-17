import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import useSpeedTyping from '../hooks/useSpeedTyping'
export default function SpeedTyping() {
    const { text, count, timeRemaining, isStart, textRef, handleChange, startGame  } = useSpeedTyping();
    return (
        <>
            <div className="p-20 text-center">
                <h2 className="text-3xl text-center mb-8">How Fast Do You Type?</h2>
                <textarea ref={textRef} className="text-left text-gray-800" value={text} disabled={!isStart} name="" onChange={handleChange} id="" />
                <div className="">
                    <div className="timer">Time remaining: {timeRemaining} </div>
                    <button type="button" className="bg-black py-2 px-8" disabled={isStart} onClick={() => startGame()}>Start</button>
                    <h3>Word count: {count}</h3>
                </div>
            </div>
        </>
    )
}