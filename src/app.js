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
      shown: false,
    };
  }

  callApi = async (requestParams) => {
    console.log(requestParams);

    if (requestParams.method === "POST" || requestParams.method === "PUT") {
      const response = await fetch(requestParams.url, {
        method: requestParams.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestParams.body),
      });
      const data = await response.json();
      this.setState({ data });
    } else if (
      requestParams.method === "GET" ||
      requestParams.method === "DELETE"
    ) {
      const json = await fetch(requestParams.url);
      const data = await json.json();
      this.setState({ data });
    }
    const headers = `{"Content-Type": "application/json"}`; //mok passing headers :/

    console.log(headers);

    this.setState({ headers, requestParams, shown: true });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <section style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <Form handleApiCall={this.callApi} />
            <ul>
              <li>
                <div>Request Method: {this.state.requestParams.method}</div>
                <div>URL: {this.state.requestParams.url}</div>
              </li>
            </ul>
          </div>
          {this.state.shown && (
            <div>
              <Results data={this.state.data} headers={this.state.headers} />
            </div>
          )}
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
