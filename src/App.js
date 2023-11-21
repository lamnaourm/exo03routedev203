import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './components/Acceuil';
import Categories from './components/Categories';
import Articles from './components/Articles';
import Cuisine from './components/Cuisine';
import Technologie from './components/Technologie';
import Voyage from './components/Voyage';
import DetailsArticle from './components/DetailsArticle';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route index element={<Acceuil />}/>
        <Route path='/home' element={<Acceuil />}/>
        <Route path='/categories'  >
            <Route index element={<Categories />} />
            <Route path='cuisine' element={<Cuisine />}/>
            <Route path='technologie' element={<Technologie />}/>
            <Route path='voyage' element={<Voyage />}/>
        </Route>
        <Route path='/articles'  >
          <Route index element={<Articles />} />
          <Route path=':id' element={<DetailsArticle />}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
