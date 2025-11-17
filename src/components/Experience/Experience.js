import React from 'react';
import './Experience.css';
import Arhant from '../../assets/aSolution.png';
import CFLogo from '../../assets/cf.jpeg';
import BrainDigit from '../../assets/braindigit.png';
import CStack from '../../assets/cstack.png';
import Rb from '../../assets/rb.png';

function Experience() {
    const experiences = [
        {
            title: 'Software Developer at RenderBooking',
            logo: Rb,
            style: { width: 120, height: 30, backgroundColor: 'white' },
            duration: 'Aug 2024 - Present',
            details: [
                'Developed a complete React Native mobile application from scratch for both iOS and Android, handling everything from project setup to deployment.',
                'Published and maintained the applications on the Apple App Store and Google Play Store, managing updates and user feedback.',
                'Integrated multiple payment gateways, ensuring secure and seamless transactions across platforms.',
                'Also contributed to web development using React.js, building and enhancing web features for better user experience.',
                'Worked on several WordPress projects, customizing themes, improving performance, and handling plugin integrations.'
            ],
        },
        {
            title: 'Software Developer at ConvergeStack',
            logo: CStack,
            style: { width: 120, height: 30 },
            duration: 'Dec 2022 - Aug 2024',
            details: [
                'Worked as a Java developer for short time, gaining hands-on experience in backend development and RESTful API design.',
                'Learned and implemented AWS Cloud services including Amplify, Cognito, Lambda, CloudFront, and S3 to build and manage scalable, secure backend infrastructure for a mobile application.',
                'Developed and maintained React Native mobile applications for both iOS and Android, integrating backend services and ensuring smooth user experiences.',
                'Published and maintained the applications on the Apple App Store and Google Play Store, managing updates and user feedback.',
                'Explored and worked with modern web technologies like React.js and Vue.js for building responsive and dynamic front-end interfaces.',
                'Collaborated with cross-functional teams to deliver cloud-based solutions, improve app performance, and streamline deployment workflows.'
            ],
        },
        {
            title: 'Dot Net Developer at Arhant Solutions',
            logo: Arhant,
            style: { width: 80, height: 40 },
            duration: 'Dec 2021 - Dec 2022',
            details: [
                'Designed, developed, tested, and maintained RESTful APIs for an insurance-related software solution.',
                'Utilized C#, ASP.NET, and SQL Server Management Studio (SSMS) for backend development and database management.',
                'Deployed applications across multiple servers, ensuring stable and efficient performance in production environments.',
                'Created comprehensive technical documentation covering API specifications, deployment steps, and maintenance procedures.',
                'Gained hands-on experience with jQuery for front-end interactivity and seamless client-server communication.',
                'Collaborated with teams to deliver scalable, secure, and well-documented software components.'
            ],
        },
        {
            title: 'Dot Net Internship at Braindigit',
            logo: BrainDigit,
            style: { width: 100, height: 40, backgroundColor: 'white' },
            duration: 'Jun 2021 - Aug 2021',
            details: [
                'Gained hands-on experience working on a real-world .NET project, contributing to both backend and API development.',
                'Designed, implemented, and tested RESTful APIs to support application functionality and data exchange.',
                'Learned and applied key security practices, including authentication, authorization, and data protection mechanisms.',
                'Collaborated with senior developers to understand full-stack development workflows and industry-standard best practices.'
            ],
        },
        {
            title: 'Data Annotator at CloudFactory',
            logo: CFLogo,
            style: { height: 60 },
            duration: 'Mar 2018 - June 2021',
            details: [
                'Responsible for data annotation and completeness using internal tools.',
                'Worked on preparing high-quality datasets for computer vision model training under the Neurala project.',
                'Performed detailed image annotation using internal labeling tools to generate structured training data for neural networks.',
                'Ensured accuracy, consistency, and completeness of annotated data to improve model performance and reliability.'
            ],
        },
    ];

    return (
        <div className="experience">
            <h1>Work Experience</h1>
            <div className="experienceContent">
                {experiences.map((exp, index) => (
                    <div key={index} className="experienceItem">
                        <div className="experienceLogo">
                            <img src={exp.logo} alt={exp.title} style={exp.style} />
                        </div>
                        <div className="experienceDetails">
                            <div className="experienceHeader">
                                <h3>{exp.title}</h3>
                                <span>{exp.duration}</span>
                            </div>
                            <div className="experienceText">
                                {exp.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
