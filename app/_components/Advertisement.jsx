// Advertisement.js
import Image from "next/image";

const Advertisement = ({ image, alt, link, height = 150, width = 800 }) => {
    const adContent = (
        <div className="ad-container">
            <Image
                src={image}
                alt={alt}
                width={width}
                height={height}
                priority
                unoptimized
            />
        </div>
    );

    return link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
            {adContent}
        </a>
    ) : (
        adContent
    );
};

export default Advertisement;
