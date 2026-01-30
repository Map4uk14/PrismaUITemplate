import { useState, useCallback } from 'react';
import Drag from './lib/Drag'
import BoilingEffect from './lib/BoilingEffect'
import FallingPlant from './lib/FallingPlant'
import Potimg from './assets/Pot.png';
import bgImg from './assets/Paper - Sheet 3.png';
import bellows from './assets/Laboratory Gear - Bellows.png';
import plant1 from './assets/Garden Plants - Foggy Parasol.png';
import plant2 from './assets/Garden Plants - Fire Citrine.png';
import plant3 from './assets/Garden Plants - Firebell.png';
import plant4 from './assets/Garden Plants - Frost Sapphire.png';

function App() {
  const plants = [plant1, plant2, plant3, plant4];
  const [fallingPlants, setFallingPlants] = useState<{ id: number; imgUrl: string }[]>([]);

  const [nextId, setNextId] = useState(0);

  const closeMenu = () => {
    (window as any).hideWindow("close");
  };

  const addFallingPlant = useCallback(() => {
    const randomPlant = plants[Math.floor(Math.random() * plants.length)];
    setFallingPlants(prev => [...prev, { id: nextId, imgUrl: randomPlant }]);
    setNextId(prev => prev + 1);
  }, [nextId]);

  const removeFallingPlant = useCallback((id: number) => {
    setFallingPlants(prev => prev.filter(plant => plant.id !== id));
  }, []);

  return (
    <main style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', height: '100vh' }}>
      <h1>Drag the plant into the pot!</h1>
      <p>And close the window when you're done.</p>

      <button className="close-button" onClick={closeMenu}>
        Close X
      </button>

      <button onClick={addFallingPlant} style={{ marginLeft: '10px' }}>
        Drop Plant
      </button>

      <div className="interactive">
        <Drag />
      </div>

      <div className="utensils">
        <img src={bellows} className="bellows-img" />
        <div className="pot-container" style={{ position: 'relative' }}>
          <img src={Potimg} className="pot-img" style={{ zIndex: 20, position: 'relative' }} />
          <BoilingEffect />
          {fallingPlants.map(plant => (
            <FallingPlant key={plant.id} id={plant.id} imgUrl={plant.imgUrl} onComplete={removeFallingPlant} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App
