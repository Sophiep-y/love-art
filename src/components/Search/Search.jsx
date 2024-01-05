import {SearchIcon} from "../../assets/svg";
import React, {useState} from "react";
import {CrossIcon} from "../../assets/svg/cross-icon";

const dummyData = [
    {
        id: 1,
        artist: "Artist 1",
        title: "Title 1",
        costAud: 50,
        valueAud: 100,
        imageUrl: "https://picsum.photos/400/259",
        date: "2021-01-01",
    },
    {
        id: 2,
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
        date: "2021-01-01",

    },
    {
        id: 3,
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/261",
        date: "2021-01-01",

    },
    {
        id: 4,
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/258",
        date: "2021-01-01",
    },
];
const Search = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchText, setSearchText] = useState('');

    return (
        <div>
            {isSearchActive && (
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-white  transition-all duration-300 ${isSearchActive ? 'bg-opacity-90 z-10' : 'bg-opacity-0'} ease-in-out`}
                >
                    <div className="flex justify-between items-stretch h-screen">
                        <div className='md:m-8 m-4 w-full'>
                            <input
                                className="w-full h-12 border-none px-5 placeholder:uppercase placeholder:text-primary font-light text-4xl active:outline-none focus:outline-none "
                                type="text"
                                placeholder="Search Artist"
                            />

                            <div className='m-8'>
                                {dummyData.map((e) => (
                                    <div className='hover:text-black text-primary hover:underline my-2 text-2xl'>
                                        {e.artist}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='md:m-8 m-4 cursor-pointer' onClick={() => setIsSearchActive(false)}>
                            <CrossIcon/>
                        </div>
                    </div>
                </div>
            )}

            <button onClick={() => setIsSearchActive(!isSearchActive)}>
                <SearchIcon/>
            </button>
        </div>
    );
};

export default Search;
