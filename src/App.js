import logo from './logo.svg';
import './App.css';
import Dashboard from './component/PieChart';
import Navbar from './component/Navbar';
import EVPieChart from './component/PieChart';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <EVDataDashboard /> */}
      <Dashboard />
    </div>
  );
}

export default App;
