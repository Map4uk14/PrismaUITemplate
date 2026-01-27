import svelteLogo from './assets/svelte.svg'
import viteLogo from '/vite.svg'
import Counter from './lib/Counter'

function App() {
  return (
    <main>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite Logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} className="logo react" alt="React Logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <Counter />
      </div>

      <p>
        Check out <a href="https://react.dev" target="_blank" rel="noreferrer">React</a>, a JavaScript library for building user interfaces!
      </p>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
