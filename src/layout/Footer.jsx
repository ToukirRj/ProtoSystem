
import { Link } from 'react-router-dom'
import socialLinksData from '../datas/socialLinksData';
import PropTypes from 'prop-types';
import Chat from '/img/chat.webp'

const Footer = ({ onToggleOffCanvas }) => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="md:mt-12 mt-6">
                <div className="md:mb-20 mb-10 relative mx-auto max-w-full lg:max-w-6xl md:px-0 px-4">
                    <div className='text-center md:py-12 py-7 md:px-8 px-5 w-full bg-white/[0.18] border border-white/[.15] rounded-[55px] overflow-hidden' data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                        <div className='grid md:grid-cols-5 grid-cols-1 md:place-items-center place-items-inherit'>
                            <div className='md:col-span-2 col-span-1' data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                                <img src={Chat} alt='chat' className='w-auto max-w-full md:h-[280px] h-auto mx-auto md:mb-0 mb-6'/>
                            </div>
                            <div className='md:col-span-3 col-span-1'>
                                <div className='relative w-full text-center' data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                                    <span className="bg-[#1F2937] text-[#fff] text-[13px] font-[400] tracking-wider px-4 py-1 rounded-full table md:mx-0 mx-auto">Quick Project Contract</span>
                                    <h2 className="my-3 md:text-[45px] text-[21px] md:text-start text-center md:font-bold font-[700] md:leading-[52px] leading-[30px] text-gray-800 w-full max-w-5xl mx-auto">
                                        One step to connect with me from everywhere
                                    </h2>
                                    <p className='text-[15px] leading-[27px] font-[400] tracking-wide text-[#1F2937] md:text-start text-center mb-[25px]'>
                                        Have a project on mind? And, Want it visible with a distinct design? Just inform me, I&apos;m interested in how to serve best and aim to be your reliable ideal person.
                                    </p>
                                    <div className="md:mt-5 mt-3 flex md:justify-start md:flex-row flex-col items-center justify-center md:space-x-3 space-x-0 md:space-y-0 space-y-3">
                                        <Link className="group h-[46px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-4 pe-[12px] bg-[#20bd62] hover:bg-[#299c59] ease-in-out duration-500"
                                            onClick={onToggleOffCanvas}>
                                            <span className="w-[38px] h-[38px] absolute -z-[1] left-[5px] bg-[#2b6e58] group-hover:bg-[#235847] rounded-full btn-left ease-in-out duration-500"></span>
                                            <span className="text-[#fff] text-[14px] font-[400] tracking-[0.5px]">Quick Hire</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ms-[12px]'>
                                                <path fill="#fff" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                <path fill="#fff" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                            </svg>
                                        </Link> 
                                        <Link className="group h-[46px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-4 pe-[12px] bg-[#20bd62] hover:bg-[#299c59] ease-in-out duration-500" to="https://wa.me/8801753778070" target="_blank">
                                            <span className="w-[38px] h-[38px] absolute -z-[1] left-[5px] bg-[#2b6e58] group-hover:bg-[#235847] rounded-full btn-left ease-in-out duration-500"></span>
                                            <span className="text-[#fff] text-[14px] font-[400] tracking-[0.5px]">WhatsApp</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ms-[12px]'>
                                                <path fill="#fff" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                <path fill="#fff" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                            </svg>
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:py-16 py-12 bg-white/[0.25] border border-t-white/[0.15]'>
                    <div className="relative mx-auto px-4 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
                        <div className='flex flex-col items-center justify-center' data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                            <h1 className="md:text-[21px] text-[19px] font-semibold tracking-tight text-[#1f2937] mb-2">Get Me Connect Now on</h1>
                            <div className="flex items-center justify-center gap-2 mx-auto">
                                {socialLinksData.map(link => (
                                    <Link key={link.id} to={link.url} target={link.target}
                                        className="px-2 w-auto h-[58px] flex items-center justify-center bg-white/[0.35] hover:bg-white/[0.75] rounded-[70px] hover:shadow-lg transition-all border border-white/[0.25]">
                                        <img className="w-6 h-6 rounded-full ms-3 me-1" src={link.imageSrc} alt={`${link.platform} logo`} />
                                        <p className="md:text-[14px] text-[12px] font-[500] text-[#1f2937] tracking-[.45px] me-3">{link.platform}</p>
                                        <span className='h-11 w-11 flex items-center justify-center bg-transparent rounded-full border border-[#1f2937]/[0.13]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 1024 1024" className='relative'>
                                                <path fill="#1f2937" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                <path fill="#1f2937" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                            </svg>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="mt-5 mx-auto max-w-6xl w-full text-[#1f2937] tracking-normal text-[12px] font-[500] text-center md:mb-0 mb-6">
                            &copy; <b>Toukir Rahman</b> {currentYear} - Present. All right reserved
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

Footer.propTypes = {
    onToggleOffCanvas: PropTypes.func
};

export default Footer