
import { Link } from 'react-router-dom'
import { experienceData1 } from '../datas/experienceData'
import { experienceData2 } from '../datas/experienceData'

const Bio = () => {
    return (
        <>
            <div className="md:py-16 py-6 relative z-20">
                <div className="mx-auto px-4 md:px-12 xl:max-w-6xl xl:px-0 relative z-10">
                    <div className="relative md:text-start text-center" data-aos="fade-up" data-aos-duration="200" data-aos-delay="100">
                        <h2 className="xl:text-[55px] text-4xl font-bold text-[#1F2937] dark:text-white">Biography 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 md:leading-[79px] leading-[50px]">Experiences</span>
                        </h2>
                        <p className="mt-1 text-[#1F2937] dark:text-white md:w-4/6 w-full md:text-[19px] text-[17px] font-[300] tracking-wide leading-[27px]">
                            My regular activity on official and freelancing marketplaces 
                        </p>
                    </div>
                    <div className="md:mt-8 mt-4 relative z-10">
                        <div className="md:gap-3 gap-4 grid md:grid-cols-2 grid-cols-1">
                            <div className="w-full" data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                                <div className="p-3 relative overflow-hidden bg-white/[0.2] border border-white/[0.15] dark:bg-white/[.07] dark:border-0 md:rounded-[45px] rounded-[40px]">
                                    <span className="my-3 ps-5 flex md:text-[24px] text-[21px] tracking-tight font-[600] text-[#1F2937] dark:text-white">Full Time (Official)</span>
                                    <div className="tracking-normal flex flex-col gap-2">
                                        {experienceData1.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="group p-5 overflow-hidden relative bg-white/[0.2] border border-white/[0.15] dark:bg-white/[.05] dark:border-0 hover:bg-white/[0.3] dark:hover:bg-white/[0.1] transition-all duration-500 md:rounded-[32px] rounded-[28px]" data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                                                <div className="flex gap-2">
                                                    <div className="relative flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-white">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <div className='pe-10'>
                                                        <div className="">
                                                            <span className="block w-max md:text-[18px] text-[15px] font-[600] text-[#1F2937] dark:text-white">{expo.company}</span>
                                                            <div className="text-[12px] font-[400] text-[#1F2937]/[0.9] dark:text-white/[.75] tracking-[0.5px] leading-[20px]">{expo.location}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-3 pt-3 flex md:flex-row flex-col gap-3 md:items-center items-start md:justify-between justify-start border-t border-[#1F2937]/[.1] dark:border-t-white/[.07]">
                                                    <div className="ms-1 flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                                                            <g className='dark:stroke-white' fill="none" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                                                <path d="M8.308 21h7.384c3.71 0 4.375-1.45 4.569-3.213l.692-7.2c.25-2.196-.397-3.987-4.338-3.987h-9.23c-3.941 0-4.587 1.791-4.338 3.987l.692 7.2C3.933 19.55 4.598 21 8.308 21m0-14.4v-.72c0-1.593 0-2.88 2.954-2.88h1.476c2.954 0 2.954 1.287 2.954 2.88v.72"/>
                                                                <path d="M9.812 13.331A15.26 15.26 0 0 1 3.234 11m11 2.331A15.26 15.26 0 0 0 20.812 11M14 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/>
                                                            </g>
                                                        </svg>
                                                        <p className="ms-1 mt-1 md:text-[13px] text-[12px] text-[#1F2937] dark:text-white font-[500] tracking-wide">{expo.position}</p>
                                                    </div>
                                                    <dd className="table px-4 py-[3px] w-auto rounded-[30px] bg-white/[0.35] dark:bg-white/[0.1] border dark:border-0 border-white/[.25] text-[12px] text-[#1F2937] dark:text-white font-[500] tracking-wide">
                                                        <time>{expo.startDate}</time>
                                                        <span>—</span>
                                                        <time>{expo.endDate}</time>
                                                    </dd>
                                                </div>
                                                <div className="md:h-14 md:w-14 h-10 w-10 absolute right-[5px] top-[5px] rounded-full border border-[#1f2937]/[0.18] dark:bg-white/[.1] dark:border-0 group-hover:bg-white dark:group-hover:bg-white/[.3] group-hover:border-white flex items-center justify-center transition-all duration-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ease-in-out duration-500'>
                                                        <path className="dark:fill-white" fill="#1F2937" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                        <path className="dark:fill-white" fill="#1F2937" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                                    </svg>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                                <div className="p-3 relative overflow-hidden bg-white/[0.2] border border-white/[0.15] dark:bg-white/[.07] dark:border-0 md:rounded-[45px] rounded-[40px]">
                                    <span className="my-3 ps-5 flex md:text-[24px] text-[21px] tracking-tight font-[600] text-[#1F2937] dark:text-white">Freelance (Online)</span>
                                    <div className="tracking-normal flex flex-col gap-2">
                                        {experienceData2.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="group p-5 overflow-hidden relative bg-white/[0.2] border border-white/[0.15] dark:bg-white/[.05] dark:border-0 hover:bg-white/[0.3] dark:hover:bg-white/[0.1] transition-all duration-500 md:rounded-[32px] rounded-[28px]" data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                                                <div className="flex gap-2">
                                                    <div className="relative flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-white">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <div className='pe-10'>
                                                        <div className="">
                                                            <span className="block w-max md:text-[18px] text-[15px] font-[600] text-[#1F2937] dark:text-white">{expo.company}</span>
                                                            <div className="text-[12px] font-[400] text-[#1F2937]/[0.9] dark:text-white/[.75] tracking-[0.5px] leading-[20px]">{expo.topics}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-3 pt-3 flex md:flex-row flex-col gap-3 md:items-center items-start md:justify-between justify-start border-t border-[#1F2937]/[.1] dark:border-t-white/[.07]">
                                                    <div className="ms-1 flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                                                            <g className='dark:stroke-white' fill="none" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                                                <path d="M8.308 21h7.384c3.71 0 4.375-1.45 4.569-3.213l.692-7.2c.25-2.196-.397-3.987-4.338-3.987h-9.23c-3.941 0-4.587 1.791-4.338 3.987l.692 7.2C3.933 19.55 4.598 21 8.308 21m0-14.4v-.72c0-1.593 0-2.88 2.954-2.88h1.476c2.954 0 2.954 1.287 2.954 2.88v.72"/>
                                                                <path d="M9.812 13.331A15.26 15.26 0 0 1 3.234 11m11 2.331A15.26 15.26 0 0 0 20.812 11M14 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/>
                                                            </g>
                                                        </svg>
                                                        <p className="ms-1 mt-1 md:text-[13px] text-[12px] text-[#1F2937] dark:text-white font-[500] tracking-wide">{expo.position}</p>
                                                    </div>
                                                    <dd className="table px-4 py-[3px] w-auto rounded-[30px] bg-white/[0.35] dark:bg-white/[0.1] border dark:border-0 border-white/[.25] text-[12px] text-[#1F2937] dark:text-white font-[500] tracking-wide">
                                                        <time>{expo.startDate}</time>
                                                        <span>—</span>
                                                        <time>{expo.endDate}</time>
                                                    </dd>
                                                </div>
                                                <div className="md:h-14 md:w-14 h-10 w-10 absolute right-[5px] top-[5px] rounded-full border border-[#1f2937]/[0.18] dark:bg-white/[.1] dark:border-0 group-hover:bg-white dark:group-hover:bg-white/[.3] group-hover:border-white flex items-center justify-center transition-all duration-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ease-in-out duration-500'>
                                                        <path className="dark:fill-white" fill="#1F2937" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                        <path className="dark:fill-white" fill="#1F2937" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                                    </svg>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bio