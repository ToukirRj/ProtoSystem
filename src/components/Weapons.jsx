
import skillsData from '../datas/skillsData';
import CircularProgress from '../props/CircularProgress';



const Weapons = () => {
  return (
    <div className="md:py-20 py-6 relative z-20">
      <div className="mx-auto px-4 md:px-12 xl:max-w-6xl xl:px-0 ">
        <div className="relative md:text-start text-center" data-aos="fade-up" data-aos-duration="200" data-aos-delay="100">
          <h2 className="xl:text-[55px] md:text-4xl text-4xl font-bold text-[#1F2937] dark:text-white">
            My<span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 md:leading-[67px] leading-[45px]">Weapons</span> Power
          </h2>
          <p className="mt-2 text-[#1F2937] dark:text-white md:w-4/6 md:text-[19px] text-[17px] font-[300] tracking-wide leading-[30px]">
            As a professional, the percentage of my skills by platform and language
          </p>
        </div>

        <div className="md:mt-7 mt-4 relative z-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
            {skillsData.map((category, index) => (
              <div key={index} className="w-full bg-white/[0.18] border border-white/[.15] dark:bg-white/[.05] dark:border-0 rounded-[45px] overflow-hidden p-10" data-aos="fade-up" data-aos-duration="350" data-aos-delay="100">
                <h2 className="text-[23px] font-[600] text-center tracking-tight text-[#1F2937] dark:text-white">{category.title}</h2>
                <div className="flex flex-wrap justify-center items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className='flex flex-col w-1/2 items-center justify-center mt-5' data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                      <CircularProgress percentage={skill.percent} strokeWidth={5}/>
                      <div className="relative -mt-[45px] mb-[13px] p-[5px] flex flex-none items-center justify-center rounded-full bg-[#ff8144]/[0.35]">
                        <img src={skill.icon} alt="icon" className='h-8 w-8 overflow-hidden rounded-full'/>
                      </div>
                      <h4 className="px-[15px] h-[26px] rounded-full bg-white/[.5] dark:bg-white/[.1] flex items-center w-max text-[12px] font-[600] uppercase tracking-wider text-[#1F2937] dark:text-white">{skill.name}</h4>
                    </div>
                  ))}
                </div>                                         
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapons;