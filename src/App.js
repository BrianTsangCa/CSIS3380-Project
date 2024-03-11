import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Content from './Component/Content';
import Header from './Component/Header';
import NotFound from './Component/NotFound';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
