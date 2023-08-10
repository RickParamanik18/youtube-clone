import ytLogo from "../assets/yt-logo.png"
const Header = () => {
    return (
        <div>
            <div className="p-4 grid grid-cols-4 text-white bg-slate-950">
                <div>
                    <img src={ytLogo} alt="Youtubt_logo" className="h-5"/>
                </div>
                <div className=" col-span-2">
                    <input type="text" placeholder="Search" className="bg-slate-900"/>
                </div>
                <div>
                    {
                        true?(
                            <button></button>
                        ):()
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
