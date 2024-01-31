import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../ShowDetails/showdetails.css'


const ShowDetails = ({ shows }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatNo, setSeatNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      date,
      time,
      seatNo,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    setIsVisible(false);
  };


  const { id } = useParams();
  const show = shows.find((show) => show.show.id.toString() === id);

  if (!show) {
    return <div>No show found with the provided ID</div>;
  }

  return (
    <div className='details-container'>


      <div className="image">
        {show.show.image ? (
          <img src={show.show.image.original} alt="Show Poster" />
        ) : (
          <img src="https://cdn2.iconfinder.com/data/icons/symbol-blue-set-3/100/Untitled-1-94-512.png" alt="Default Poster" />
        )}
      </div>
      <div className="details">
        <h1 className='details-heading'>{show.show.name}</h1>
        <p className='details-summary'>{show.show.summary}</p>

        <div className="lang-rat">
          <h4 className='language'>{`Language: ${show.show.language}`}</h4>
          <p>{`Rating:  ${show.show.rating.average === null ? 'No Data' : show.show.rating.average}`}</p>
        </div>

        <button className='ticket-btn' onClick={() => setIsVisible(!isVisible)}>book a movie ticket</button>
      </div>



      {/* Form */}
      {isVisible && (
        <form className='form' onSubmit={handleSubmit}>
          <span className='icon-cancle' onClick={() => setIsVisible(false)}><i class="fa-solid fa-xmark"></i></span>
          <h3 className='form-h3'>{`Movie Name: ${show.show.name}`}</h3>
          <label>Full Name:</label>
          <input type="text"
            placeholder='John Doe'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} />

          <label>Date:</label>
          <input type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)} />

          <label>Time:</label>
          <input  type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}/>

          <label>Seat No:</label>
          <input type="number"
            value={seatNo}
            onChange={(e) => setSeatNo(e.target.value)} />

          <button type="submit" className='form-submit'>Submit</button>
        </form>
      )}





    </div>
  );
}

export default ShowDetails;
