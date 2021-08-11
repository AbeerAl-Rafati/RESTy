import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [method, setMethod] = useState("get");
  const [url, setUrl] = useState("https://swapi.dev/api/films/2/");
  const [body, setBody] = useState(null);
  
  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      method: method,
      url: url,
      body: body,
    };

    props.handleApiCall(formData);
  }

  function handelUrl(e) {
    setUrl(e.target.value);
  }
  function handelMethod(e) {
    setMethod(e.target.id);
  }
  function handelBody(e) {
    setBody(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handelUrl} />
          <button id="go" type="submit" >
            GO!
          </button>
        </label>
        <label>
          <span>BODY: </span>
          {/* <input
            name="body"
            type="text"
            style={{ width: "100%", height: "4rem" }}
          ></input> */}
          <textarea id="body" name="body" rows="4" cols="50"></textarea>
        </label>
        <label className="methods">
          <input type="button" value="GET" id="GET" onClick={handelMethod} />

          <input type="button" value="POST" id="POST" onClick={handelMethod} />

          <input type="button" value="PUT" id="PUT" onClick={handelMethod} />

          <input
            type="button"
            value="DELETE"
            id="DELETE"
            onClick={handelMethod}
          />
        </label>
      </form>
    </>
  );
}

export default Form;
