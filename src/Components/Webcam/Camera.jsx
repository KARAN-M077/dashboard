import Webcam from "react-webcam";

const Camera = () => {
const videoConstraints = {
        width: 300,
        height: 200,
        facingMode: "user"
      };
  return (
    <>
    <div>
        <Webcam
        audio={true}
        height={120}
        width={180}
        videoConstraints={videoConstraints}
        />
    </div>
    </>
  )
}

export default Camera