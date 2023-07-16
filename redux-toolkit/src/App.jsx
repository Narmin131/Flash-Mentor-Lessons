import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";
import { useReducer, useState } from "react";
import axios from "axios";
import { AppReducer } from "./features/Reducer";

const App = () => {
  const dispatch = useDispatch();

  const counter = useSelector((store) => store.AppReducer);

  const initialState = {
    data: "",
    loading: "",
    error: "",
  };

  const [state, dispatchState] = useReducer(AppReducer, initialState);

  const fetchData = () => {
    dispatchState({ type: "FETCH_START" });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data.message);
        dispatchState({ type: "FETCH_SUCCESS", payload: res.data.message });
      })
      .catch(() => {
        dispatchState({ type: "FETCH_ERROR", payload: "Something went wrong" });
      });
  };

  return (
    <>
      <section>
        <img src={state.data} alt="" style={{ width: "300px" }} /> <br />
        <button onClick={fetchData} disabled={state.loading} style={{position:'absolute', top:'10px', right:"60px"}}>
          Fetch Random Image
        </button>
        {state.error && <p>{state.error}</p>}
      </section>

      <hr />
      <hr />
      <span>{counter}</span>
      <button
        onClick={() => dispatch(increment())}
        className="m-2 btn btn-success"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="m-2 btn btn-danger"
      >
        -
      </button>
      <button onClick={() => dispatch(reset())} className="m-2 btn btn-warning">
        reset
      </button>

      <br />
      <hr />
    </>
  );
};

export default App;
