import {
  Banner,
  Counts,
  Navbar,
  ShopByVideo,
  Favorites,
  HandPickedCollection,
  ShopByOccasion,
  ShopByCollections,
  ShopByCategory,
  BestSellers,
  Footer,
  HearFromThem,
  NavbarTop,
} from "./";
export const HomePage = () => {
  return (
    <>
      <NavbarTop />
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Banner />
      <Counts />
      <ShopByVideo />
      <Favorites />
      <HandPickedCollection />
      <ShopByOccasion />
      <ShopByCollections />
      <ShopByCategory />
      <HearFromThem />
      <BestSellers />
      <Footer />
    </>
  );
};
