import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import GetReady from "../GetReady/GetReady";

const Home = () => {
  return (
    <div className="font-mine">
      <GetReady></GetReady>
      <Banner></Banner>
      <Classes></Classes>
    </div>
  );
};

export default Home;
