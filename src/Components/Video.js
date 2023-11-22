import video from "../Assets/Tea.mp4"
function Video(){
    return(
        <div>
            <video src={video} muted loop autoPlay/>
        </div>
    )
} 
export default Video;