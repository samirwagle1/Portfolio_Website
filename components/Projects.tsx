import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Project from './Project'
export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {projectsData.map( (project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}/>

                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

// type ProjectProps = (typeof projectsData)[number]

// function Project ({
//     title,
//     description,
//     tags,
//     imageUrl,
//     }: ProjectProps) {

//     return (
//         <section className='bg-gray-100 max-2-[42rem] border border-black/5 overflow hidden sm:pr-8 relative'>
//             <h3 className='text-2xl font-semibold'>{title}</h3>
//             <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
//             {/* <ul className='flex flex-wrap mt-4 gap-2'>
//                 {tags.map((tag, index) => (
//                     <li
//                         className='bg-black/0.7 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
//                         key={index}>{tag} </li>
//                 ))}
//             </ul> */}
//             <Image src={imageUrl} alt='Project I worked on' quality={95} className='absolute top-8 -right-40'/>
//         </section>
    
//     )
// }