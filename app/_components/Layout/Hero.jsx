"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

const Hero = ({
    type = 'image',
    src,
    link = '#',
    alt = 'Media content',
    className = '',
    showLink = false,
}) => {
    const [error, setError] = useState(false);

    // Extract YouTube video ID from various URL formats
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    if (type === 'youtube') {
        const videoId = getYouTubeId(src);

        if (!videoId) {
            return (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    Invalid YouTube URL
                </div>
            );
        }

        return (
            <div className={`relative video-container banner ${className}`}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={alt}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                {showLink && (
                    <Link href={link}>{alt}</Link>
                )}
            </div>
        );
    }

    if (type === 'image') {
        return (
            <div className={`relative banner ${className}`}>
                {error ? (
                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center text-gray-600">
                        Failed to load image
                    </div>
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        sizes="100vw"
                        fill
                        onError={() => setError(true)}
                        priority
                    />
                )}
                {showLink && (
                    <Link href={link}>{alt}</Link>
                )}
            </div>
        );
    }

    if (type === 'featured-image') {
        return (
            <div className={`banner featured-image ${className}`}>
                {error ? (
                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center text-gray-600">
                        Failed to load image
                    </div>
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        sizes="100vw"
                        fill
                        onError={() => setError(true)}
                        priority
                    />
                )}
                <div className='featured-image-text'>
                    <p>{alt}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-700">
            Unsupported media type: {type}
        </div>
    );
}

export default Hero;