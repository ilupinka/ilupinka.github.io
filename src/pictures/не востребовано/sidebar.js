import './sidebar.css'
import { useContext } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Leftbar from './leftbar';
import Home from './Home1';
import Cost from './Cost1';
import Blog from './Blog1';
import Reviews from './Reviews1';
import Login from './Login1';
import Zachem from './Zachem';
import User from "./User";
import Addnote from "./Addnote";
import { ProfileContext } from './ProfileProvider'; 
// import Tags from './Tags';

// function App() {
//     const {userId, setUserId} = useContext(ProfileContext);
//     return (
//         <>
//             <Leftbar />
//             <Home />
//         </>
//     )
// }

// export default App;

