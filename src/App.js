import logo from './logo.svg';
import './App.css';
import Accueil from './Page/Accueil/Accueil';
import { Route, Routes } from 'react-router-dom';
import ToutVoir from './Page/Tout-voir/Voir';
import MovieCards from './conponents/Accueil-movies/MovieCards';
import ListCards from './conponents/Accueil-movies/ListeCards';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element= { <Accueil/>}></Route>
        <Route path='Voir' element={<ToutVoir/>}></Route>
        <Route path='ListCard' element={<ListCards/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
