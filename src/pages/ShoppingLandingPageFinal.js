import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import NewArrivalsContainer from "../components/NewArrivalsContainer";
import FavouritesContainer from "../components/FavouritesContainer";
import AppDownloadContainer from "../components/AppDownloadContainer";
import CommunityCard from "../components/CommunityCard";
import FashionContainer from "../components/FashionContainer";

const ShoppingLandingPageFinal = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <Header />
      <HeroContainer />
      <img
        className="self-stretch max-w-full overflow-hidden max-h-full object-cover h-auto"
        alt=""
        src="/brands@2x.png"
      />
      <NewArrivalsContainer />
      <FavouritesContainer />
      <AppDownloadContainer />
      <CommunityCard />
      <FashionContainer />
    </div>
  );
};

export default ShoppingLandingPageFinal;
