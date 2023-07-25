import Tavolo from './assets/Tavolo.jpg';
import BookingForm from './BookingForm';
import React, {useReducer} from 'react';

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
    }

    const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, initializeTimes());

    const updateTimes = (selectedDate) => {
        if (selectedDate < "2023-07-16") {
            return [
                "18:00",
                "20:00",
                "21:00",
            ]
        } else {
            return initializeTimes();
        }
    }

    return (
        <main>
            <div className="containerMain">
                <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} updateTimes={updateTimes} />
                <img src={Tavolo} alt="Little Lemon table"></img>
            </div>
        </main>
    );
}

