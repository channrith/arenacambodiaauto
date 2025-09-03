import Image from "next/image";

const Main = () => {
    const videos = [
        "GyPo4oTFL0E",
        "E2cr8Xkg_KI",
        "dQw4w9WgXcQ",
    ];

    return (
        <div className="video-grid">
            {videos.map((id) => (
                <div key={id} className="aspect-video">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title={`YouTube video ${id}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-xl shadow-md"
                    />
                </div>
            ))}
        </div>
    )
}

export default Main;