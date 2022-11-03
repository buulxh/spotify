import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import Navbar from "./components/Navbar";
import Playing from "./components/Playing";
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playing/>
      </Provider>
    </div>
  );
}

export default App;
