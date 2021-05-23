import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Tweet from "./components/tweets/Tweet";

function App() {
  return (
     <BrowserRouter>
          <div className="App">
              <Navbar />
              <Tweet />
          </div>
     </BrowserRouter>

  );
}

export default App;
