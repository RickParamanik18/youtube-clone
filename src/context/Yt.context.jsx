import { createContext, useEffect, useState } from "react";
import { fetchYoutubeData } from "../utils/api.util";

export const Context = createContext();

export const YtContext = (props) => {
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");

    useEffect(() => {
        setLoading(true);
        fetchYoutubeData(`/search/?q=${selectedCategory}`).then((data) => {
            console.log(data);
            setSearchResults(data);
            setLoading(false);
        });
    }, [selectedCategory]);
    return (
        <Context.Provider
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
        </Context.Provider>
    );
};
