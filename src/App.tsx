import '@/App.css'
import { useState } from 'react';
import Breakout from './Breakout';

const breakoutSessions = [
  {
    title: "Having fun with flags",
    availableSeats: 4
  },
  {
    title: "Kafka Introduction",
    availableSeats: 10
  },
  {
    title: "Software Defined Network",
    availableSeats: 10
  },
  {
    title: "Using the potential of the Azure Platform",
    availableSeats: 10
  },
  {
    title: "Mobile Apps & Frontend @ Digihub",
    availableSeats: 10
  },
  {
    title: "Transformation of a legacy application",
    availableSeats: 10
  }
];

function App() {
  const [breakouts, setBreakouts] = useState(breakoutSessions);

  const updateBreakout = () => {
    setBreakouts(breakouts)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vontobel Tech Day Demo</h1>
      </header>
      <h1>Breakout Sessions</h1>
      <div className="flex flex-col items-center">
        {breakouts.map(breakout =>
          <Breakout key={breakout.title + breakout.availableSeats} breakout={breakout} updateBreakouts={updateBreakout} />
        )}
      </div>
    </div>
  )
}

export default App
