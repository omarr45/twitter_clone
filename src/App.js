import './App.css';

import LeftMenu from './components/LeftMenu';
import MainSection from './components/MainSection';
import RightSection from './components/RightSection';

function App() {
  return (
    <div className='App'>
      <LeftMenu />
      <MainSection />
      <RightSection />
    </div>
  );
}

export default App;
