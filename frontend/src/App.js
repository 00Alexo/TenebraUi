import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompTesting from './pages/CompTesting';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route path = "/" element={<CompTesting/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;