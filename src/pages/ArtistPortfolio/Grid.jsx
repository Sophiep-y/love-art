import React from "react";
import ArtCard from "../../components/ArtCard/ArtCard";

const dummyData = [
    {
        id: 1,
        artist: "Artist 1",
        title: "Title 1",
        costAud: 50,
        valueAud: 100,
        imageUrl: "https://picsum.photos/400/259",
        date: "2021-01-01",
        material: "acrylic, Flashe and wax pastel on canvas",
        dimensions: "100 x 100 cm",
    },
    {
        id: 2,
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
        date: "2021-01-01",
        material: "acrylic, Flashe and wax pastel on canvas",
        dimensions: "100 x 100 cm",
    },
    {
        id: 3,
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/261",
        date: "2021-01-01",
        material: "acrylic, Flashe and wax pastel on canvas",
        dimensions: "100 x 100 cm",
    },
    {
        id: 4,
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/258",
        date: "2021-01-01",
        material: "acrylic, Flashe and wax pastel on canvas",
        dimensions: "100 x 100 cm",
    },
];


const Grid = () => {


    return (
        <div className="flex flex-wrap">
            {dummyData?.map((item, index) => (
                <ArtCard art={item} index={index}/>
            ))}
        </div>
    );
};
export default Grid;
