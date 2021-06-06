// const [books, setBooks] = useState({ items: [] });
//   let API_URL = `https://www.googleapis.com/books/v1/volumes`;

//   const fetchBooks = async () => {
//       // Ajax call to API using Axios
//       const result = await axios.get(`${API_URL}?q=${searchTerm}`);
//       // Books result
//       console.log(result.data);
//       console.log(result.data.items[0].volumeInfo.title);
//       document.getElementById("title").innerHTML = result.data.items[0].volumeInfo.title;


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



///////




// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import "./App.css";
// import MyNav from "./components/Navbar";
// import Home from "./pages/Home";
// import Search from "./pages/Search";
// import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <MyNav />
//           <Switch>
//             <Route exact path="/">
              {/* <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App; */}