import { useEffect, useState } from "react";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";

const VideoComments = ({ comments }) => {
    const [commentVisibility, setCommentVisibility] = useState(
        window.innerWidth > 786
    );
    useEffect(() => {
        window.onresize = () => {
            setCommentVisibility(window.innerWidth > 786);
        };
    }, []);

    return (
        <div>
            {commentVisibility ? (
                <div>
                    {comments.map((comment, index) => (
                        <div className="flex my-5" key={index}>
                            <div className="mt-2 mr-4">
                                <img
                                    src={comment?.author.avatar[0].url}
                                    height={40}
                                    width={40}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="w-full text-sm">
                                <div className="flex items-center mb-1">
                                    <span className="font-medium">
                                        {comment?.author.title}
                                    </span>
                                    <span className="ms-2 font-medium text-xs text-zinc-400">
                                        {comment.publishedTimeText}
                                    </span>
                                </div>
                                <p>{comment?.content}</p>
                                <div className="flex mt-2">
                                    <BiLike size={20} />
                                    <span>{comment.stats.votes}</span>
                                    <BiDislike size={20} className="ms-2" />
                                    <span className="ms-6 font-medium">
                                        Reply
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="md:hidden"
                    onClick={() => setCommentVisibility(true)}
                >
                    <span className="flex justify-end text-blue-500 cursor-pointer">
                        Read Comments...
                    </span>
                </div>
            )}
        </div>
    );
};

export default VideoComments;
