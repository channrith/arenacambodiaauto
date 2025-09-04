const video = ({ id }) => {
    return (
        <div className="aspect-video">
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`YouTube video ${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-md"
            />
        </div>
    )
}

export default video;