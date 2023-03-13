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
      {breakouts.map(breakout => (<div key={breakout.title}>Title: {breakout.title} - Available Seats: {breakout.availableSeats}</div>))}
    </div>
  )
}

export default App
