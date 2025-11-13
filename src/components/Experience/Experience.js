import React from 'react'
import './Experience.css'
import Arhant from '../../assets/aSolution.png'
import CFLogo from '../../assets/cf.jpeg'
import BrainDigit from '../../assets/braindigit.png'
import CStack from '../../assets/cstack.png'
import Rb from '../../assets/rb.png'

function Experience() {
    const experiences = [
        {
            title: 'Software Developer at RenderBooking',
            logo: Rb,
            style: { width: 120, height: 30, backgroundColor: 'white' },
            duration: 'Aug 2024 - Present',
            details: [
                'Developed and maintained web applications using React and Node.js.',
                'Collaborated with cross-functional teams to define, design, and ship new features.',
                'Optimized applications for maximum speed and scalability.',
            ],
        },
        {
            title: 'Software Developer at ConvergeStack',
            logo: CStack,
            style: { width: 120, height: 30 },
            duration: 'Dec 2022 - Aug 2024',
            details: [
                'Developed and maintained web applications using React and Node.js.',
                'Collaborated with cross-functional teams to define, design, and ship new features.',
                'Optimized applications for maximum speed and scalability.',
            ],
        },
        {
            title: 'Dot Net Developer at Arhant Solutions',
            logo: Arhant,
            style: { width: 80, height: 40 },
            duration: 'Dec 2021 - Dec 2022',
            details: [
                'Worked as a .NET developer, responsible for designing, developing, and maintaining web applications using .NET technologies. Hands-on experience in full software development life cycle, including requirements gathering, coding, testing, and deployment.',
                'Collaborated with cross-functional teams to gather requirements and implement solutions that met business needs.',
                'Participated in code reviews and contributed to improving development processes and best practices.',
            ],
        },
        {
            title: 'Dot Net Internship at Braindigit',
            logo: BrainDigit,
            style: { width: 100, height: 40, backgroundColor: 'white' },
            duration: 'Jun 2021 - Aug 2021',
            details: [
                'As an intern at Braindigit, I was responsible for assisting in the development of web applications using .NET technologies. I worked closely with senior developers to learn best practices and contribute to ongoing projects.',
                'Gained hands-on experience in coding, debugging, and testing applications, while also enhancing my understanding of software development life cycles.',
            ],
        },
        {
            title: 'Data Analyst at CloudFactory',
            logo: CFLogo,
            style: { height: 60 },
            duration: 'Mar 2018 - June 2021',
            details: [
                'As an elite worker of cloudfactory I was responsible for data analysis and visualization. I used the internal tools of cloudfactory to process and analyze large image datasets which is then used for machine learning.',
                'Collaborated with cross-functional teams to ensure data accuracy and integrity. Maintained high-quality standards while working under tight deadlines.',
            ],
        },
    ];
    return (
        <div className='experience'>
            <h1>Work Experience</h1>
            <div className='experienceContent'>
                {experiences.map((exp, index) => (
                    <div key={index} className='experienceItem'>
                        <div style={{ width: '10%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                            {exp.logo && <img src={exp.logo} alt={exp.title} style={exp.style} />}
                        </div>
                        <div className='expText'>
                            <div className='experienceTitle'>
                                <h3>{exp.title}</h3>
                                <p>{exp.duration}</p>
                            </div>
                            <p>
                                {exp.details.map((detail, idx) => (
                                    <p key={idx} style={{ lineHeight: 1.2 }}>{detail}</p>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Experience