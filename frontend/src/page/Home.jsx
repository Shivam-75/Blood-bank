import React, { Suspense, lazy } from "react";
import Hero0 from "../components/hero/Hero0";
import Loading from "../components/loading/Loading";

const Hero1 = lazy(() => import("../components/hero/Hero1"));
const Hero2 = lazy(() => import("../components/hero/Hero2"));
const HeroImg = lazy(() => import("../components/hero/HeroImg"));
const Service = lazy(() => import("../components/card/Service"));
const Hospital = lazy(() => import("../components/hero/Hospital"));
const PreDonationTests = lazy(() =>
  import("../components/card/PreDonationTests")
);
const ReusableCard = lazy(() => import("../components/card/ReusableCard"));
import { data } from "../store/datas";
import { hospitals } from "../assets/item";

const Home = () => {
  return (
    <>
      {/* Hero section loads first */}
      <Hero0 />

      {/* Suspense fallback while lazy sections load */}
      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <Loading width={50} height={50} />
          </div>
        }>
        <Hero1 />
        <ReusableCard data={data} />
        <Hero2 />
        <HeroImg />
        <Service />
        <Hospital imgs={hospitals} />
        <PreDonationTests />
      </Suspense>
    </>
  );
};

export default Home;
