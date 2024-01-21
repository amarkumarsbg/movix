import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default Home;
