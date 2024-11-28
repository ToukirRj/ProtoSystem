
import MainLayout from '../layout/MainLayout';
import Splash from '../components/Splash';
import Myself from '../components/Myself';
import Eyes from '../components/Eyes';
import Weapons from '../components/Weapons';
import Steps from '../components/Steps';
import Bio from '../components/Bio';

const Home = () => {
  return (
    <MainLayout>
      <div className="scroll-container">
        <Splash/>
        <Myself/>
        <Eyes/>
        <Weapons/>
        <Bio/>
        <Steps/>
        {/* <Satisfy/> */}
      </div>
    </MainLayout>
  );
};

export default Home;
