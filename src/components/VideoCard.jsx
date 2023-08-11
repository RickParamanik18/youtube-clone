import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ value, cardType }) => {
    if (value.video) {
        const {
            videoId,
            title,
            stats,
            publishedTimeText,
            movingThumbnails,
            thumbnails,
            isLiveNow,
            descriptionSnippet,
            author,
        } = value.video;

        const [videoThumbnail, setVideoThumbnail] = useState(thumbnails[0].url);
        const navigate = useNavigate();
        useEffect(() => {
            setVideoThumbnail(thumbnails[0].url);
        }, []);

        const isBelowLg = () => window.innerWidth < 1024;

        return (
            <div
                className=" mx-3 my-6 cursor-pointer"
                onMouseOver={() => setVideoThumbnail(movingThumbnails[0].url)}
                onMouseOut={() => setVideoThumbnail(thumbnails[0].url)}
            >
                <div
                    className={`max-w-md ${
                        cardType === "tile" && !isBelowLg()
                            ? "grid grid-cols-2"
                            : ""
                    }`}
                    onClick={() => navigate(`/watch/?v=${videoId}`)}
                >
                    <img
                        src={videoThumbnail}
                        height={thumbnails[0].height}
                        className="md:w-96 w-full rounded-xl"
                        alt={title}
                    />
                    <div
                        className={`abcd flex w-full ${
                            cardType === "tile" && !isBelowLg()
                                ? "ml-3 "
                                : "mt-3"
                        } ${
                            (cardType === "tile" && isBelowLg()) ||
                            cardType !== "tile"
                                ? "md:w-96"
                                : ""
                        }`}
                    >
                        <div
                            className={`pt-2 h-13 w-13 ${
                                cardType === "tile" ? "hidden" : ""
                            }`}
                        >
                            <img
                                src={author.avatar[0].url}
                                alt={author.title}
                                className="rounded-full"
                                title={author.title}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/channel/${author.channelId}`, {
                                        redirect: true,
                                    });
                                }}
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="dark:text-white text-base font-medium leading-5 two-line"
                                title={title}
                            >
                                {title}
                            </p>
                            <p
                                className="text-gray-300 text-sm mt-2 hover:text-white"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/channel/${author.channelId}`);
                                }}
                            >
                                {author.title}
                            </p>
                            <p className="text-gray-300 text-sm">
                                {`${Math.floor(stats.views / 100)}K Views`}{" "}
                                &#8226; {`${publishedTimeText}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default VideoCard;
