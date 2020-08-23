import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Create from "./pages/create";
import Disliked from "./pages/disliked";
import Edit from "./pages/edit";
import Liked from "./pages/liked";
import Search from "./pages/search";
import View from "./pages/view";
import ListPostContextProvider, {
  ListPostContext,
} from "./context/listpostContext";

class App extends React.Component {
  render() {
    return (
      <ListPostContextProvider>
        <ListPostContext.Consumer>
          {(list_context) => {
            return (
              <div>
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <View list_context={{ ...list_context }} />
                    </Route>
                    <Route path="/create">
                      <Create list_context={{ ...list_context }} />
                    </Route>
                    <Route
                      path="/edit"
                      component={Edit}
                      list_context={{ ...list_context }}
                    ></Route>
                    <Route path="/disliked">
                      <Disliked list_context={{ ...list_context }} />
                    </Route>
                    <Route path="/liked">
                      <Liked list_context={{ ...list_context }} />
                    </Route>
                    <Route path="/search">
                      <Search />
                    </Route>
                  </Switch>
                </Router>
              </div>
            );
          }}
        </ListPostContext.Consumer>
      </ListPostContextProvider>
    );
  }
}

export default App;
