import VideoCard from "./VideoCard";
import Loader from "./Loader";
import { useContext, useEffect } from "react";
import { ytContext } from "../context/Yt.context";
import { fetchYoutubeData } from "../utils/api.util";
import { categories } from "../utils/constants.jsx";

const Feed = () => {
    const {
        searchResults,
        loading,
        setLoading,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
    } = useContext(ytContext);
    useEffect(() => {
        window.onscroll = function () {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                setLoading(true);
                fetchYoutubeData(`/search/?q=${selectedCategory}`)
                    .then((data) => {
                        console.log({ data });
                        setSearchResults((prev) => [...prev, ...data.contents]);
                        setLoading(false);
                    })
                    .catch((e) => console.log(e));
            }
            setLoading(false);
        };
    }, []);
    
    return (
        <div>
            <div className="flex no-scrollbar dark:text-white py-3 text-sm overflow-scroll">
                {categories
                    .filter((item) => item.type === "category")
                    .map((item, index) => (
                        <pre
                            className="bg-zinc-900 cursor-pointer px-3 py-2 mx-1 rounded-lg hover:bg-zinc-700 transition-all"
                            onClick={() => {
                                setSelectedCategory(item.name);
                            }}
                            key={index}
                        >
                            {item.name}
                        </pre>
                    ))}
            </div>
            <div className="video-container flex flex-wrap justify-center">
                {searchResults.length && !loading ? (
                    searchResults?.map((item, index) => (
                        <VideoCard value={item} key={index} />
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default Feed;
