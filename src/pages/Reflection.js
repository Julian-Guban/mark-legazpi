import React from "react";

const reflections = [
  {
    week: 5,
    names: ["Cortez", "Magno", "Estipular", "Federio", "Dosado"],
    statement: `This week’s online demonstration went pretty well overall, and it taught me a lot about the importance of preparation and staying focused, especially in a virtual setting. Miss Cortez did her best to deliver her lesson on Maintaining Tools, Equipment, and Paraphernalia despite having signal issues. I admire how she kept going and tried to stay composed even when the connection wasn’t the best. That in itself showed me how preparation can help you push through technical difficulties. \n Sir Magno’s demo was okay, he was informative and explained his topic clearly, which made it easy to follow along. I appreciated how he kept things straightforward. I also really liked Sir Estipular’s teaching demo. His lesson on Practicing Occupational Health and Safety Procedures was very solid, and I found myself paying close attention throughout. He had good pacing, and his points were easy to absorb. \n Mam Federio did well too, I genuinely enjoyed her lecture. Her tone and flow were pleasant, and she made the lesson feel light but informative. Lastly, Madam Dosado was pretty okay as well. I liked her teaching style; it was clear and steady, and she had a calm way of explaining her lesson that made it easier to understand. \n Overall, this week reminded me that even with unexpected challenges, being prepared and staying focused can make a big difference. Watching how each teacher handled their time and topic gave me ideas for improving my own teaching strategies in the future.`,
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
      "This week’s face-to-face demonstration went pretty well overall. First up was Mam Maligaya, her approach was creative and energetic, and I could see that she put a lot of effort into her demo. However, there were just too many activities packed into one session, and I don’t think Grade 8 students would easily grasp everything. It felt a bit too fast paced and overwhelming for their level. She also almost fainted during her demo, which was a bit concerning, but she managed to keep going, and I admire her for that. \n Mam Elumbra did a good job in delivering her lesson. She was calm and clear, and I appreciated her ability to keep the class engaged without overcomplicating things. Mam Narido’s lecture stood out as well it was very informative and well organized. I learned a lot from her, especially how she explained key points in a way that was easy to follow. \n Sir Palahang’s demo was the most entertaining of the week. His activities were not only fun but also meaningful, and the rewards he gave out were so funny and unexpected that they kept the energy high in the classroom. It was a great example of how humor and engagement can go hand-in-hand with learning. \n Sir Camacho’s lesson on Utilizing Appropriate Kitchen Tools, Equipment, and Paraphernalia was okay too. The execution was pretty standard, but he managed to get the message across. It reminded me that not every demo needs to be flashy sometimes simplicity works just fine. \n Overall, this week taught me an important lesson: that adjusting your teaching approach based on the grade level you're handling is crucial. There’s nothing wrong with simplifying lessons if it helps your students understand better. In fact, making a lesson more digestible and age-appropriate can make it even more effective.",
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
      "This week was the most impactful for me since it was finally my turn to do the demo but I’ll talk more about that on the next page. Watching my fellow demo-mates while also presenting my own lesson made me realize how much I’ve grown, but also how much more I still want to improve. I really liked Miss Villaluna’s demonstration, especially because her topic was a direct continuation of mine. It felt connected, and she delivered it smoothly, which made me reflect on how important flow and coordination are when teaching. \n Miss Dulluhan also did a good job, her ice breaker was simple but effective, and it helped lighten the mood right away. I realized how small things like that can really set the tone for a good lesson. Mister Tenoria’s demo on Housekeeping: Set Up Equipment and Trolleys was fairly well executed. He had good control of his content, and the way he presented was clear and organized. \n But the standout for me this week was definitely Miss Ortega. She’s improved a lot since her previous demo, and I really admired her confidence and teaching style. She had great energy and explained things in a way that felt natural and easy to understand. \n Overall, I think all of us did a fantastic job this week, and it made me feel proud to be part of this group. At the same time, seeing my peers perform so well motivated me to keep improving whether it's refining how I deliver my lessons, strengthening my presence in the classroom, or finding better ways to engage students. This week reminded me that teaching is a continuous journey of learning and growth.",
  },
  {
    week: 10,
    names: ["Guban", "PereÑa", "De Castro", "Selma"],
    statement:
      "This final week of demos wrapped everything up nicely and gave me a lot to reflect on. Mr. Guban showed a huge improvement compared to his earlier demo in the other program, he seemed more confident and well-prepared this time, which was great to see. Sir Pereña delivered his topic smoothly; his teaching approach was clear, engaging, and easy to follow. Sir De Castro’s lesson on Cookery: Carry Out Measurements and Calculations was decent, though I felt it could have used a bit more energy and interaction to fully capture the class's attention. \n The real standout for me this week was Selma. His performance was incredibly strong and well-executed, it felt polished, confident, and well thought out. Honestly, it made me feel a little insecure at first, but also inspired to push myself harder and raise my standards. \n From this final round of practice demos, I’ve learned that every detail matters from preparation to pacing, energy, and engagement. It reminded me that feedback and observation aren’t just for evaluation; they’re opportunities to grow. I plan to take everything I’ve learned from watching my peers and apply it to my actual final demo, not just to do well, but to truly improve and deliver a lesson I can be proud of.",
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
                  <li
                    key={indx}
                    style={{ marginLeft: "10px", textWrap: "nowrap" }}
                  >
                    <h3>{name}</h3>
                  </li>
                ))}
              </ol>
            ) : (
              <br />
            )}
            <div className="w-fit flex-center flex-column p-3 statement">
              {reflection.statement.split("\n").map((line, index) => (
                <span key={index}>
                  <p>
                    <i>{line}</i>
                  </p>
                  <br />
                </span>
              ))}
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default Reflection;
