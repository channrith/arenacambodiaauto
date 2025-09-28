import Image from "next/image";

const Hero = () => {
    return (
        <div className="image-grid">
            <div className="large-image hero-item">
                <Image
                    src="/image/1-Peugeot-e-3008-2024-review.jpg"
                    alt="Large"
                    width="800"
                    height="400"
                    priority
                />
                <div className="banner__title">Peugeot e-3008 GT Electric review</div>
            </div>
            <div className="small-images">
                <div className="hero-item">
                    <Image
                        src="/image/alpine-reveals-the-A390-electric-fastback.jpg"
                        alt="Top Small"
                        width="800"
                        height="400"
                        priority
                    />
                    <div className="banner__title">Alpine reveals the A390 electric fastback</div>
                </div>
                <div className="hero-item">
                    <Image
                        src="/image/alfa-romeo-junior-elettrica-veloce-real-world-range-test.jpg"
                        alt="Bottom Small"
                        width="800"
                        height="400"
                        priority
                    />
                    <div className="banner__title">Alfa Romeo Junior Elettrica Veloce real world range test</div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
