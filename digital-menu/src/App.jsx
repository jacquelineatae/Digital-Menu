import './App.css';
import Navigation from './navigation';
import MenuItem from './menuItem';
import hashtauranteImg from './assets/hashtaurante.jpeg';

function App() {
  return (
    <>
      <img src={hashtauranteImg} className="cover" />
      <Navigation />
      <h2>Main Dishes</h2>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />      
    </>
  );
}

export default App;

