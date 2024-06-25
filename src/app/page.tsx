// pages/index.tsx
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-start">
        <Carousel />
      </main>
      {/* Additional content */}
    </div>
  );
};

export default Home;
