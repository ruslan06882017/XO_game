import React, {Component} from "react";
import ReactDOM from "react-dom";
import Layout from "./hoc/Layout.jsx";
import Quiz from "./containers/Quiz/Quiz.jsx";

class App extends Component {

  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    ); 
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));