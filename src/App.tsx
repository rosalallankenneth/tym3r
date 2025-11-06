import { AppRouter } from "./lib/router";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-linear-to-r from-fuchsia-500 to-cyan-500">
      <main className="p-12 w-full h-full">
        <AppRouter />
      </main>
    </div>
  )
}

export default App
