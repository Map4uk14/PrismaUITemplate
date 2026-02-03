import { useState, useCallback, useRef } from 'react';
import Drag from './lib/Drag';
import BoilingEffect from './lib/BoilingEffect';
import FallingPlant from './lib/FallingPlant';
import Potimg from './assets/Pot.png';
import bgImg from './assets/Paper - Sheet 3.png';
import bellows from './assets/Laboratory Gear - Bellows.png';
import plant1 from './assets/Garden Plants - Foggy Parasol.png';
import plant2 from './assets/Garden Plants - Fire Citrine.png';
import plant3 from './assets/Garden Plants - Firebell.png';
import plant4 from './assets/Garden Plants - Frost Sapphire.png';

interface FallingPlantItem {
  id: number;
  imgUrl: string;
}

const PLANT_IMAGES = [plant1, plant2, plant3, plant4] as const;

function App() {
  const [fallingPlants, setFallingPlants] = useState<FallingPlantItem[]>([]);
  const nextIdRef = useRef(0);

  const getRandomPlant = useCallback(() => {
    return PLANT_IMAGES[Math.floor(Math.random() * PLANT_IMAGES.length)];
  }, []);

  const closeWindow = useCallback(() => {
    (window as any).hideWindow('close');
  }, []);

  const addFallingPlant = useCallback(() => {
    const randomPlant = getRandomPlant();
    setFallingPlants((prev) => [
      ...prev,
      { id: nextIdRef.current++, imgUrl: randomPlant },
    ]);
  }, [getRandomPlant]);

  const removeFallingPlant = useCallback((id: number) => {
    setFallingPlants((prev) => prev.filter((plant) => plant.id !== id));
  }, []);

  return (
    <main style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', height: '100vh' }}>
      <header>
        <h1>Drag the plant into the pot!</h1>
        <p>And close the window when you're done.</p>
      </header>

      <button onClick={closeWindow} className="close-button">
        Close X
      </button>

      <button onClick={addFallingPlant} className="drop-button">
        Drop Plant
      </button>

      <div className="interactive">
        <Drag />
      </div>

      <div className="utensils">
        <img src={bellows} alt="Bellows" className="bellows-img" />
        <div className="pot-container" style={{ position: 'relative' }}>
          {/* Falling plants behind pot */}
          <div className="falling-plants-layer" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
            {fallingPlants.map((plant) => (
              <FallingPlant
                key={plant.id}
                id={plant.id}
                imgUrl={plant.imgUrl}
                onComplete={removeFallingPlant}
              />
            ))}
          </div>
          {/* Pot and boiling effect above */}
          <img src={Potimg} alt="Pot" className="pot-img" style={{ position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 3 }}>
            <BoilingEffect />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;