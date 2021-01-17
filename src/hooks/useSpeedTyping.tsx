import { useState, useEffect, useRef } from 'react'

function useSpeedTyping() {
    const [text, setText] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [timeRemaining, setTimeRemaining] = useState<number>(10);
    const [isStart, setIsStart] = useState<boolean>(false)
    const textRef = useRef<HTMLTextAreaElement>(null)
    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setText(e.currentTarget.value)
    }
    const handleClick = (e: React.FormEvent<HTMLButtonElement>): void => {
        //start countdown
    }
    const calculateWordCount = (t: string): number => {
        const wordArr: string[] = t.trim().split(' ');
        //console.log(wordArr);
        return wordArr.filter(word => word !== '').length;
    }
    const startGame = (): void => {
        setText('');
        setTimeRemaining(10);
        setCount(0);
        setIsStart(true);

    }
    useEffect(() => {

        if (isStart && timeRemaining > 0) {
            if (textRef && textRef.current) {
                textRef.current.focus();
            }
            window.setTimeout(() => {
                setTimeRemaining(prev => prev - 1)
            }, 1000)
        } else if (timeRemaining === 0) {
            setIsStart(false)
            setCount(calculateWordCount(text));
        }
    }, [timeRemaining, isStart])
    useEffect(() => {

    }, [isStart])

    return { text, count, timeRemaining, isStart, textRef, handleChange, startGame }
}

export default useSpeedTyping