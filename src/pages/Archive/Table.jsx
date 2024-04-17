import React, { useState } from "react";

const Table = ({ handleOnClickView, data }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <table className="min-w-full border-b border-gray-200">
      <thead className="text-primary font-light">
        <tr>
          <th className="py-3 text-left uppercase border-b-2 border-gray-300">
            Artist
          </th>
          <th className="py-3 text-left uppercase border-b-2 border-gray-300">
            Title
          </th>
          <th className="py-3 text-right uppercase border-b-2 border-gray-300">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr
            key={index}
            className={`${
              index === data.length - 1 ? "" : "border-b border-primary"
            }`}
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <td className="py-4">{row?.artist_name}</td>
            <td className="py-4">{row?.title}</td>

            <td className="py-4 text-right">
              {hoveredRow === index ? (
                <span
                  onClick={() => handleOnClickView(row)}
                  className="ml-2 text-blue-500 cursor-pointer"
                >
                  View &#8594;
                </span>
              ) : (
                row?.nl_date
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
