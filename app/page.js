import Reviews from "./_components/Reviews";
import Sidebar from "./_components/Layout/Sidebar";

export default function Home() {
  return (
    <main className="main">
      <Sidebar />
      <div className="main__container">
        <Reviews />
      </div>
    </main>
  );
}
