import '@/App.css'
import JSConfetti from 'js-confetti'
import {useState} from 'react';

const jsConfetti = new JSConfetti();



async function throwConfetti() {
  await jsConfetti.addConfetti()
}

function App() {
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
  const [breakouts, setBreakouts] = useState(breakoutSessions);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vontobel Tech Day Demo</h1>
      </header>
      <h1>Breakout Sessions</h1>
      <div className="flex flex-col items-center">
        {breakouts.map(breakout => {
            const [showNameInput, setShowNameInput] = useState(false);
            let button;
            if (showNameInput) {
              button = <div className="inline-flex">
                <input type="text" id="first_name" placeholder="Name"/>
                <button onClick={() => {
                  breakout.availableSeats = breakout.availableSeats-1;
                  setBreakouts(breakouts)
                  setShowNameInput(false)
                  throwConfetti()
                }}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Save
                </button>
                <button onClick={() => setShowNameInput(false)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Cancel
                </button>
              </div>
            } else {
              button = <button onClick={() => setShowNameInput(true)}
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Book
              </button>
            }
            return <div data-testid={breakout.title} key={breakout.title + breakout.availableSeats}
                        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-4/5 m-8">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{breakout.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Available
                Seats: {breakout.availableSeats}</p>
              {button}
            </div>
          }
        )}
      </div>
    </div>
  )
}

export default App
