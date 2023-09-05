import {Route, Routes} from "react-router-dom";
import './App.css';
import { Portfolio } from "./Pages/Portfolio";








function App() 
{
  return (
        
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Portfolio/>} />
        </Routes>
      </div>
  ); 
}


export default App;







