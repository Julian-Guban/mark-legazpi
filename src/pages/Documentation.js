import React from "react";
import img1 from "../assets/Docu/1.webp";
import img2 from "../assets/Docu/2.webp";
import img3 from "../assets/Docu/3.webp";
import img4 from "../assets/Docu/4.webp";
import img6 from "../assets/Docu/6.webp";

function Documentation() {
  return (
    <div id="Documentation" className="reverse-card">
      <div className="flex-row">
        <p style={{ textIndent: "20px" }}>
          This demo made me feel both nervous and excited it was finally my
          turn, and I wanted everything to go smoothly. My topic was "Performing
          Alcoholic Fermentation of Fruits and Vegetables," and I really poured
          my effort into preparing for it. I started the session with an
          interactive activity called “Fresh or Changed?” where students had to
          quietly guess whether certain foods were fresh or had gone through
          fermentation. It was a light and fun way to break the ice, and I think
          it helped the class ease into the topic.
        </p>
      </div>
      <div className="flex-row">
        <img src={img1} alt="Loading..." width={"200px"} />
        <p style={{ textIndent: "10px" }}>
          From there, I explained fermentation in the simplest way I could
          comparing it to how tiny microorganisms transform sugars into new
          substances like alcohol or acids. I wanted the students to see it as
          something natural and even magical. Then, I introduced the main
          ingredients involved in alcoholic fermentation: sugar, yeast, vinegar,
          salt, and spices. I explained how each of them plays a specific role
          in the process, and I used clear examples to make the lesson
          relatable.
        </p>
        <img src={img2} alt="Loading..." width={"200px"} />
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <img src={img3} alt="Loading..." width={"200px"} />
          <img src={img6} alt="Loading..." width={"200px"} />
        </div>
        <div className="flex-column">
          <p style={{ textIndent: "10px" }}>
            The highlight for me was when I got to explain the wine-making
            process, which included the four main stages: extraction,
            fermentation, aging, and clarification. I walked them through each
            step and emphasized the importance of yeast in breaking down sugar
            to produce alcohol and carbon dioxide. I also discussed how wine
            continues to change as it ages, and why clarification is important
            to make it look appealing.
          </p>
          <p style={{ textIndent: "10px" }}>
            The highlight for me was when I got to explain the wine-making
            process, which included the four main stages: extraction,
            fermentation, aging, and clarification. I walked them through each
            step and emphasized the importance of yeast in breaking down sugar
            to produce alcohol and carbon dioxide. I also discussed how wine
            continues to change as it ages, and why clarification is important
            to make it look appealing.
          </p>
          <p style={{ textIndent: "10px" }}>
            Another part of the lesson I found exciting was teaching the
            students how to determine alcohol content using basic calculations.
            It felt like a good blend of science and everyday knowledge, and I
            loved seeing the students get curious about it. Although i made it
            as simpler part and didn’t really made a deep down dive for it is
            too advance for highschool students.
          </p>
        </div>
        <img src={img4} alt="Loading..." width={"200px"} />
      </div>
      <p style={{ textIndent: "10px" }}>
        Even though I was nervous, especially at the start, I felt more
        confident as the lesson went on. The students were engaged, they
        participated well during the group activity, and their responses during
        the quiz showed me that they were really learning. That made me feel
        proud not just of the content I delivered, but of how I managed the
        whole experience from start to finish.
      </p>
      <p style={{ fontWeight: "bold", marginTop: "20px", textIndent: "10px" }}>
        By the end of it, I felt relieved but also really fulfilled. It wasn’t
        perfect, but it was real. I learned a lot, not just about fermentation,
        but also about myself as a future teacher.
      </p>
    </div>
  );
}

export default Documentation;
