import React,{useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {returnCurrentTime} from '../../store'

 

const Stopwatch = () => {
  const isActive= useSelector(state => state['timerToggleReducer'].isActive)
  // console.log(isActive)
  const dispatch = useDispatch()

  const [seconds, setSeconds] = useState(0);
  const [minutes,setMinutes] =useState(0)
  const [hours,setHours] =useState(0)
  const [timeStamp,setTimeStamp] =useState(0)
  const addTimeList=(hours,minutes,seconds,timeStamp)=>({
      hours,
      minutes,
      seconds,
      timeStamp
  })
 
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        setTimeStamp(timeStamp=> timeStamp+1000)
        if (isActive) {
        setSeconds(seconds => seconds + 1);
        if( seconds !==0 && seconds % 59 ===0 )
        {
            setSeconds(0)
            setMinutes(minutes => minutes+1)
        }
        else if(minutes !==0 && minutes % 59 ===0){
            setMinutes(0)
            setHours(hours => hours+1)
        }
      }
      }, 1000);
   
    return () => {clearInterval(interval) 
        dispatch(returnCurrentTime(addTimeList(hours,minutes,seconds,timeStamp)))
       };
  }, [isActive,hours,minutes,seconds,timeStamp]);

  return (
    <div className="app">
      <div className="time">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="row">
      </div>
    </div>
  );
};

export default Stopwatch;