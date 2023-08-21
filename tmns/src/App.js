import './App.css';
import SamplingTM from './Components/SamplingTM';

function App() {
  return (
    <div>
        <SamplingTM/>
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
