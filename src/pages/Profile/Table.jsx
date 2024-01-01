import React, { useState } from "react";

const dummyData = [
  { artist: "Artist 1", title: "Title 1", costAud: 50, valueAud: 100 },
  { artist: "Artist 2", title: "Title 2", costAud: 60, valueAud: 120 },
  { artist: "Artist 3", title: "Title 3", costAud: 70, valueAud: 140 },
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
            Cost AUD
          </th>
          <th className="py-3 text-left uppercase border-b-2 border-gray-300">
            Value AUD
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
            <td className="py-4">${row.costAud}</td>
            <td className={`py-4`}>
              {hoveredRow === index ? (
                <span
                  onClick={() => handleOnClickView(row)}
                  className="ml-2 text-blue-500 cursor-pointer"
                >
                  View &#8594;
                </span>
              ) : (
                "$" + row.valueAud
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
