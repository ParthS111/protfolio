import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './component/NavBar';
import Header from './component/Header';
import Particles from 'react-particles-js';
function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
        Number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          },         
        },
        shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
        }
      }
    }}
    />
         <NavBar/>
         <Header/>
     </>
  );
}

export default App;
