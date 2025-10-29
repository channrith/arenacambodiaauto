import Sidebar from "../_components/Layout/Sidebar";
import Navbar from "../_components/Layout/Navbar";
import CompareClient from "./CompareClient";

export const metadata = {
    title: "Car Comparison",
    description: "Arena Cambodia Auto is a website of vehicle news and knowledge.",
    alternates: {
        canonical: "https://arenacambodiaauto.com/compare",
    },
};

export default function ComparePage({ searchParams }) {

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <CompareClient searchParams={searchParams} />
            </div>
        </main>
    );
}
