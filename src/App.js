import logo from './logo.svg';
import './App.css';
import Accueil from './Page/Accueil/Accueil';
import { Route, Routes } from 'react-router-dom';
import ToutVoir from './Page/Tout-voir/Voir';
import ListCard from './conponents/Accueil-movies/ListCards/ListeCards';
import MoviesListComponent from './conponents/Movies-Composent/MoviesListcomponent.js/MoviesListcomponent';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element= { <Accueil/>}></Route>
        <Route path='/Voir' element={<ToutVoir/>}></Route>
        <Route path='/ListCard' element={<ListCard/>}></Route>
        <Route path='/MoviesListComponent/:id' element={< MoviesListComponent/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
