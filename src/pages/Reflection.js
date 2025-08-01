import React from "react";

const reflections = [
  {
    week: 5,
    names: ["Cortez", "Magno", "Estipular", "Federio", "Dosado"],
    statement:
      "This week’s online demonstration went pretty well overall. Miss Cortez did her best to teach despite the signal not being very clear, and she was able to deliver her lesson on Maintaining Tools, Equipment, and Paraphernalia. Sir Magno was alright too he was informative and explained things well. I really liked Sir Estipular’s teaching demo; his lesson on Practicing Occupational Health and Safety Procedures was solid, and I paid close attention. Mam Federio was also good I enjoyed her lecture. Madam Dosado was okay too; I liked the way she explained her lesson.",
  },
  {
    week: 6,
    names: [],
    statement: "Cancelled",
  },
  {
    week: 7,
    names: ["Maligaya", "Elumbra", "Narido", "Palahang", "Camacho"],
    statement:
      "This week’s face-to-face demonstration went pretty well overall. First was Mam Maligaya her approach was nice, but there were too many activities, and I’m not sure grade 8 students would fully get it. She also almost fainted, but it was still okay. Mam Elumbra was pretty good at teaching, and Mam Narido’s lecture was really informative. Sir Palahang’s demo was the most fun his activities were entertaining, and the rewards he gave were hilarious. Sir Camacho’s lesson on Utilizing Appropriate Kitchen Tools, Equipment, and Paraphernalia was alright too. The execution was standard, but still okay.",
  },
  {
    week: 8,
    names: [],
    statement: "Cancelled",
  },
  {
    week: 9,
    names: ["Legaspi", "Villaluna", "Dulluhan", "Checa", "Tenoria", "Ortega"],
    statement:
      "This week was the most impactful for me since it was my turn to do the demo but I’ll talk more about that on the next page. I really liked Miss Villaluna’s demonstration, especially since her topic was the continuation of mine. Miss Dulluhan did a good job too, and I enjoyed the fun ice breaker she included. Mister Tenoria’s lesson on Housekeeping: Set Up Equipment and Trolleys was executed fairly well. But the standout for me was Miss Ortega she’s improved a lot, and I really liked her teaching style. Overall, I think my fellow demo-mates and I did a fantastic job this week.",
  },
  {
    week: 10,
    names: ["Guban", "PereÑa", "De Castro", "Selma"],
    statement:
      "This final week of demos wrapped things up well. Mr. Guban showed a lot of improvement compared to his earlier demo in the other program he seemed more confident and prepared. Sir Pereña delivered his topic smoothly; his approach was clear and engaging. Sir De Castro’s lesson on Cookery: Carry Out Measurements and Calculations was decent, though it could have used a bit more energy. Selma, though, was the standout his performance was so strong and well-executed, it honestly made me feel a little insecure, but also inspired.",
  },
];

function Reflection() {
  return (
    <ul id="Reflection" className="w-100 p-3">
      {reflections.map((reflection, idx) => (
        <li className="none-bullet p-2" key={idx}>
          <h2>Week {reflection.week}</h2>
          <div className="w-inherit flex-row">
            {reflection.names.length !== 0 ? (
              <ol className="w-fit flex-column bg-card p-4 m-3">
                {reflection.names.map((name, indx) => (
                  <li key={indx} style={{marginLeft: "10px", textWrap: "nowrap"}}>
                    <h3>{name}</h3>
                  </li>
                ))}
              </ol>
            ) : (
              <br />
            )}
            <div className="w-100 flex-center p-3">
              <p>
                <i>"{reflection.statement}"</i>
              </p>
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default Reflection;
