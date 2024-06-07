import { useEffect, useState,useRef } from "react"

function Stopwatch(){
    const[sec,setSec]=useState(0);
    const[min,setMin]=useState(0);
    const[running,setRunning]=useState(false);
    const timer=useRef(null);

    




    useEffect(()=>{
        if(running){
            timer.current=setInterval(()=>{
                setSec(prevsec=>{
                    if(prevsec===59){
                        setMin(prevMin=>prevMin+1);
                    return 0;
                    }
                    return prevsec+1;
                })
            },1000)
           }else{
            clearInterval(timer.current)
           }
    
        
return ()=>{
    clearInterval(timer.current)
}
    },[running])




    const handleStartStop=()=>{
        setRunning(running=>!running);

    }
const handleReset=()=>{
    setRunning(false);
    setMin(0);
    setSec(0);

}









    return(
        <div>
            <h2>Stopwatch</h2>
            <p>Time: {min}:{sec <10? "0"+sec:sec}</p>
            <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Stopwatch