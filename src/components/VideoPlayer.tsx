import ReactPlayer from "react-player";

export function VideoPlayer() {
    return (
        <div className="w-full bg-dark-primary aspect-video">
            <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=1i04-A7kfFI"
            />
        </div>
    )
}