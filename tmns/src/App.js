import Dashboard from "./Components/Dashboard";
import SamplingNS from "./Components/SamplingNS";
import "./Components/SamplingNS.css";
import SamplingTM from "./Components/SamplingTM";
import "./Components/SamplingTM.css";
import "./Components/Dashboard.css";

function App() {
  return (
    <div>
      <SamplingTM />
      <SamplingNS/>
      {/* <Dashboard/> */}
    </div>
    // <Router>
    //   <div className="App">
    //     <Navbar/>
    //     <div className="content">
    //       <Switch>
    //         <Route exact path = "/">
    //           {/* We have to use exact keyword as otherwise /create would match / and redirect us to Home */}
    //           <Home/>
    //         </Route>
    //         <Route exact path = "/create">
    //           <Create/>
    //         </Route>
    //         <Route exact path = "/blogs/:id">
    //           {/* We are accessing the blogs with variable id that's why we used : */}
    //           <BlogDetails/>
    //         </Route>
    //         <Route path = "*">
    //           <NotFound/>
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
