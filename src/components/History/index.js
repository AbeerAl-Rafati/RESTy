import { useReducer } from "react";

function History(props) {
  const dataReducer = (state, action) => {
    switch (action.type) {
      case "GET_HISTORY":
        const localData = localStorage.getItem("reqInfo");
        return JSON.parse(localData);
        // window.location.reload()
      default:
        return state;
    }
  };

  const [history, dispatch] = useReducer(
    dataReducer,
    [props.requestParams],
    () => {
      const localData = localStorage.getItem("reqInfo");
      return localData ? JSON.parse(localData) : [];
    }
  );

  // useEffect(() => {
  //   dispatch({ type: "GET_HISTORY" });
  // }, [history]);

  return (
    <>
      {console.log("from history", history)}
      <div>
        <button onClick={() => dispatch({type:'GET_HISTORY'})}>Show History</button>
        <ul>
          {history.map((req) => {
            return (
              <li style={{ margin: "1.5rem" }}>
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
