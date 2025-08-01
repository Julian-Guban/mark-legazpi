import React, { useEffect, useState } from "react";
import tos from "../assets/Exam/TOS.jfif";
import file from "../assets/Exam/Legaspi-Exam-Cookery.pdf";
import file1 from "../assets/Exam/Legaspi-Exam-Cookery_page-0001.jpg";
import file2 from "../assets/Exam/Legaspi-Exam-Cookery_page-0002.jpg";
import file3 from "../assets/Exam/Legaspi-Exam-Cookery_page-0003.jpg";
import file4 from "../assets/Exam/Legaspi-Exam-Cookery_page-0004.jpg";
import file5 from "../assets/Exam/Legaspi-Exam-Cookery_page-0005.jpg";
import file6 from "../assets/Exam/Legaspi-Exam-Cookery_page-0006.jpg";
// Answer Key
import file7 from "../assets/Exam/Legaspi-Exam-Cookery_page-0007.jpg";

function Exam() {
  const [modal, setModal] = useState(false);
  const images = [file1, file2, file3, file4, file5, file6, file7];
  const [inc, setInc] = useState(0);

  const increment = () => {
    setInc((prevInc) => (prevInc + 1) % images.length); // Loop back to 0 after the last image
  };

  const decrement = () => {
    setInc((prevInc) => (prevInc - 1 + images.length) % images.length); // Loop to the last image if going backwards from 0
  };

  const goToImage = (index) => {
    setInc(index);
  };

   // Prevent body scroll when modal is active
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'; // Disable page scroll
    } else {
      document.body.style.overflow = ''; // Restore default scroll behavior
    }

    return () => {
      document.body.style.overflow = ''; // Clean up when component unmounts
    };
  }, [modal]);
  return (
    <div
      id="Exam"
      className="flex-center flex-column"
      style={{ width: "100%", height: "inherit", paddingInline: "10px" }}
    >
      <h2 style={{ color: "gray" }}>- TOS | Exam </h2>
      <div className="card flex-center">
        <div className="card-content">
          <p className="hover-text">Click Here to View TOS & Exam </p>
          <picture className="center">
            <source srcSet={tos} type="image/png" />
            <img
              src={tos}
              alt="Hero Panel"
              width={"100%"}
              height={"100%"}
              onClick={() => setModal(true)}
              style={{ cursor: "pointer" }}
            />
          </picture>
        </div>
      </div>

      <div className={`modal ${modal && "active"}`}>
        <div className="modal-content flex-column" style={{alignItems: "center"}}>
          <div className="modal-header p-4">
            <div className="w-100 flex-column center text-center">
              <h1>TOS | Exam</h1>
              <p>- Table of Specification | Exam</p>
              <button
                className="btn btn-secondary"
                style={{ height: "fit-content !important" }}
              >
                <a
                  href={file}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Download Exam
                </a>
              </button>
            </div>

            <button className="modal-close" onClick={() => setModal(!modal)}>
              &times;
            </button>
          </div>
          <div className="w-100 p-2 flex-column">
            <h2>TOS: </h2>
            <img
              src={tos}
              alt="Loading..."
              width={"100%"}
              height={"100%"}
              loading="lazy"
            />
          </div>
          <h2>Exam: </h2>
          <div
            className="flex-row exam-container"
            style={{ position: "relative", alignItems: "flex-start" }}
          >
            <div
              className="carousel-container"
              style={{ position: "sticky", top: "0" }}
            >
              <button className="carousel-btn prev" onClick={decrement}>
                &#8592;
              </button>
              <ul className="carousel-track">
                <li className="slide">
                  <img
                    src={images[inc]}
                    alt="Loading..."
                    width={"400px"}
                    height={"100%"}
                    style={{
                      rotate: inc === 6 && "180deg",
                    }}
                  />
                </li>
              </ul>
              <button className="carousel-btn next" onClick={increment}>
                &#8594;
              </button>
            </div>
            <div
              className="preview-column"
              style={{
                flex: 1,
                marginLeft: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => goToImage(index)}
                  style={{
                    marginBottom: "10px",
                    cursor: "pointer",
                    padding: "5px",
                    backgroundColor:
                      inc === index ? "#000000ff" : "transparent", // Highlight current image
                    borderRadius: "5px",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <img
                    src={image}
                    alt={`Preview ${index}`}
                    width={"60px"}
                    height={"auto"}
                    style={{
                      objectFit: "cover",
                      borderRadius: "5px",
                      rotate: index === 6 && "180deg",
                    }}
                    loading="lazy"
                  />
                  <p>Page {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
