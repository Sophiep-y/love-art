import React, { useState } from "react";

const dummyData = [
  {
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/259",
  },
  {
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/260",
  },
  {
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/261",
  },

  {
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/262",
  },
  {
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/263",
  },
  {
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/264",
  },

  {
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/265",
  },
  {
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/266",
  },
  {
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/267",
  },

  {
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/268",
  },
  {
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/269",
  },
  {
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/270",
  },
];

const Table = ({ handleOnClickView, setImageSource }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <table className="min-w-full border-b border-gray-200">
      <thead>
        <tr>
          <th className="py-3 text-left uppercase border-b-2 border-gray-300">
            Artist
          </th>
          <th className="py-3 text-left uppercase border-b-2 border-gray-300">
            Title
          </th>
          <th className="py-3 text-left uppercase border-b-2 border-gray-300">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {dummyData.map((row, index) => (
          <tr
            key={index}
            className={`${
              index === dummyData.length - 1 ? "" : "border-b border-primary"
            }`}
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <td className="py-4">{row.artist}</td>
            <td className="py-4">{row.title}</td>
            <td className="py-4">
              {hoveredRow === index ? (
                <span
                  onClick={() => handleOnClickView(row)}
                  className="ml-2 text-blue-500 cursor-pointer"
                >
                  View &#8594;
                </span>
              ) : (
                row.date
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
