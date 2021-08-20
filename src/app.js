import { useState, useEffect } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import History from "./components/History/index";

function App() {
  const [data, setData] = useState(null);
  const [requestParamsData, setRequestParamsData] = useState([
    {
      method: "GET",
      url: "https://swapi.dev/api/films/2/",
    },
  ]);
  const [header, setHeader] = useState("");
  const [shown, setShown] = useState(false);

  async function callApi(requestParams) {
    if (requestParams.method === "GET") {
      const json = await fetch(requestParams.url);
      const data = await json.json();
      // this.setState({ data });
      setData(data);
    } else if (
      requestParams.method === "POST" ||
      requestParams.method === "PUT" ||
      requestParams.method === "DELETE"
    ) {
      try {
        const response = await fetch(requestParams.url, {
          method: `${requestParams.method}`,

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestParams.body),
        });
        const data = await response.json();
        // this.setState({ data });
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    const headers = `{"Content-Type": "application/json"}`; //mok passing headers :/

    // this.setState({ headers, requestParams, shown: true });
    setRequestParamsData([
      ...requestParamsData,
      {
        method: requestParams.method,
        url: requestParams.url,
      },
    ]);
    setHeader(headers);
    setShown(true);
  }


    useEffect(() => {
      localStorage.setItem('reqInfo', JSON.stringify(requestParamsData));
    }, [requestParamsData]);


  //--------------------------//

  //---------------------------//
  return (
    <>
      <Header />
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem 15rem ",
        }}
      >
        <div>
          <Form handleApiCall={callApi} />
          <History requestParams={requestParamsData} />
        </div>

        {shown && (
          <div>
            <Results data={data} headers={header} />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default App;
