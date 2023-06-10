import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import GetReady from "../GetReady/GetReady";
import Instructor from "../Instructor/Instructor";

const Home = () => {
  return (
    <div className="font-mine">
      <GetReady></GetReady>
      <Banner></Banner>
      <Classes></Classes>
      <Instructor></Instructor>
    </div>
  );
};

export default Home;
