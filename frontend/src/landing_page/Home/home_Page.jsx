import Navbar from "./Navbar";
import Hero from "./Hero";
import Support from "./Support";
import Collection from "./Collection";
import Featured from "./Featured";
import Trending from "./Trending";
import Flash_sale from "./Flash_sale";
import Cashback from "./Cashback";
import Client from "./Client";
import Latest_blog from "./Latest_blog";
import Question from "./Question";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function home_Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Support />
      <Collection />
      <Featured />
      <Trending />
      <Flash_sale />
      <Cashback />
      <Client />
      <Latest_blog />
      <Question />
      <Subscribe />
      <Footer />

    </>
  );
}

export default home_Page;
