import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatStats } from "../utils/helper.util";

const VideoDetails = (videoDetail) => {
    return (
        <>
            {/* Stats and channel details */}
            <div className="pt-3 px-1 md:px-0">
                <p className="text-xl font-semibold">{videoDetail?.title}</p>
                <div className="lg:flex lg:justify-between lg:items-center mb-4 mt-2">
                    {/* channel details */}
                    <div className="flex items-center mb-2 lg:mb-0">
                        <div>
                            <img
                                src={videoDetail?.author?.avatar[0].url}
                                alt={videoDetail?.author?.title}
                                className="rounded-full cursor-pointer"
                                title={videoDetail?.author?.title}
                                onClick={(e) => {
                                    navigate(
                                        `/channel/${videoDetail?.author?.channelId}`
                                    );
                                }}
                            />
                        </div>
                        <div className="ms-3">
                            <p
                                className="text-md font-bold cursor-pointer"
                                title={videoDetail?.author?.title}
                                onClick={(e) => {
                                    navigate(
                                        `/channel/${videoDetail?.author?.channelId}`
                                    );
                                }}
                            >
                                {videoDetail?.author?.title}
                            </p>
                            <p className="text-gray-300 text-sm mt-0">
                                {videoDetail?.author?.stats.subscribersText}
                            </p>
                        </div>
                        <button className="ms-3 md:ms-7 bg-zinc-900 text-white py-2 px-5 rounded-full dark:bg-white dark:text-black">
                            Subscribe
                        </button>
                    </div>
                    {/* like , dislike and share btn */}
                    <div className="">
                        <button
                            className=" text-white bg-zinc-800 hover:bg-zinc-700 py-2 ps-5 pe-3 rounded-l-full"
                            title="I Like this"
                        >
                            <div className="flex  items-center">
                                {false ? (
                                    <BiLike className="text-xl" />
                                ) : (
                                    <BiSolidLike className="text-xl" />
                                )}
                                <span className="">
                                    {formatStats(videoDetail?.stats?.likes)}
                                </span>
                            </div>
                        </button>
                        <button
                            className=" text-white bg-zinc-800 hover:bg-zinc-700 py-[0.62rem] ps-3 pe-5 rounded-r-full"
                            title="I Dislike this"
                        >
                            {true ? (
                                <BiDislike className="text-xl" />
                            ) : (
                                <BiSolidDislike className="text-xl" />
                            )}
                        </button>
                        <button
                            className=" text-white bg-zinc-800 hover:bg-zinc-700 py-2 ms-3 px-5 rounded-full"
                            onClick={() => {
                                navigator.clipboard.writeText(location.href);
                                toast("Video link copied", {
                                    theme: "dark",
                                    autoClose: 1500,
                                });
                            }}
                            title="Share this video"
                        >
                            <div className="flex items-center">
                                <PiShareFat className="text-xl" />
                                <span>Share</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="text-sm font-semibold bg-zinc-800 rounded-2xl p-4 my-4 mx-1 md:mx-0">
                <div>
                    {formatStats(videoDetail?.stats?.views)} views{" "}
                    {videoDetail?.superTitle?.items?.map((item, index) => (
                        <span
                            key={index}
                            className="text-indigo-400 cursor-pointer"
                        >{` ${item}`}</span>
                    ))}
                    ,
                </div>
                <div>{videoDetail?.description}</div>
            </div>
        </>
    );
};

export default VideoDetails;
