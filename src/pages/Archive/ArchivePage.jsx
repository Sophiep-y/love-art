import React, { useState } from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import { salesData } from "./salesData";
import { CrossIcon } from "../../assets/svg/cross-icon";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import Grid from "./Grid";
import Sidebar from "../../components/Sidebar/Sidebar";

const ArchivePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Grid");
  const [selectedCategory, setSelectedCategory] = useState("Collection");
  const [show, setShow] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const handleOnClickView = (row) => {
    setShow(!show);
    setImageSource(row?.imageUrl);
  };

  const handleSelected = (value) => {
    setSelected(value);
  };

  const handleSelectedCategory = (value) => {
    setSelectedCategory(value);
  };
  return (
    <PrivateLayout pageTitle="Archive" noHeader footer footer_on_stick={false}>
      <div className="flex justify-between items-center p-5">
        <span className="text-6xl text-black uppercase">Archive</span>
        <div className="flex justify-between w-3/5">
          <span className="text-primary text-2xl font-light">
            This is a sentence or short paragraph explaining what the archive
            page is and what it features etc.
          </span>
        </div>
        {/*<div*/}
        {/*  className="flex w-16 cursor-pointer"*/}
        {/*  onClick={() => navigate("/recommends")}*/}
        {/*>*/}
        {/*  <CrossIcon />*/}
        {/*</div>*/}

        <Sidebar icon={<CrossIcon/>} fromSidebarNav={true}/>

      </div>
      <div className="mt-60 p-5 flex justify-between">
        <div>
          {show && (
            <div className="h-260 w-30% absolute">
              <img
                className="h-full w-full object-cover"
                src={imageSource}
                alt="Card Image"
              />
            </div>
          )}
          <div>
            <span
              onClick={() => handleSelected("Grid")}
              className={
                selected === "Grid"
                  ? "text-black text-2xl cursor-pointer uppercase"
                  : "text-primary text-2xl cursor-pointer uppercase"
              }
            >
              Grid
            </span>
            <span
              onClick={() => handleSelected("List")}
              className={
                selected === "List"
                  ? "text-black text-2xl cursor-pointer px-2.5 uppercase"
                  : "text-primary text-2xl cursor-pointer px-2.5 uppercase"
              }
            >
              List
            </span>
          </div>
        </div>
        <div className="w-3/5">
          {selected === "List" ? (
            <Table
              handleOnClickView={handleOnClickView}
              setImageSource={setImageSource}
            />
          ) : (
            <Grid />
          )}
        </div>
        <div className="w-16"></div>
      </div>
    </PrivateLayout>
  );
};

export default ArchivePage;
