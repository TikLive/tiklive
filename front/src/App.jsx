import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import ConnectForm from './components/ConnectForm';
import GameComponent from './components/GameComponent';

import './assets/css/style.css';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route path="/connect" element={<ConnectForm />} />
        <Route path="/game" element={<GameComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
