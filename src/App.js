
import './App.css';
import HomePage from "./components/HomePage"

function App() {
  const stopMovie = (e) => {
    e.target.pause();
    console.log('off');
  }
  
 const  playMovie = (e) => {
    e.target.play();
    console.log('on');
  }
  return (
    <div className="App">
      <HomePage playMovie={playMovie} stopMovie={stopMovie}/>
    </div>
  );
}

export default App;
