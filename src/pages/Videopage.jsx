import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { fetchYoutubeData } from "../utils/api.util";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Feed from "../components/Feed";
import VideoDetails from "../components/VideoDetails";
import VideoComments from "../components/VideoComments";

const Videopage = (props) => {
    const [videoDetail, setVideoDetail] = useState({});
    const [videoComments, setVideoComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let vidId = location.search;
        vidId = vidId.slice(3, vidId.length);
        fetchYoutubeData(`/video/details/?id=${vidId}`).then((data) => {
            setVideoDetail(data);
        });
        fetchYoutubeData(`/video/comments/?id=${vidId}`).then((data) => {
            console.log(data.comments);
            setVideoComments(data.comments);
        });
        // scroll to top
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
                    <VideoComments comments={videoComments} />
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
