import Header from "../components/Header";
import Hero from "../components/Hero";
import NewArrivalsContainer from "../components/NewArrivalsContainer";
import FavouritesContainer from "../components/FavouritesContainer";
import AppDownload from "../components/AppDownload";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";

const ShoppingLandingPageFinal = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <Header />
      <Hero />
      <img
        className="self-stretch max-w-full overflow-hidden max-h-full object-cover h-auto"
        alt=""
        src="/brands@2x.png"
      />
      <NewArrivalsContainer />
      <FavouritesContainer />
      <AppDownload />
      <CommunityCard />
      <Footer />
    </div>
  );
};

export default ShoppingLandingPageFinal;
