import React, { useEffect, useState } from "react";
import file from "../assets/PPT/PERFORMING_ALCOHOLIC_FERMENTATION_OF_FRUITS_AND_VEGETABLES.pdf";
import file1 from "../assets/PPT/ppt (1).jpg";
import file2 from "../assets/PPT/ppt (2).jpg";
import file3 from "../assets/PPT/ppt (3).jpg";
import file4 from "../assets/PPT/ppt (4).jpg";
import file5 from "../assets/PPT/ppt (5).jpg";
import file6 from "../assets/PPT/ppt (6).jpg";
import file7 from "../assets/PPT/ppt (7).jpg";
import file8 from "../assets/PPT/ppt (8).jpg";
import file9 from "../assets/PPT/ppt (9).jpg";
import file10 from "../assets/PPT/ppt (10).jpg";
import file11 from "../assets/PPT/ppt (11).jpg";
import file12 from "../assets/PPT/ppt (12).jpg";
import file13 from "../assets/PPT/ppt (13).jpg";
import file14 from "../assets/PPT/ppt (14).jpg";
import file15 from "../assets/PPT/ppt (15).jpg";
import file16 from "../assets/PPT/ppt (16).jpg";
import file17 from "../assets/PPT/ppt (17).jpg";
import file18 from "../assets/PPT/ppt (18).jpg";
import file19 from "../assets/PPT/ppt (19).jpg";
import file20 from "../assets/PPT/ppt (20).jpg";
import file21 from "../assets/PPT/ppt (21).jpg";
import file22 from "../assets/PPT/ppt (22).jpg";
import file23 from "../assets/PPT/ppt (23).jpg";
import file24 from "../assets/PPT/ppt (24).jpg";
import file25 from "../assets/PPT/ppt (25).jpg";
import file26 from "../assets/PPT/ppt (26).jpg";
import file27 from "../assets/PPT/ppt (27).jpg";
import file28 from "../assets/PPT/ppt (28).jpg";
import file29 from "../assets/PPT/ppt (29).jpg";
import file30 from "../assets/PPT/ppt (30).jpg";
import file31 from "../assets/PPT/ppt (31).jpg";
import file32 from "../assets/PPT/ppt (32).jpg";
import file33 from "../assets/PPT/ppt (33).jpg";
import file34 from "../assets/PPT/ppt (34).jpg";
import file35 from "../assets/PPT/ppt (35).jpg";
import file36 from "../assets/PPT/ppt (36).jpg";
import file37 from "../assets/PPT/ppt (37).jpg";
import file38 from "../assets/PPT/ppt (38).jpg";
import file39 from "../assets/PPT/ppt (39).jpg";
import file40 from "../assets/PPT/ppt (40).jpg";
import file41 from "../assets/PPT/ppt (41).jpg";
import file42 from "../assets/PPT/ppt (42).jpg";
import file43 from "../assets/PPT/ppt (43).jpg";
import file44 from "../assets/PPT/ppt (44).jpg";
import file45 from "../assets/PPT/ppt (45).jpg";
import file46 from "../assets/PPT/ppt (46).jpg";
import file47 from "../assets/PPT/ppt (47).jpg";
import file48 from "../assets/PPT/ppt (48).jpg";

function PPT() {
  const [modal, setModal] = useState(false);

  const images = [
    file1,
    file2,
    file3,
    file4,
    file5,
    file6,
    file7,
    file8,
    file9,
    file10,
    file11,
    file12,
    file13,
    file14,
    file15,
    file16,
    file17,
    file18,
    file19,
    file20,
    file21,
    file22,
    file23,
    file24,
    file25,
    file26,
    file27,
    file28,
    file29,
    file30,
    file31,
    file32,
    file33,
    file34,
    file35,
    file36,
    file37,
    file38,
    file39,
    file40,
    file41,
    file42,
    file43,
    file44,
    file45,
    file46,
    file47,
    file48,
  ];
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
      id="PPT"
      className="flex-center flex-column"
      style={{ width: "100%", height: "inherit", paddingInline: "10px" }}
    >
      <h2 style={{ color: "gray" }}>- PowerPoint Presentation</h2>
      <div className="card flex-center">
        <div className="card-content">
          <p className="hover-text">Click Here to View PPT</p>
          <picture className="center">
            <source srcSet={file1} type="image/png" />
            <img
              src={file1}
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
        <div className="modal-content flex-column flex-center">
          <div className="modal-header p-4">
            <div className="w-100 flex-column center text-center">
              <h1>PPT</h1>
              <p>- PowerPoint Presentation</p>
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
                  Download PPT
                </a>
              </button>
            </div>

            <button className="modal-close" onClick={() => setModal(!modal)}>
              &times;
            </button>
          </div>

          <div
            className="w-100 flex-column flex-center ppt-container p-4"
            style={{ position: "relative" }}
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
                  />
                </li>
              </ul>
              <button className="carousel-btn next" onClick={increment}>
                &#8594;
              </button>
            </div>
            <div
              className="ppt-preview"
              style={{
                width: "600px",
                flex: 1,
                marginLeft: "20px",
                display: "flex",
                flexDirection: "row",
                overflow: "auto",
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
                    backgroundColor: inc === index ? "#35b276" : "transparent", // Highlight current image
                    borderRadius: "5px",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <img
                    src={image}
                    alt={`Preview ${index}`}
                    width={"60px"}
                    height={"auto"}
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                    loading="lazy"
                  />
                  <p
                    style={{
                      color: inc === index ? "black" : "white", // Highlight current image
                    }}
                  >
                    Page {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PPT;
