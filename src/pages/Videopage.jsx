import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { fetchYoutubeData } from "../utils/api.util";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Feed from "../components/Feed";
import VideoDetails from "../components/VideoDetails";

const Videopage = (props) => {
    const [videoDetail, setVideoDetail] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        let vidId = location.search;
        vidId = vidId.slice(3, vidId.length);
        fetchYoutubeData(`/video/details/?id=${vidId}`).then((data) => {
            console.log(data);
            setVideoDetail(data);
        });
    }, [history.length]);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 dark:text-white lg:px-18 md:px-10">
                <div className="col-span-2 my-5 mx-3">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch${location.search}`}
                        controls
                        width={"100%"}
                    />
                    <VideoDetails {...videoDetail} />
                </div>

                <div className="my-5 mx-3">
                    <Feed cardType="tile" />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Videopage;
