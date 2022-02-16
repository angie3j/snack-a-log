import { Route, Routes } from 'react-router-dom';

// Pages
import Index from './Pages/Index';
import Form from './Pages/New';
// import Show from './Pages/Show';
// import Edit from './Pages/Edit';

// Components
import NavBar from './Components/NavBar';
// import snack from './Components/snacks';

function App() {
  return (
    <div className='wrapper'>

        <NavBar />

          <Routes>
            <Route exact path='/' element={ <h2>Hello!!</h2> } />
            <Route path='/snacks' element={ <Index /> } />
            {/* <Route exact path='/snacks/:index' element={ <Show />} /> */}
            <Route path='/snacks/new' element={ <Form/>} />
            {/* <Route path='/snacks/:index/edit' element={ <Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>

    </div>
  );
};

export default App;