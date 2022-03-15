import { Link } from "react-router-dom";
import NavBar from "../pages/forgot-password/NavBar";
import "../stylesheets/auto-complete-profile.css";
import React, { useRef, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

const AutoCompleteProfile = () => {
  const [files, setFiles] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
  });

  return (
    <>
      <NavBar />

      <div className="container-completeProfile d-flex justify-content-center text-center">
        <form className=" p-4">
          <h2 className="mt-2">Auto complete profile</h2>

          <div class="input-group-autoprofile d-flex justify-content-center flex-column">
            <div className="radio-container" style={{ position: "relative" }}>
              <h3 className="text-white text-left" style={{ fontSize: "25px" }}>
                Upload resume (PDF ,docx)
              </h3>

              {/* <input
                type="radio"
                name="radio"
                className=""
                checked="checked"
                id=""
                style={{
                  position: "absolute",
                  top: "-6px",
                  left: "-74px",
                  height: "45px",
                  width: "45px",
                  //   backgroundColor: "#F9C633",
                }}
              /> */}
            </div>

            <div
              className="  mt-1"
              {...getRootProps()}
              style={{ position: "relative" }}
            >
              <span
                className="text-white d-flex flex-column "
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "5vmax",
                  cursor: "pointer",
                }}
              >
                <span className="">
                  {files ? (
                    <>
                      <div className="d-flex flex-column ">
                        <span>
                          <FiUpload />
                        </span>
                        {files[0].name}
                        <span>
                          Drag your drop files or
                          <button
                            className="browse ml-2"
                            type="button"
                            className="browse"
                            onClick={open}
                          >
                            Browse
                          </button>
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-flex flex-column">
                        <span>
                          <FiUpload />
                        </span>

                        <span>
                          Drag your drop files or
                          <button
                            className="browse ml-2"
                            type="button"
                            classNam="browse"
                            onClick={open}
                          >
                            Browse
                          </button>
                        </span>
                      </div>
                    </>
                  )}
                </span>
              </span>
              <div
                className=""
                style={{
                  height: "138px",
                  background: " none",
                  border: " 1px solid #af8e13",
                  borderRadius: " 9px",
                  cursor: "pointer",
                  // width: " 477px",
                  color: " white",
                }}
              >
                <input {...getInputProps()} />
              </div>
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                // <p>Drag 'n' drop some files here, or click to select files</p>'
                ""
              )}
            </div>
            <br />

            {/* <div className="" style={{ position: "relative" }}>
              <input
                type="radio"
                name="radio"
                className="url"
                id=""
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "-74px",
                  height: "45px",
                  width: "45px",
                  //   backgroundColor: "#F9C633",
                  //   background: "none",
                  //   border: "2px solid ##af8e13",
                }}
              />
            </div>

            <div className="radio-container-url">
              <input type="text" class="form-control" placeholder="URL" />
            </div> */}
          </div>
          <div className="button-common text-center ">
            <button className="">Submit</button>
            <br />
            <Link to="/profile" className="text-white skip-text">
              Skip
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AutoCompleteProfile;
