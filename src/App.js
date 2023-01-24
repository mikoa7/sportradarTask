
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ekstraklasa20_21 from './Ekstraklasa20_21';
import Ekstraklasa19_20 from './Ekstraklasa19_20';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { render } from '@testing-library/react';


function App() {
  const [season,setSeason] = useState([""])
  const [names,setNames] = useState([])
  const getData = async () => {
    try {
      const data = await axios.get("https://api.sportradar.us/soccer/trial/v4/en/competitions/sr:competition:17/seasons.json?api_key=3sxrtwdhtbkhybbfphgxkaz2");
      console.log(data.data)
      setSeason(data.data.seasons);
      console.log(season)
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [])
  
  console.log(names)
  const Component = () => {
    render(
        <Ekstraklasa20_21 className="ms-3"/>
    )
  }
  const Componentt = () => {
    render(
        <Ekstraklasa21_22 />
    )
  }
  return (
    <div className="d-flex m-3">
     <DropdownButton id="dropdown-basic-button" title="Seasons">
    { season.map((name) => {
      setNames[name.name]
      console.log(names)
      console.log(name)
    return (
      <Dropdown.Item onClick={Component} href="#/action-1" >{name.name}
      </Dropdown.Item>
    )
  })}
    <Dropdown.Item  id="2" onClick={Componentt} href="#/action-2" >
      </Dropdown.Item>
    </DropdownButton>
    </div>
  );
};

export default App;
