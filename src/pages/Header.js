import React, { useState } from "react";
import home from "../assets/icons/home_44428.png";
import dlp from "../assets/icons/business-plan_7111109.png";
import ppt from "../assets/icons/presentation_5227317.png";
import reflection from "../assets/icons/reflection_17677694.png";
import exam from "../assets/icons/paper_3640488.png";
import docu from "../assets/icons/file-cabinet_3280876.png";

function Header() {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tab")) || "Hero";
    } catch (error) {
      return "Hero";
    }
  });

  const tabChange = (newTab) => {
    if (newTab === tab) return;
    localStorage.setItem("tab", newTab);
    setTab(newTab);
  };

  return (
    <header className="header">
      <div className="menu-toggle">
        <button
          id="menuToggle"
          className=" btn btn-secondary p-1"
          onClick={() => setShow(!show)}
        >
          &#9776;
        </button>
      </div>
      <div
        className={`navbar flex-row ${show && "show"}`}
        style={{ paddingInline: "10px" }}
      >
        <a
          href="#Hero"
          className={`btn ${tab === "Hero" && "active"}`}
          onClick={() => tabChange("Hero")}
        >
          <img
            src={home}
            alt="Home"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Home</span>
        </a>
        <a
          href="#DLP"
          className={`btn ${tab === "DLP" && "active"}`}
          onClick={() => tabChange("DLP")}
        >
          <img
            src={dlp}
            alt="Detailed Lesson Plan"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>DLP</span>
        </a>
        <a
          href="#PPT"
          className={`btn ${tab === "PPT" && "active"}`}
          onClick={() => tabChange("PPT")}
        >
          <img
            src={ppt}
            alt="PowerPoint Presentation"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>PPT</span>
        </a>
        <a
          href="#Exam"
          className={`btn ${tab === "Exam" && "active"}`}
          onClick={() => tabChange("Exam")}
        >
          <img
            src={exam}
            alt="Exam"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Exam</span>
        </a>
         <a
          href="#Reflection"
          className={`btn ${tab === "Reflection" && "active"}`}
          onClick={() => tabChange("Reflection")}
        >
          <img
            src={reflection}
            alt="Reflections"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Reflections</span>
        </a>
        <a
          href="#Documentation"
          className={`btn ${tab === "Documentation" && "active"}`}
          onClick={() => tabChange("Documentation")}
        >
          <img
            src={docu}
            alt="Documentation"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Documentation</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
