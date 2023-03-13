import '@/App.css'



function App() {
  const breakouts = [
    {
      title: "Feature Flags",
      availableSeats: 4
    },
    {
      title: "Zero Login",
      availableSeats: 10
    },
    {
      title: "DevSecGitOps",
      availableSeats: 10
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vontobel Tech Day Demo</h1>
      </header>
      <h1>Breakout Sessions</h1>
      {breakouts.map(breakout => (
          <div data-testid={breakout.title} key={breakout.title}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title: {breakout.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Available Seats: {breakout.availableSeats}</p>
            <a href="#"
               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Book
            </a>
          </div>
      ))}
    </div>
  )
}

export default App
