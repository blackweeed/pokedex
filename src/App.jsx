import Bottombar from "./components/Bottombar";
import PokeList from "./components/PokeList";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <PokeList />
      <Bottombar />
    </div>
  );
}

export default App;
