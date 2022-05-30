
import './App.css';
import Object from './components/Object'
function App() {
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];
  
  return (
    <div className="App">
   {/* {
     database.map((obj)=>{
       return(
         <>
       <h1>{obj.username}</h1>
       <p>{obj.password}</p>
       </>
       )
     })
   } */}

   <Object/>
  </div>
  );
}

export default App;
