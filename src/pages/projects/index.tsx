import { memo } from 'react'
import { projectData } from '../../constants/projectData'


const Projects = () => {
    return (
        <div className='container'>
            <h1 className='text-4xl mb-5 font-semibold'>My Projects</h1>
            <div className=' flex gap-6 flex-wrap'>
                {
                    projectData?.map((project) => (
                        <div className='flex flex-col gap-3 bg-gray-300 w-[500px] rounded-[4px]'>
                            <img className='h-[300px]' src={project.img} alt="" />
                            <p className='px-3 text-[17px] font-semibold'>{project.title}</p>
                            <div className='flex justify-between p-3'>
                                <a target='_blank' href={project.codeLink} className='bg-slate-600 text-white p-2 rounded-[4px] cursor-pointer'>Check code</a>
                                <a target='_blank' href={project.demoLink} className='bg-slate-600 text-white p-2 rounded-[4px] cursor-pointer'>View demo</a>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='flex items-center  justify-center mt-4'>
                <a target='_blank' href="https://github.com/Barchinoy0803?tab=repositories" className='bg-slate-500 text-white p-2 rounded-[4px] cursor-pointer my-5'>View more projects</a>
            </div>
        </div>
    )
}

export default memo(Projects)