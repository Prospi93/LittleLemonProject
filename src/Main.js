import Tavolo from './assets/Tavolo.jpg';
import BookingForm from './BookingForm';
import React, { useReducer, useEffect } from 'react';
import { fetchData } from './API';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const initializeTimes = () => {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  };

  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload.availableTimes;
      default:
        return state;
    }
  };

  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, initializeTimes());

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const updateTimes = async (selectedDate) => {
    try {
      const updatedTimes = await fetchData(selectedDate);
      dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: { availableTimes: updatedTimes } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Aggiungi questo blocco useEffect per ottenere l'istanza di navigate
  const navigate = useNavigate();

  useEffect(() => {
    updateTimes(getCurrentDate());
  }, [navigate]);

  const submitForm = async (formData) => {
    // Implementa l'invio del formData all'API di conferma della prenotazione
    try {
      // Simulazione dell'invio dei dati con un ritardo di 1 secondo
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return true; // Simuliamo il successo della prenotazione
    } catch (error) {
      console.error('Error submitting form:', error);
      return false; // Simuliamo un errore nell'invio della prenotazione
    }
  };

  return (
    <main>
      <div className="containerMain">
        <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} updateTimes={updateTimes} onSubmitForm={submitForm} />
        <img src={Tavolo} alt="Little Lemon table"></img>
      </div>
    </main>
  );
}


