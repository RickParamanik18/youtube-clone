import { createContext, useEffect, useState } from "react";
import { fetchYoutubeData } from "../utils/api.util";

export const ytContext = createContext();

export const YtContextProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");

    useEffect(() => {
        setLoading(true);
        fetchYoutubeData(`/search/?q=${selectedCategory}`).then((data) => {
            console.log(data);
            setSearchResults(data.contents);
            setLoading(false);
        });
    }, [selectedCategory]);
    return (
        <ytContext.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {props.children}
        </ytContext.Provider>
    );
};
