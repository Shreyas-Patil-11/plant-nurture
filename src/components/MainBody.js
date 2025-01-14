import React from "react";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "../styles/mainbody.css";
import { AiOutlineArrowUp, AiOutlineSend } from "react-icons/ai";

export default function MainBody() {
  const PLANTNET_API_KEY = "2b10zuXrAwnRcmAFZKh3e2BO"; //YOUR API KEY
  const [uploadFile, setUploadFile] = useState();
  const [organ, setOrgan] = useState();
  const [results, setResults] = useState([{}]);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  const handleFileSelect = (e) => {
    if (fileIsAnImage(e.target.files[0].type)) {
      setUploadFile(e.target.files[0]);
    } else {
      setUploadFile("");
      document.getElementById("fileUploader").value = "";
      alert("Please choose an image file!");
    }
  };

  const imageFileTypes = ["image/jpeg", "image/gif", "image/png"];

  const fileIsAnImage = (fileType) => {
    if (!imageFileTypes.includes(fileType)) {
      return false;
    }
    return true;
  };

  const chooseOrgan = (e) => {
    setOrgan(e.target.value);
  };

  const showChooseError = () => {
    alert("You must choose an organ AND a file");
  };

  const callPlantNetApi = () => {
    setLoader(true);
    const dataArray = new FormData();
    dataArray.append("images", uploadFile);
    dataArray.append("organs", organ);
    axios
      .post(
        `https://my-api.plantnet.org/v2/identify/all?api-key=${PLANTNET_API_KEY}`,
        dataArray,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setLoader(false);
        setResults((prevResults) => [
          prevResults[0],
          response.data.results.slice(0, 5),
        ]);
        setUploadFile("");
      })
      .catch((error) => {
        setLoader();
        setError(
          "There is an error. Please check you uploaded a real image file and that you internet connection is up."
        );
        setResults((prevResults) => [prevResults[0], []]);
        setUploadFile("");
      });
  };

  const submitForm = (event) => {
    if (!organ || !uploadFile) {
      event.preventDefault();
      showChooseError();
    } else {
      event.preventDefault();
      setError(null);
      callPlantNetApi();
    }
  };

  const handleCloseAlert = () => {
    setError();
  };

  return (
    <>
      <form onSubmit={submitForm} className="form">
        <div>
          <select onChange={chooseOrgan} id="organ" className="form-select">
            <option value="">--Choose an organ--</option>
            <option value="leaf">Leaf</option>
            <option value="flower">Flower</option>
            <option value="fruit">Fruit</option>
            <option value="bark">Bark</option>
          </select>

          <div className="upload-btn-wrapper">
            <button className="scanbtn btn2 uploadbtn">
              {!  uploadFile ? "Upload Image": "Uploaded"}
              <div className="iconButton">
                <AiOutlineArrowUp />
              </div>
            </button>
            <input
              id="fileUploader"
              onChange={handleFileSelect}
              type="file"
              className="form-control"
              accept="image/jpeg, image/gif, image/png"
            />
          </div>
          <button className="scanbtn btn2">
            Send
            <div className="iconButton">
              <AiOutlineSend />
            </div>
          </button>
        </div>
        <div className="form-data">
          {loader && (
            <div className="load">
              <div className="loader-container">
                <div className="loader"></div>
              </div>
              <p style={{ fontSize: "18px" }}>Photosynthesizing...</p>
            </div>
          )}

          {error && (
            <div className="alert alert-error">
              <p className="alert-message">{error}</p>
              <a onClick={handleCloseAlert} className="alert-close">
                &times;
              </a>
            </div>
          )}

          {results[1] && <h2 className="text-center">Results</h2>}
          <Results results={results} />
        </div>
      </form>
    </>
  );
}
