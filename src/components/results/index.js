import { useState } from "react";

import JSONPretty from "react-json-prettify";
import Loading from "../Loading";
function Results(props) {
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);
  setTimeout(() => {
    setLoading(false);
    setRender(true);
  }, 2000);

  return (
    <>
      {loading && <Loading />}
      {render && (
        <section>
          <div>
            <p>Headers :</p>
            <JSONPretty json={props.headers} />
          </div>
          <div>
            <p>Results :</p>

            <JSONPretty json={props.data} />
          </div>
        </section>
      )}
    </>
  );
}

export default Results;
