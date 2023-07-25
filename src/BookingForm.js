import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingForm(props) {
  const { availableTimes, dispatchAvailableTimes, updateTimes } = props;
  const navigate = useNavigate(); // Otteniamo l'istanza di navigate

  const stile = { display: "grid", maxWidth: "200px", gap: "20px" };
  const stileInput = { borderRadius: "15px", textAlign: "center" };
  const stileBottone = { borderRadius: "15px", backgroundColor: "yellow", color: "black", fontWeight: "bold" };

  const [date, setDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isSubmitDisabled = () => {
    return date === "" || resTime === "";
  };

  const clearForm = () => {
    setDate("");
    setResTime("");
    setGuest("");
    setOccasion("");
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitDisabled()) {
      alert("Please choose a date and time!");
    } else {
      const formData = {
        date,
        resTime,
        guest,
        occasion,
      };
      const success = await props.onSubmitForm(formData); // Chiamiamo la funzione di submitForm passata come prop
      if (success) {
        clearForm();
        navigate('/confirmed-booking'); // Navigazione alla pagina di conferma dopo la prenotazione
      } else {
        alert("Error submitting form. Please try again later.");
      }
    }
  };

  useEffect(() => {
    dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: { availableTimes: availableTimes } });
  }, [availableTimes, dispatchAvailableTimes]);

  return (
    <form onSubmit={handleSubmit} style={stile}>
      <label htmlFor="res-date">Choose date</label>
      <input style={stileInput} type="date" id="res-date" value={date} onChange={handleDateChange}></input>
      <label htmlFor="res-time">Choose time</label>
      <select
        style={stileInput}
        id="res-time"
        value={resTime}
        onChange={(e) => {
          setResTime(e.target.value);
        }}
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input style={stileInput} type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e) => { setGuest(e.target.value) }}></input>
      <label htmlFor="occasion">Occasion</label>
      <select style={stileInput} id="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value) }}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input style={stileBottone} type="submit" value="Make Your reservation" disabled={isSubmitDisabled()} aria-label="On Click"></input>
    </form>
  );
}

