import React from 'react'
import './Skills.css'
function Skills() {

    const skills = [{
        Backend: [
            { name: 'Dot Net', logo: 'Advanced' },
            { name: 'Java', logo: 'Advanced' },
            { name: 'Node', logo: 'Intermediate' },
        ]
    },
    {
        Frontend: [
            { name: 'React', logo: 'Advanced' },
            { name: 'Vue', logo: 'Advanced' },
            { name: 'JavaScript', logo: 'Intermediate' },
        ]
    },
    {
        Database: [
            { name: 'MySQL', logo: 'Advanced' },
            { name: 'Postgres', logo: 'Advanced' },
            { name: 'DynamoDB', logo: 'Intermediate' },
        ]
    },
    {
        ToolsAndPlatforms: [
            { name: 'ClickUp', logo: 'Advanced' },
            { name: 'Jira', logo: 'Advanced' },
            { name: 'Git/Github', logo: 'Intermediate' },
            { name: 'VS Code', logo: 'Intermediate' },
            { name: 'Figma', logo: 'Intermediate' },
            { name: 'IntelliJ', logo: 'Intermediate' },
        ]
    },
    {
        CloudServices: [
            { name: 'AWS', logo: 'Intermediate' },
            { name: 'Firebase', logo: 'Intermediate' },
            { name: 'Cloudflare', logo: 'Intermediate' },
            { name: 'Supabase', logo: 'Intermediate' },
        ]
    }
    ];

    return (
        <div className='skills'>
            <h1>Technical Skills</h1>
            <div className='skillsContent'>
                {skills.map((skillCategory, index) => {
                    const categoryName = Object.keys(skillCategory)[0];
                    return (
                        <div key={index} className="skillsItem">
                            <p>{categoryName === 'ToolsAndPlatforms' ? 'Tools & Platforms' : categoryName === 'CloudServices' ? 'Cloud Services' : categoryName}</p>
                            <div className='skillsList'>
                                {skillCategory[categoryName].map((skill, skillIndex) => (
                                    <div key={skillIndex} className='skill'>
                                        <span className='skillName'>{skill.name}</span>
                                        {/* <span className='skillLogo'>{skill.logo}</span> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default Skills