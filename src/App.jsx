import './App.css';

import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <title>Aku Järvinen</title>
      <div id='body'>
        <main id="main">
          <Navbar />
          <LeftContent />
          <RightContent />
        </main>
      </div>
    </div>
  );
}

export default App;
