import { useState } from "react";
import "./App.css";
import About from "./Component/Screen/About";
import Alert from "./Component/Screen/Alert";
import Navbar from "./Component/Screen/Navbar";
import TextForm from "./Component/Screen/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


// const removeBodyClasses=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
// }




  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#031432";
      showAlert("Dark mode has been enable", "Success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enable", "Success");
    }
  };
  return (
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} mode={mode} />
      {/* <div className="container mb-5">
        <TextForm  showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
      </div>
     <div className="container mb-15">
      <About/>
     </div> */}

      <Routes>
        <Route
          exact
          path="/about"
          element={
            <div className="container mb-5">
              <About mode={mode} />
            </div>
          }
        />
        <Route
          exact
          path="/"
          element={
            <div className="container mb-5">
              <TextForm
                showAlert={showAlert}
                heading="Word Counter, Character Counter"
                mode={mode}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
