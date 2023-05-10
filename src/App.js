import './App.css';
import {Footer} from "./components";
import {Header} from "./components";
import {AddTask} from "./components";
import {Jokes} from "./components";
import { PageNotFound } from './pages';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
