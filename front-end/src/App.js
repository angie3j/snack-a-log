import { Route, Routes } from 'react-router-dom';

// Pages
// import Index from './Pages/Index';
import Form from './Pages/New';
import Show from './Pages/Show';
// import Edit from './Pages/Edit';

// Components
import NavBar from './Components/NavBar';
import Snacks from './Components/Snacks';

function App() {
  return (
    <div className='wrapper'>

        <NavBar />
          <Routes>
            {/* <Route exact path='/' element={ <h2>Hello!!</h2> } /> */}
            <Route path='/snacks' element={ <Snacks /> } />
            <Route exact path='/snacks/:id' element={ <Show />} />
            <Route path='/snacks' element={ <Form/>} />
            {/* <Route path='/snacks/:id/edit' element={ <Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
    </div>
  );
};

export default App;