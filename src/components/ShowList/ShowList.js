import React from 'react';
import { Link } from 'react-router-dom';
import '../ShowList/showlist.css'


const ShowList = ({ shows }) => {


  return (
    <div className='container'>
      <h1 className='heading'>Tv Shows</h1>
      <div className="movie" >

        {
          shows.map((show) => (
            <div key={show.show.id} className='movie-list'>

              {show.show.image ? (
                <img src={show.show.image.original} alt="Show Poster" />
              ) : (
                <img src="https://cdn2.iconfinder.com/data/icons/symbol-blue-set-3/100/Untitled-1-94-512.png" alt="Default Poster" />
              )}
              <h3>{show.show.name}</h3>
              <h4 className='language'>{`Language: ${show.show.language}`}</h4>
              <p>{`Rating:  ${show.show.rating.average === null ? 'No Data' : show.show.rating.average}`}</p>
              <Link to={`/ShowDetails/${show.show.id}`} className='watch'>Watch</Link>

            </div>
          ))
        }


      </div>
    </div>
  );
}

export default ShowList;
