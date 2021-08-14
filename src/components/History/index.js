// import { useState, useEffect } from "react";

function History(props) {
  return (
    <>
      {console.log("this is from history component", props.history)}
      <div>
        <button
          onClick={(props) => {
            props.history
          }}
        >
          Get History
        </button>
        <ul>
          {props.history.map((req) => {
            // console.log("this is from history component", req);
            return (
              <li>
                <div>
                  Request Method: <span>{req.method}</span>
                </div>
                <div>
                  URL: <span>{req.url}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default History;
