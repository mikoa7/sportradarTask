import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
function Ekstraklasa20_21() {
    const [schedule,setSchedule] = useState([])
    const getData = async () => {
      try {
        const data = await axios.get("https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=3sxrtwdhtbkhybbfphgxkaz2");
        console.log(data.data)
        setSchedule(data.data.schedules);
        console.log(schedule)
      } catch (e) {
        console.log(e);
      }
    };
    useEffect(() => {
      getData();
    }, []);

  return (
    <div className="Ekstraklasa20_21">
         <table className='main rounded'>
        <tr>
          <th className='p-3'>Gospodarz</th>
          <th className='scoreF'>Wynik</th>
          <th className='p-3'>Przeciwnik</th>
          <th className='ms-5 d-flex'>Data meczu</th>
          <th className='venue'>Stadion</th>
        </tr>
        <td className=''>
        { schedule.map((sport_event) => {
        return (
          <div className="m-1 p-2">
            <tr  key={sport_event.results}><td className="">{sport_event.sport_event.competitors[0].name}</td></tr>
          </div>
        )
      })};
      </td>
      <td>{schedule.map((sport_event_status) => {

let bg;
let bbg;

 if(sport_event_status.sport_event_status.home_score === sport_event_status.sport_event_status.away_score){
   bg="bg-warning px-1 rounded badge"
   bbg="bg-warning px-1 rounded badge"
 }
 if( sport_event_status.sport_event_status.home_score > sport_event_status.sport_event_status.away_score){
   bg="bg-success px-1 rounded badge"
   bbg="bg-danger px-1 rounded badge"
 } 
 if(sport_event_status.sport_event_status.home_score < sport_event_status.sport_event_status.away_score){
   bg="bg-danger px-1 rounded badge"
   bbg="bg-success px-1 rounded badge"
 }
 return (
   <div className="score ">
     <tr key={sport_event_status.results}><td className={bg}>{sport_event_status.sport_event_status.home_score}</td>
     {
       sport_event_status.sport_event_status.home_score || sport_event_status.sport_event_status.away_score >= 0 ? " : " : null
     }
     <td className={bbg}>{sport_event_status.sport_event_status.away_score}</td></tr>
   </div>
 )
})}
</td>
       <td>{ schedule.map((sport_event) => {
        return (
          <div className="m-1 p-2">
            <tr key={sport_event.results}><td className="">{sport_event.sport_event.competitors[1].name}</td></tr>
          </div>
        )
      })}
      </td>
      <td>{ schedule.map((sport_event) => {
        return (
          <div>
            <tr key={sport_event.results}><td>{sport_event.sport_event.start_time}</td>
            </tr>
          </div>
        )
      })}
      </td>
      <td>{ schedule.map((sport_event) => {
        return (
          <div className='d-flex ms-4'>
            <tr key={sport_event.results}><td>{sport_event.sport_event.venue.name}</td>
            </tr>
          </div>
        )
      })}
      </td>
      </table>
    </div>
  )
}

export default Ekstraklasa20_21