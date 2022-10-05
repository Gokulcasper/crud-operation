import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h2>CRUD Operation</h2>



      <BrowserRouter>
        <Routes>
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/update' element={<Update />} />
          <Route exact path='/read' element={<Read />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
