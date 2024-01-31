import './App.css';
import ShowList from './components/ShowList/ShowList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowDetails from './components/ShowDetails/ShowDetails'
import { useState, useEffect } from 'react';

function App() {

  const [shows, setShows] = useState([]);
  console.log(shows)

    useEffect(()=>{

        const fetchData = async ()=>{
            try {
                const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
                const data = await response.json();
                setShows(data)

            }catch (error) {
                console.error('feating data error:', error)
            }
        }

        fetchData();

    },[])

  return (
    <Router>
      
      <Routes>
      <Route exact path='/' element={<ShowList shows={shows} />}></Route>
      <Route path='/ShowDetails/:id' element={<ShowDetails shows={shows} />} ></Route>
      </Routes>

    </Router>
  );
}

export default App;
