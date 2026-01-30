import Drag from './lib/Drag'
import BoilingEffect from './lib/BoilingEffect'
import Potimg from './assets/Pot.png';
import bgImg from './assets/Paper - Sheet 3.png';
import bellows from './assets/Laboratory Gear - Bellows.png';

function App() {
  const closeMenu = () => {
    (window as any).hideWindow("close");
  };

  return (
    <main style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', height: '100vh' }}>
      <h1>Drag the plant into the pot!</h1>
      <p>And close the window when you're done.</p>

      <button className="close-button" onClick={closeMenu}>
        Close X
      </button>

      <div className="interactive">
        <Drag />
      </div>

      <div className="utensils">
        <img src={bellows} className="bellows-img" />
        <div className="pot-container">
          <img src={Potimg} className="pot-img" />
          <BoilingEffect />
        </div>
      </div>
    </main>
  );
}

export default App
