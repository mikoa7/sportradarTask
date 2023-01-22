import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
function Ekstraklasa19_20() {
    const [schedule,setSchedule] = useState([])
    const getData = async () => {
      try {
        const data = await axios.get("https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:84320/schedules.json?api_key=3sxrtwdhtbkhybbfphgxkaz2");
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
    <div className="Ekstraklasa19_20">
         <table>
        <tr>
          <th>Gospodarz</th>
          <th>Przeciwnik</th>
          <th>Wynik</th>
          <th>Data meczu</th>
          <th>Wynik po pierwszej połowie</th>
          <th>Stadion</th>
        </tr>
        <td>
        { schedule.map((sport_event) => {
        return (
         
          <div className="">

            <tr key={sport_event.results}><td className="">{sport_event.sport_event.competitors[0].name}</td></tr>
          </div>
        )
     
      })};
      </td>
      
       <td>{ schedule.map((sport_event) => {
        let index = 0;
        return (
          <div className="">
            <tr key={sport_event.results}><td className="" id={index++}>{sport_event.sport_event.competitors[1].name}</td></tr>
          </div>
        )
      })}
      </td>
      <td>{schedule.map((sport_event_status) => {

       let bg;
       let bbg;
       
        if(sport_event_status.sport_event_status.home_score === sport_event_status.sport_event_status.away_score){
          bg="bg-warning px-1"
          bbg="bg-warning px-1"
        }
        if( sport_event_status.sport_event_status.home_score > sport_event_status.sport_event_status.away_score){
          bg="bg-success px-1"
          bbg="bg-danger px-1"
        } 
        if(sport_event_status.sport_event_status.home_score < sport_event_status.sport_event_status.away_score){
          bg="bg-danger px-1"
          bbg="bg-success px-1"
        }
        return (
          
          <div className="">
            <tr key={sport_event_status.results}><td className={bg}>{sport_event_status.sport_event_status.home_score}</td>
           
            
           <td className={bbg}>{sport_event_status.sport_event_status.away_score}</td></tr>
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
      <td>
      
      </td>
      <td>{ schedule.map((sport_event) => {
        return (
          <div>
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

export default Ekstraklasa19_20