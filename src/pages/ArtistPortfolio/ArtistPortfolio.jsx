import {useParams} from "react-router-dom";
import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import Sidebar from "../../components/Sidebar/Sidebar";
import {CrossIcon} from "../../assets/svg/cross-icon";
import Grid from "./Grid";

function formatDateRange(startDate, endDate) {
    const options = {day: '2-digit', month: 'long', year: 'numeric'};

    const start = new Date(startDate);
    const end = new Date(endDate);

    const formattedStart = start.toLocaleDateString('en-US', options);
    const formattedEnd = end.toLocaleDateString('en-US', options);

    const rearrangeDate = (dateString, includeYear) => {
        const [month, day, year] = dateString.split(' ');
        return includeYear ? `${day.replace(',', '')} ${month}, ${year}` : `${day} ${month}`.replace(',', '');
    };

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    const includeYearInStart = startYear !== endYear;

    return [rearrangeDate(formattedStart, includeYearInStart), rearrangeDate(formattedEnd, true)].sort((a, b) => new Date(a) - new Date(b));
}


const ArtistPortfolio = () => {
    const {id} = useParams();

    const artist = {
        artist: "Artist 1",
        title: "Title 1",
        dateStart: "2021-01-01",
        dateEnd: "2021-11-01",

    };

    const dateFormatted = formatDateRange(artist.dateStart, artist.dateEnd);

    return (
        <PrivateLayout pageTitle="Archive" noHeader footer footer_on_stick={false}>
            <div className="flex justify-between items-start p-5">
                <div>
                    <h2 className="text-2xl font-light mt-4 cursor-pointer">{artist?.artist}</h2>
                    <p className="text-primary text-2xl italic font-light">{artist?.title}</p>
                    <p className="text-black font-light my-5">{dateFormatted[0]} &#x2E3A;<br/>{dateFormatted[1]}</p>

                    <div
                        onClick={() => {

                        }}
                        className="text-primary text-2xl cursor-pointer uppercase my-60 hover:text-black"
                    >
                        INFO
                    </div>
                </div>
                <div className="w-3/5 mt-20">
                    <Grid/>
                </div>
                <Sidebar icon={<CrossIcon/>} fromSidebarNav={true}/>
            </div>
        </PrivateLayout>
    );

};


export default ArtistPortfolio;