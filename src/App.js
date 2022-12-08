import React from 'react';
import './App.css';
// import Main from './components/Main';
// import About from './components/About';
import Search from './components/Search';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Search></Search>
      // <BrowserRouter>
      //   <div className="App">
      //     <header>
      //       <h1>Welcome to City Explorer</h1>
      //       <nav>
      //         <ul>
      //           <li>
      //             <Link to="/">Home</Link>
      //           </li>
      //           <li>
      //             <Link to="/About">About</Link>
      //           </li>
      //           <li>
      //             <Link to="/Search">Search</Link>
      //           </li>
      //         </ul>
      //       </nav>
      //     </header>
      //     <Routes>
      //       {/* <Route path="/" element={<Main />} /> */}
      //       <Route path="Search" element={<Search />} />

      //     </Routes>
      //   </div>
      // </BrowserRouter>
    );
  }
}
export default App;