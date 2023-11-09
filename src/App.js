import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import data from './data';
import Profiles from './Profiles';

function App() {
  return (
    <BrowserRouter>
   <div className="App">
      <Header />
      <Routes>
        <Route path='/main.js' element={<Main data={data.PostPage} />}/>
        <Route path='/Profile.js' element={<Profiles data={data.ProfilePage}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;