import Video from "./Video";

const VideoList = ({ videos }) => {
    return (
        <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((id) => (
                <Video key={id} id={id} />
            ))}
        </div>
    )
}

export default VideoList;