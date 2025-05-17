import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Inbox from './pages/Inbox';
import Message from './pages/Message';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inbox/:userId" element={<Inbox />} />
          <Route path="/send/:userId" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
