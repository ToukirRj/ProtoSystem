import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <div className="md:pt-20 pt-6 md:pb-16 pb-6 relative z-20">
                <div className="mx-auto w-full max-w-6xl">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:px-0 px-4'>
                        <div className="text-end" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                            <div className='md:w-[65%] w-full mx-auto md:mt-[50px] mt-0 md:text-start text-center'>
                                <h2 className="md:text-[69px] text-[47px] font-bold text-[#1F2937] dark:text-white md:leading-[80px] leading-[55px]">My 
                                    <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3">Eyes</span> <br/>to Work
                                </h2>
                                <p className="mx-auto max-w-full mt-2 text-[#1F2937] dark:text-white w-full md:text-[23px] text-[17px] font-[300] md:leading-[37px] leading-[29px] md:tracking-normal tracking-wide">
                                    Depend on customer satisfaction, Here are the services I provide
                                </p>
                            </div>
                        </div>
                        {serviceData.map(service => (
                            <div key={service.id} className="each-service md:rounded-[64px] rounded-[44px] overflow-hidden bg-white/[.2] border border-white/[.15] dark:bg-white/[.05] dark:border-0" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                <div className='w-full relative'>
                                    <div className='absolute right-2 top-2 md:h-[110px] h-[90px] md:w-[110px] w-[90px] rounded-full bg-white/[.35] dark:bg-white/[.1] flex items-center justify-center'>
                                        <img width="50" height="50" src={service.imgPath} alt='icon'/>  
                                    </div>
                                    <div className='relative md:p-[50px] p-[30px]'>
                                        <h4 className="px-[15px] h-[28px] rounded-full bg-[#1F2937] dark:bg-white/[.1] flex items-center w-max md:text-[13px] text-[11px] font-medium uppercase tracking-wider text-white">
                                            {service.title}
                                        </h4>
                                        <h4 className="relative mt-8 pe-[10px] md:text-[28px] text-[19px] font-[600] text-[#1F2937] dark:text-white md:leading-[35px] leading-[27px] w-[84%]">
                                            {service.description}
                                        </h4>
                                        <div className='flex items-center justify-center'>
                                            <img className='w-[250px]' src={service.img} alt="img"/>
                                        </div>                      
                                        <div className='md:gap-2 gap-1'>
                                            {service.tools.map((tool, index) => (
                                                <span key={index} className="inline-flex px-4 py-1 me-2 mt-2 items-center justify-center text-[#1F2937] dark:text-white font-[500] text-[13px] rounded-full bg-white/[.5] dark:bg-white/[.1] tracking-wider">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eyes;