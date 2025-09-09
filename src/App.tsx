import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Alert} from './Alert';
function App() {
  const [count, setCount] = useState(0)
  const unused = "something";
  return (
    <div className="App">
      <div>
        <h1>My Super React and TypeScript App!</h1>
      </div>
      <Alert type="warning" heading="Success">
        Everything is good!
        </Alert>
      <div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React and Typescript
        </a>
      </div>
    </div>
  )
}

export default App
