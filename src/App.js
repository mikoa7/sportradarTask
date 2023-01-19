
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
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
    <div className="App">
      <table>
        <tr>
          <th>Gospodarz
          </th>
          <th>Przeciwnik</th>
          <th>Wynik
            
          </th>
        </tr>
        <td>
        { schedule.map((sport_event) => {
        return (
          <div>
            <tr key={sport_event.results}><td>{sport_event.sport_event.competitors[0].name}</td></tr>
          </div>
        )
      })};
      </td>
       <td>{ schedule.map((sport_event) => {
        return (
          <div>
            <tr key={sport_event.results}><td>{sport_event.sport_event.competitors[1].name}</td></tr>
          </div>
        )
      })}
      </td>
      <td>{ schedule.map((sport_event_status) => {
        return (
          <div>
            <tr key={sport_event_status.results}><td>{sport_event_status.sport_event_status.home_score}</td>:
            <td>{sport_event_status.sport_event_status.away_score}</td></tr>
          </div>
        )
      })}
      </td>
      
      </table>
  
    </div>
  );
};

export default App;
