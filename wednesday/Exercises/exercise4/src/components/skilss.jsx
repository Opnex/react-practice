import "./skills.css";

function Skills() {
    const skills =  ["HTML", "CSS", "Javascript", "React", "Python"];

    return (
        <section className="skilss">
            <h2>My Language Skills</h2>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    )
}

export default Skills