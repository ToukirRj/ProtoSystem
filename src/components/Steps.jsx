
import Step from '/img/steps.svg'
import stepsData from '../datas/stepsData'

const Steps = () => {
    return (
        <>
            <div className="md:py-20 py-6 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 place-items-center md:mx-[50px] mx-0'>
                        <div className="w-full relative">
                            <div className='md:w-[74%] w-full mx-auto mb-0 md:text-end text-center' data-aos="fade-up" data-aos-duration="200" data-aos-delay="100">
                                <h2 className="md:text-[67px] text-[43px] font-bold text-[#1F2937] dark:text-white md:leading-[74px] leading-[52px]"> 
                                    <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3">Steps</span> of <br/>A Project
                                </h2>
                                <p className="mx-auto max-w-full mt-2 text-[#1F2937] dark:text-white w-full md:text-[19px] text-[17px] font-[300] md:leading-[32px] leading-[28px] tracking-wide">
                                    I use these steps to reach the destination of your project needs
                                </p>
                            </div>
                            <div className='md:me-7 me-0' data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                                <img src={Step} alt="steps"/>
                            </div>
                        </div>
                        <div className="w-full ps-10">
                            {stepsData.map(step => (
                                <div key={step.id} className="step relative z-10 w-full mt-3" data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                                    <span className='absolute -z-50 -top-[4px] -left-[37px] w-[40px] h-[40px] rounded-l-[40px] rounded-tr-[40px] bg-[#1F2937] dark:bg-white flex items-center justify-center'>
                                        <h3 className='text-[18px] font-[600] text-[#EB8546] dark:text-[#1F2937]'>{step.id}</h3>
                                    </span>
                                    <div className="px-5 py-4 bg-white/[0.2] border border-white/[.25] dark:bg-white/[.07] dark:border-0 backdrop-blur-sm rounded-l-[30px] rounded-r-[50px]">
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <div className="px-3 py-[3px] w-auto rounded-[30px] bg-white/[0.65] dark:bg-white/[0.1] text-[12px] font-[500] text-[#1F2937] dark:text-white tracking-wide table">{step.topic}</div>
                                                <h4 className="mt-2 md:text-[19px] text-[16px] font-[300] text-[#1F2937] dark:text-white tracking-normal md:leading-normal leading-[23px] md:w-auto w-[190px]">{step.Name}</h4>
                                            </div>
                                            <div className="h-14 w-14 rounded-full bg-white/[.35] dark:bg-white/[0.07] flex items-center justify-center">
                                                <img className="h-7 w-7" src={step.image} alt="steps"/>
                                            </div>
                                        </div>
                                        <span className="line bg-[#1F2937] dark:bg-white/[0.35] w-0.5 h-[73%] top-[35px] -left-[18px] absolute"></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps