import {Link} from "react-router-dom";

const Tablerow = ({date,starttime,endtime,shift,repeats,days}) =>{
return(
    <tr>
        <td>{date}</td>
        <td>{starttime}</td>
        <td>{endtime}</td>
        <td>{shift}</td>
        <td>{repeats}</td>
        <td>{days.map(e => <i key={e}>{e},</i>)}</td>
    </tr>
)
}

const Display = (props) =>{
    const formds = props.location.state.formds
    console.log(props.location.state.formds)
    return(
    <div>
    <h3><Link to={{
        pathname: "/",
        state: { formds: formds }
      }}> go to form page</Link></h3>
      <h3>SHhift table</h3>
      <table>
          <tbody>
          <tr>
          <th>Date</th>
          <th>Start time</th>
          <th>end time</th>
          <th>Shift</th>
          <th>repeats</th>
          <th>days</th>
          </tr>
          {formds.map((e,i) => <Tablerow {...e} key={i} />)}
      </tbody>
      </table>
    </div>);
}

export default Display;