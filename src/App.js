import {useState} from "react" 


const Checkbox = ({value,id,checked,handleCheckd}) => {
  return( <div className="checkbox-container">
  <label htmlFor={id}  >{value}</label>
  <input type ="checkbox" className="checkbox-round " value={id} checked={checked} name={value} id={value} onChange={handleCheckd}/>
  </div>

  );
}

const Checkweek = ({ck,onck}) => {
  return(<div className="checkweek">
  {ck.map((e => <Checkbox {...e} key={e.value} handleCheckd={onck}/>))}
  </div>
  )
}


const Time = ({label,nme,tme,handlechng}) => {
  return(
    <div className="form-group form-inline row"> 
   <label className={nme} htmlFor={nme}>
         <span>{label}</span></label>
      <input type ="time" id={nme} className="timeele"  value={tme} onChange={handlechng} name={nme}/>
  </div>
  );
}

  




const App = () => {

  const initialState = {repeatV:"",
                        shiftV:"",
                        time:"00:00",
                      checked:[{value:"SUN",id:0,checked:false},
                      {value:"MON",id:1,checked:false},
                      {value:"TUE",id:2,checked:false},
                      {value:"WED",id:3,checked:false},
                      {value:"THU",id:4,checked:false},
                      {value:"FRI",id:5,checked:false},
                      {value:"SAT",id:6,checked:false}],
                    weekda:false,
                  }

  const [repeatV,setRepeatV] = useState(initialState.repeatV)
  const [shiftV,setShiftV] =useState(initialState.shiftV)
  const [stme,setStme] = useState(initialState.time)
  const [etme,setEtme] = useState(initialState.time)
  const [checked,setChecked] = useState(initialState.checked)
  const [weekda,setWeekda] = useState(initialState.weekda)
  const [formds,setFormd] = useState([])


  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const carr = [...checked]
    const larr = carr.filter(e => e.checked===true).map(e => e.value) 

    carr.forEach(e => {

    })
    const frmd = {date:data.get("dates"),
                  starttime:data.get("sttime"),
                  endtime:data.get("ettime"),
                  shift:data.get("shift"),
                  repeats:data.get("repeats"),
                  days:larr}
    const fs = [...formds]
    fs.push(frmd)
    event.target.reset()
    setFormd(fs)
    setRepeatV(initialState.repeatV)
    setShiftV(initialState.shiftV)
    setStme(initialState.time)
    setEtme(initialState.time)
    setWeekda(initialState.weekda)
    setChecked(initialState.checked)

    
}


  const handleRepeat = event => {
    setRepeatV(event.target.value)
  }

  const handleWeekda = event => {
    let ckkk = [...checked]
    ckkk.forEach(e => {
        if (e.value === "SUN" || e.value=== "SAT") {
          e.checked = true
        }
    })
    setChecked(ckkk)
    setWeekda(!weekda)
  }

  const handleShift = event => {
    if (event.target.value === "Morning Shift - 5am to 9am") {
       setStme("05:00")
       setEtme("09:00")
    }
    setShiftV(event.target.value)
  }

  const handleEtme = event => {
    console.log(event.target.type)
    setEtme(event.target.value)
  }

  const handleStme = event => {
    setStme(event.target.value)
  }

  const handleCheck = event => {
    let ckkk = [...checked]
    ckkk.forEach(e => {
        if (e.value === event.target.id) {
          e.checked = event.target.checked
        }
    })
    setChecked(ckkk)
  }

  return (
    <div className="centre-body">
      <div className="main-form">
   
    <div>
    <h3 className="hed">Select Start Date and Shift Time</h3>
    <h4 className="hed">each row represents a shift</h4>
    </div>
    <div >
    <form onSubmit={handleSubmit} id="hoaspitalshift">

      <div className="form-group form-inline row">
        
        <label className="sttime" htmlFor="datein">
          select start date</label>
            <input 
                type = "date" 
                className="dateele"
                id="datein"
                name="dates"
                required
                />
        
        </div>

        <div className="form-group form-inline row"> 
        <label htmlFor="repeats" className="repeatsL">select repeat </label>
        <select id="repeats" value={repeatV} onChange={handleRepeat} className="selectele" name="repeats" required>
        <option value="" disabled >Repeats</option>
          <option value="None">None</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
        </select>
        </div>

        <div className="form-group form-inline row ">
          <label htmlFor="shift" className="shiftL">select shift</label>
          <select id="shift" value={shiftV} onChange={handleShift} className="selectele" name="shift" required>
            <option value="" disabled >Shift</option>
            <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am</option>
            </select>     
        </div>
    

        <Time label="select start time" nme="sttime" tme={stme} handlechng={handleStme}/>  
        <Time label="select end time" nme = "ettime" tme={etme} handlechng={handleEtme}/>
        
        <div className="cckcn">
        <h4>Please select the day of the week</h4>        
        <div className="form-group  checkcent">
        <Checkweek ck={checked} onck={handleCheck} />
        </div>
        </div>
      
    <div className="form-group">
    <input type ="checkbox" className="checkbox-round "value="weekda" checked={weekda}id="weekda" onChange={handleWeekda}/>
    <label htmlFor="weekda" className="weekdaL">&nbsp;weekdays only</label>

    </div>

    <div className="form-group">  
        <button type="submit" className="buttoncl"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span>   Submit</button>
</div>
    
    </form>
    </div>
    </div>
    </div>

  )
}



export default App;
