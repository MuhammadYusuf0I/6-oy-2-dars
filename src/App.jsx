import { useState } from "react";
import img1 from "./assets/image-1.jpg";
import img2 from "./assets/image-2.jpg";
import img3 from "./assets/image-3.jpg";
import img4 from "./assets/image-4.jpg";

import "./App.css";

const images = [img1, img2, img3, img4];

function App() {
  const [counter, setCounter] = useState(images.length - 1);

  function back() {
    setCounter((prevCounter) =>
      prevCounter === 0 ? images.length - 1 : prevCounter - 1
    );
  }

  function next() {
    setCounter((prevCounter) =>
      prevCounter === images.length - 1 ? 0 : prevCounter + 1
    );
  }

  return (
    <>
      <div
        className="card mt-5 m-auto card-block"
        style={{ width: "48rem" }}
      >
        <img
          style={{ width: "48rem" }}
          src={images[counter]}
          className="card-img-top p-4 "
          alt=""
        />
        <div className="card-body block ">
          <button
            onClick={back}
            type="button"
            className="btn button-1 btn-primary w-50"
          >
            Back
          </button>
          <button
            onClick={next}
            type="button"
            className="btn button-1 btn-primary w-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
