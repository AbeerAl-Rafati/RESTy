import React from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      headers: "",
    };
  }

  callApi = async (requestParams) => {
    console.log(requestParams);

    const response = await fetch(requestParams.url, {
      method: requestParams.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestParams.body),
    });
    const data = await response.json();
    const headers = `{"Content-Type": "application/json"}`; //mok passing headers :/

    // const data = await (await fetch(requestParams.url)).json;
    console.log(headers);

    this.setState({ headers, data, requestParams });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <ul>
          <li>
            <div>Request Method: {this.state.requestParams.method}</div>
            <div>URL: {this.state.requestParams.url}</div>
          </li>
        </ul>

        <Form handleApiCall={this.callApi} />
        <p>Headers : {this.state.headers}</p>
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
