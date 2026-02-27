function SkillBadge({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      {skill.skill}
      {skill.level === "advanced" && "👌"}
      {skill.level === "intermediate" && "😜"}
      {skill.level === "beginner" && "😃"}
    </div>
  );
}

export default SkillBadge;
