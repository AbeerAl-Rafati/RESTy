import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [method, setMethod] = useState("get");
  const [url, setUrl] = useState("https://swapi.dev/api/films/2/");
  const [body, setBody] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();

    // const formData = {
    //   method: "GET",
    //   url: "https://pokeapi.co/api/v2/pokemon",
    // };
    const formData = {
      method: method,
      url: url,
      // body: body,
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
          <button id="go" type="submit">GO!</button>
        </label>
        <label>
          <span>BODY: </span>
          <input
            name="body"
            type="text"
            style={{ width: "100%", height: "4rem" }}
          ></input>
        </label>
        <label className="methods">
          <span id="GET" onClick={handelMethod}>
            GET
          </span>
          <span id="POST" onClick={handelMethod}>
            POST
          </span>
          <span id="PUT" onClick={handelMethod}>
            PUT
          </span>
          <span id="DELETE" onClick={handelMethod}>
            DELETE
          </span>
        </label>
      </form>
    </>
  );
}

export default Form;

// import React from 'react';
// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           </label>
//         </form>
//       </>
//     );
//   }
// }
