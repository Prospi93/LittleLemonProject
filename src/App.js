import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
