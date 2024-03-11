import '../App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import NotFound from './NotFound';
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
