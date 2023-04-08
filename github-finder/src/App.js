import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default App;
