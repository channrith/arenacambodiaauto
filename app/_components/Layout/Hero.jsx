import Image from "next/image";

const Hero = () => {
    return (
        <div className="image-grid">
            <div className="large-image">
                <Image
                    src="/image/1-Peugeot-e-3008-2024-review.jpg"
                    alt="Large"
                    width="800"
                    height="400"
                    priority
                />
            </div>
            <div className="small-images">
                <Image
                    src="/image/alpine-reveals-the-A390-electric-fastback.jpg"
                    alt="Top Small"
                    width="800"
                    height="400"
                    priority
                />
                <Image
                    src="/image/alfa-romeo-junior-elettrica-veloce-real-world-range-test.jpg"
                    alt="Bottom Small"
                    width="800"
                    height="400"
                    priority
                />
            </div>
        </div>
    );
};

export default Hero;
