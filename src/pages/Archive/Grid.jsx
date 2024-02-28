import React, { useState } from "react";
import ImageWithLoading from "../../components/Image/image";
import { useNavigate } from "react-router-dom";

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

const formatDate = (dateString) => {
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options,
  );

  // Extracting individual components and joining with dots
  const [month, day, year] = formattedDate.split("/");
  return `${month}.${day}.${year}`;
};

const Grid = ({ data }) => {
  const navigate = useNavigate();

  const [hoveringItem, setHoveringItem] = useState(null);

  return (
    <div className="flex flex-wrap">
      {data?.map((item, index) => (
        <div
          className={`${
            index > 1 ? "mt-10" : "mt-0"
          } h-auto w-30% max-w-md mx-auto  bg-white overflow-hidden  ${hoveringItem === item.id ? "grayscale" : ""}  `}
          onMouseEnter={() => setHoveringItem(item.id)}
          onMouseLeave={() => setHoveringItem(false)}
        >
          {/* Image */}
          <div className="h-260 w-30% shadow-recommendation">
            {/*<img*/}
            {/*  className="h-full w-full object-cover"*/}
            {/*  src={item?.imageUrl}*/}
            {/*  alt="Card Image"*/}
            {/*/>*/}
            <ImageWithLoading src={item?.imageUrl} alt="Card Image" />
          </div>

          {/* Title */}
          <div>
            <h2
              className="text-2xl font-light mt-4 cursor-pointer"
              onClick={() => {
                navigate(`/artist/${item.id}`);
              }}
            >
              {item?.artist_name}
            </h2>
          </div>

          {/* Details */}
          <div>
            <p className="text-primary text-2xl italic font-light">
              {item?.title}
            </p>
            <p className="text-black text-2xl font-light">
              {formatDate(item?.nl_date)}
            </p>
          </div>

          {/* Details */}
          <div
            className={`flex justify-end items-end py-2  ${hoveringItem === item.id ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out cursor-pointer`}
          >
            <p className="text-gray-600 font-semibold" onClick={() => {}}>
              DETAILS &#8594;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Grid;
