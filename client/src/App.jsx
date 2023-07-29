import { useRef, useState, useEffect } from "react";
import uploadFile from "./services/api";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  const logo =
    "https://images.pexels.com/photos/5797903/pexels-photo-5797903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload and Share the Download Link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <h3>The Download-Ready File will appear right below:</h3>
        <a href={result} target="_blank" rel="noreferrer">
          {result}
        </a>
        <br />
        <h5>Developed By Pranav D.C. Patil</h5>
      </div>
    </div>
  );
}

export default App;
