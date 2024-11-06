import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingStrategies from "./MarketingStrategies";

function Home() {
  return (
    <Layout>
      <div className="px-20">
        <Intro />
        <MarketingStrategies />
      </div>
    </Layout>
  );
}

export default Home;
