import React, { useState } from "react";

const dummyData = [
  {
    id: 1,
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/900",
  },
  {
    id: 2,
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/260",
  },
  {
    id: 3,
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/261",
  },

  {
    id: 4,
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/262",
  },
  {
    id: 5,
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/263",
  },
  {
    id: 6,
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/264",
  },

  {
    id: 7,
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/265",
  },
  {
    id: 8,
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/266",
  },
  {
    id: 9,
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/900",
  },

  {
    id: 10,
    artist: "Artist 1",
    title: "Title 1",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/268",
  },
  {
    id: 11,
    artist: "Artist 2",
    title: "Title 2",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/269",
  },
  {
    id: 12,
    artist: "Artist 3",
    title: "Title 3",
    date: "17.11.22",
    imageUrl: "https://picsum.photos/400/270",
  },
];

const Table = ({ handleOnClickView }) => {
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
