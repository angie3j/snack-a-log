import { Route, Routes } from 'react-router-dom';

// Pages
// import Index from './Pages/Index';
// import New from './Pages/New';
// import Show from './Pages/Show';
// import Edit from './Pages/Edit';

// Components
// import NavBar from './Components/NavBar';
// import Song from './Components/songs';

function App() {
  return (
    <div className='wrapper'>

        <NavBar />
        <main>

          <Routes>
            <Route path='/songs' element={ <Index /> } />
            {/* <Route exact path='/songs/:index' element={ <Show />} /> */}
            {/* <Route path='/songs/new' element={ <New />} /> */}
            {/* <Route path='/songs/:index/edit' element={ <Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>

        </main>
    </div>
  );
};

export default App;