import React, {useState} from "react";
import useIsMobile from "../../hooks/useIsMobile";

const dummyData = [
    {
        id: 1,
        artist: "Artist 1", title: "Title 1", costAud: 50, valueAud: 100, imageUrl: "https://picsum.photos/400/260"
    },
    {
        id: 2,
        artist: "Artist 2", title: "Title 2", costAud: 60, valueAud: 120, imageUrl: "https://picsum.photos/400/260"
    },
    {
        id: 3,
        artist: "Artist 3", title: "Title 3", costAud: 70, valueAud: 140, imageUrl: "https://picsum.photos/400/260"
    },

];

const Table = ({handleOnClickView, className}) => {
    const isMobile = useIsMobile();

    const [hoveredRow, setHoveredRow] = useState(null);
    return (
        <table className={`${className} min-w-full border-b border-gray-200`}>
            <thead className='text-primary font-light'>
            <tr>
                <th className="py-3 text-left uppercase border-b-2 border-gray-300">
                    Artist
                </th>
                {!isMobile &&
                    <th className="py-3 text-left uppercase border-b-2 border-gray-300">
                        Title
                    </th>}
                <th className="py-3 text-right uppercase border-b-2 border-gray-300">
                    Cost AUD
                </th>
                <th className="py-3 text-right uppercase border-b-2 border-gray-300">
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
                    <td className="py-4">

                        <div className='flex flex-col'>
                            <div className="uppercase">
                                {row.artist}
                            </div>
                            {isMobile && <div className='italic text-sm'>
                                {row.title}
                            </div>}
                        </div>
                    </td>

                    {!isMobile &&
                        <td className="py-4">{row.title}</td>}

                    <td className="py-4 text-right">${row.costAud}</td>
                    <td className={`py-4 text-right`}>
                        {hoveredRow === index ? (
                            <span
                                onClick={() => handleOnClickView(row)}
                                className="ml-2 text-blue-500 cursor-pointer"
                            >
                  Details &#8594;
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
