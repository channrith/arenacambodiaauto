import Sidebar from "../_components/Layout/Sidebar";
import Advertisement from "../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import Image from "next/image";

export default function Review() {
    const carLogos = [
        { src: "/image/logo/AION.jpg", alt: "AION" },
        { src: "/image/logo/Audi.jpg", alt: "Audi" },
        { src: "/image/logo/BMW.jpg", alt: "BMW" },
        { src: "/image/logo/BYD.jpg", alt: "BYD" },
        { src: "/image/logo/ChangAn.jpg", alt: "ChangAn" },
        { src: "/image/logo/Chevrolet.jpg", alt: "Chevrolet" },
        { src: "/image/logo/Deepal.jpg", alt: "Deepal" },
        { src: "/image/logo/Dungfeng.jpg", alt: "Dungfeng" },
        { src: "/image/logo/Ford.jpg", alt: "Ford" },
        { src: "/image/logo/Forthing.jpg", alt: "Forthing" },
        { src: "/image/logo/Foton.jpg", alt: "Foton" },
        { src: "/image/logo/GAC.jpg", alt: "GAC" },
        { src: "/image/logo/Geely.jpg", alt: "Geely" },
        { src: "/image/logo/Great-Wall.jpg", alt: "Great Wall" },
        { src: "/image/logo/GTV.jpg", alt: "GTV" },
        { src: "/image/logo/Haval.jpg", alt: "Haval" },
        { src: "/image/logo/Dungfeng.jpg", alt: "Dungfeng" },
        { src: "/image/logo/Honda.jpg", alt: "Honda" },
        { src: "/image/logo/Hyundai.jpg", alt: "Hyundai" },
        { src: "/image/logo/ISUZU.jpg", alt: "ISUZU" },
        { src: "/image/logo/JAC.jpg", alt: "JAC" },
        { src: "/image/logo/Jaguar.jpg", alt: "Jaguar" },
        { src: "/image/logo/Jeep.jpg", alt: "Jeep" },
        { src: "/image/logo/Jetour.jpg", alt: "Jetour" },
        { src: "/image/logo/JMC.jpg", alt: "JMC" },
        { src: "/image/logo/KIA.jpg", alt: "KIA" },
        { src: "/image/logo/LandRover.jpg", alt: "LandRover" },
        { src: "/image/logo/Lexus.jpg", alt: "Lexus" },
        { src: "/image/logo/Mazda.jpg", alt: "Mazda" },
        { src: "/image/logo/Mercedes.jpg", alt: "Mercedes" },
        { src: "/image/logo/MG.jpg", alt: "MG" },
        { src: "/image/logo/Mitsubishi.jpg", alt: "Mitsubishi" },
        { src: "/image/logo/Nissan.jpg", alt: "Nissan" },
        { src: "/image/logo/Peugeot.jpg", alt: "Peugeot" },
        { src: "/image/logo/Porsch.jpg", alt: "Porsch" },
        { src: "/image/logo/RAM.jpg", alt: "RAM" },
        { src: "/image/logo/RollRoyce.jpg", alt: "RollRoyce" },
        { src: "/image/logo/SOUEAST.jpg", alt: "SOUEAST" },
        { src: "/image/logo/Ssangyong.jpg", alt: "Ssangyong" },
        { src: "/image/logo/Subaru.jpg", alt: "Subaru" },
        { src: "/image/logo/Suzuki.jpg", alt: "Suzuki" },
        { src: "/image/logo/Tesla.jpg", alt: "Tesla" },
        { src: "/image/logo/Toyota.jpg", alt: "Toyota" },
        { src: "/image/logo/Volkswagen.jpg", alt: "Volkswagen" },
        { src: "/image/logo/Volvo.jpg", alt: "Volvo" },
        { src: "/image/logo/Wuling.jpg", alt: "Wuling" },
        { src: "/image/logo/X-peng.jpg", alt: "X-peng" },
        { src: "/image/logo/Zeekr.jpg", alt: "Zeekr" },
    ]

    return (
        <main className="main">
            <Navbar homepage="true" />
            <div className="hero"></div>
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Advertisement
                        image="/image/EN-Euro.gif"
                        alt="Your ad could be here!"
                        link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
                    />

                    <div className="logo-page">
                        <div className="car-list-container">
                            <div className="list">
                                {carLogos.map((car, index) => (
                                    <div key={index} className="list-item">
                                        <Image
                                            src={car.src}
                                            alt={car.alt}
                                            width={300}
                                            height={150}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
