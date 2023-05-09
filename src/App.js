// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Header from './components/Header';
import './styles/base.css';
import User from './components/User';
import Numbers from './components/Numbers';
import Iteration from './components/Iteration';
import Movies from './components/Movies';
import Button from './components/Button';

/*
In programming, a components is an independent, reusable piece of code, 
components are the building blocks of react application.

A React components is a function or a JS class the optionally accepts data and return 
a react elements that describe some piece of the user interface

Convention: PascalCase(file and component)
*/


function App() {
  let title = 'Learning React';
  let link = 'About us'
  
const movies = [
  {
      name:"Jurassic Park",
      id:1001,
      image:"https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg","slug":"jurassic-park"
  },
  {
      name:"Eternals",
      id:1002,
      image:"https://raw.githubusercontent.com/mrspecht/media/main/img/eternals.jpg","slug":"eternals"
  },
  {
      name:"The Matrix",
      id:1003,
      image:"https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg","slug":"the-matrix"
  },
  {
      name:"Ocean's Eleven",
      id:1004,
      image:"https://raw.githubusercontent.com/mrspecht/media/main/img/oceans-eleven.jpg","slug":"oceans-eleven"
  },
  {
      name:"F9: The Fast Saga",
      id:1005,
      image:"https://raw.githubusercontent.com/mrspecht/media/main/img/f9-the-fast-saga.jpg","slug":"f9-the-fast-saga"
  }
];

  return (
    <>
    <Header title={title} link = {link} />
   <main>
    <div className="container">
      <h2>Components</h2>
      <User 
      name='jhon' 
      profession='back' 
      age={25}
      />
      <User 
      name='jhon1' 
      profession='back'
      age={25}
      />
      <User 
      name='jhon2' 
      profession='back'
      age={25}
      />
      
      <Numbers />
      <Movies movies={movies} />
      <Iteration />
    </div>
   </main>
   </>
  );
}

export default App;




