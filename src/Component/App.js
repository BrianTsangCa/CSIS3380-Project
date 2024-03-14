import '../App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Content from './Content';
import Cart from './Cart';

import NotFound from './NotFound';
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/Home" element={<Content />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      
    </div>
  );
}

export default App;
