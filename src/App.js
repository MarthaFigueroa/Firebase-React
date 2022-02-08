import './App.css';
// import Links from './Components/Links';
import NavBar from './Components/NavBar';
import ListLinks from './Components/ListLinks';

function App() {
  return (
    <>
      <NavBar />
      <div className="container p-4">
        <div className="row">
          {/* <Links /> */}
          <ListLinks />

        </div>
      </div>
    </>
  );
}

export default App;
