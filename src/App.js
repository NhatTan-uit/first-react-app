import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyRoutes from './MyRoutes';

import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyRoutes />
    </div>
  );
}

export default App;
