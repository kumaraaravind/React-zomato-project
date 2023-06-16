
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage></Homepage>} />
          <Route path='/mainpage' element={<Mainpage></Mainpage>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
