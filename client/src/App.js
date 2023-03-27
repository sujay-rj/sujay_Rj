import './App.css';
import { useState } from 'react';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

//importing components
import Login from './component/account/Login'
import Home from './component/home/Home';
import Header from './component/header/Header';
import CreatePost from './component/posts/CreatePost';
import Signup from './component/account/Signup';
import Detailview from './component/posts/DetailView';
import Update from './component/posts/Update';
import About from './component/account/About';


// const PrivateRoute = ({ isAuthenticated, ...props }) => {
//   return (
//     isAuthenticated ?
//       <>
//         <Header />
//         <Outlet />
//       </>
//       : <Navigate replace to='/login' />
//   )

// }



function App() {

  // const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <div>
      <DataProvider>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/details/:id' element={<Detailview />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/about' element={<About />} />
            
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
