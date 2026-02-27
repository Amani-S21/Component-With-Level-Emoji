import Card from "./Card";
import Description from "./Description";
import "./../index.css"; // Correction: index.css au lieu de index
import SkillBadge from "./SkillBadge"; // Renommé pour clarté

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Card />
      <Description />
      <div className="skills">
        {skills.map((item, index) => (
          <SkillBadge key={index} skill={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
