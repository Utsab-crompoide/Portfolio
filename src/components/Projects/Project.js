import React, { useState } from 'react'
import './Project.css'
import RB from '../../assets/RBP.png'
import PZ from '../../assets/PZ.png'
import AS from '../../assets/aSolution.png'
import LX from '../../assets/LUXE.png'
import DV from '../../assets/divine.png'

function Project() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const projectData = [
        {
            title: 'RenderBooking',
            description: 'Developed the Render Booking mobile app using React Native and Expo, working alongside a dedicated UI/UX designer and a backend team. The app connects travelers in Nepal with vehicle owners, offering rentals for cars, SUVs, and other vehicle types. It also supports bookings for tours, activities, and business-focused rental services. My primary responsibility was implementing the entire frontend application — translating the designs into a responsive, smooth, and reliable mobile experience. I built all core user-facing features, including authentication, vehicle browsing and filtering, booking flows, owner management screens, and integration with secure payment and notification systems. The app communicates with a backend powered by PHP Laravel, and I handled the API integration layer within the mobile app, ensuring stable data flows, error handling, and a consistent user experience.',
            imageUrl: RB,
            projectUrl: 'http://renderbooking.com'
        },
        {
            title: 'Playerz',
            description: 'Developed a mobile application using React Native (Expo) for U.S. college basketball players, designed as a social-style platform where users could share text or image posts, upload match results, like and comment on content, and report or flag posts when necessary. The app supported multiple role types—such as general users, players, teams, and corporate accounts—each with different access levels and capabilities within the platform. On the backend, I worked extensively with AWS services, implementing authentication and role management through Cognito, handling media storage in S3, building serverless logic with Lambda, and improving performance with CloudFront. I also used AWS Amplify to connect the frontend and backend smoothly, ensuring a secure, scalable, and efficient experience for all user types.',
            imageUrl: PZ,
            projectUrl: 'http://playerzapp.com'
        },
        {
            title: 'IENSURE',
            description: 'I worked on a .NET-based SaaS platform built for insurance companies, aimed at simplifying and automating many of their routine operational tasks. The system offered features for managing customer information, processing claims, generating reports, and handling various administrative workflows, making it easier for companies to stay organized and efficient. My role included building and maintaining APIs that powered the platform’s core functionality, ensuring they were reliable, secure, and scalable for multiple clients. I also created and updated technical documentation to support both internal teams and external partners, helping ensure smooth integration and clear understanding of the platform’s capabilities. Additionally, I contributed to enhancing existing modules, improving performance, and supporting overall product development.',
            imageUrl: AS,
            projectUrl: 'http://project-link.com'
        },
        {
            title: 'Luxe Little Baby Wear',
            description: 'Worked on a small e-commerce project built with WordPress for a clothing store, where I helped set up the storefront, customize themes, configure product listings, and optimize the overall shopping experience. I also handled basic plugin setup, checkout flow improvements, and general site maintenance to ensure the store ran smoothly.',
            imageUrl: LX,
            projectUrl: 'https://luxelittlebabywear.com.au/'
        },
        {
            title: 'Divine Collection',
            description: 'Worked on a small e-commerce project built with WordPress for a clothing store, where I helped set up the storefront, customize themes, configure product listings, and optimize the overall shopping experience. I also handled basic plugin setup, checkout flow improvements, and general site maintenance to ensure the store ran smoothly.',
            imageUrl: DV,
            projectUrl: 'https://divinecollection.com.au/'
        }
    ]

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='project'>
            <h1>Projects</h1>
            <div className='projectContent'>
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className={`projectItem ${expandedIndex === index ? 'expanded' : 'collapsed'}`}
                    >
                        <div className='projImageContainer'>
                            <img className='projImage' src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className='projDesc'>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <button
                                className='seeMoreBtn'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleExpand(index);
                                }}
                            >
                                {expandedIndex === index ? 'See Less' : 'See More'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project