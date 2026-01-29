import Drag from './lib/Drag'
import imgUrl from './assets/Pot.png';

function App() {
  return (
    <main style={{ display: 'flex', gap: '20px' }}>

      <h1>Vite + React</h1>

      <div className="interactive">
        <img 
        src={imgUrl} alt="Descriptive text"
        style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '600px' 
        }}
        />
      </div>

      <div className="drag-box">
        <Drag />
      </div>
    </main>
  )
}

export default App
