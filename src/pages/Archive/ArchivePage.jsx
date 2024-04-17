import React, { useState } from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import { CrossIcon } from "../../assets/svg/cross-icon";
import Table from "./Table";
import Grid from "./Grid";
import Sidebar from "../../components/Sidebar/Sidebar";
import ImageWithLoading from "../../components/Image/image";
import useIsMobile from "../../hooks/useIsMobile";
import Dropdown from "../../components/Dropdown/DropdownButton";
import DropdownOption from "../../components/Dropdown/DropdownOption";
import AnimationLayout from "../../components/AnimationLayout/AnimationLayout";
import { useDataQuery } from "../../hooks/crud/data.query";
import { API_END_POINTS } from "../../utils/api-endpoint";
import placeholder from "../../assets/place-holder.jpg";

const ArchivePage = () => {
  const [page, setPage] = useState(1);

  const [selected, setSelected] = useState("Grid");
  const [show, setShow] = useState(false);
  const [imageSource, setImageSource] = useState(null);

  const { data: archivesList, refetch } = useDataQuery({
    url: API_END_POINTS.archives,
    params: {
      limit: 10,
      page: page,
    },
  });

  console.log("archivesList", archivesList);

  const isMobile = useIsMobile();

  const handleOnClickView = (row) => {
    console.log(row);
    if (row?.id === imageSource?.id) {
      setShow(false);
      setImageSource(null);
      return;
    }
    console.log(row);

    setShow(true);
    setImageSource({
      imageUrl: row?.newsArtworks.imageUrl,
      id: row?.id,
    });
  };

  const handleSelected = (value) => {
    setSelected(value);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    refetch();
  };

  return (
    <AnimationLayout>
      <PrivateLayout
        pageTitle="Archive"
        noHeader
        footer
        footer_on_stick={false}
      >
        <div className="flex justify-between items-center p-5">
          <span className="text-6xl text-black uppercase">Archive</span>
          {!isMobile && (
            <div className="flex justify-between w-3/5">
              <span className="text-primary text-2xl font-light">
                This is a sentence or short paragraph explaining what the
                archive page is and what it features etc.
              </span>
            </div>
          )}

          <Sidebar icon={<CrossIcon />} fromSidebarNav={true} />
        </div>

        {isMobile && (
          <Dropdown
            className="px-5"
            initialOption={selected}
            onSelect={(option) => handleSelected(option)}
          >
            <DropdownOption>Grid</DropdownOption>

            <DropdownOption>List</DropdownOption>
          </Dropdown>
        )}
        {isMobile && (
          <div className="flex justify-between w-full p-5">
            <span className="text-primary text-xl font-light">
              This is a sentence or short paragraph explaining what the archive
              page is and what it features etc.
            </span>
          </div>
        )}

        <div
          className={`${
            isMobile ? "mt-5 p-5" : "mt-60 p-5"
          }  flex justify-between`}
        >
          <div>
            {!isMobile && show && (
              <div className="w-1/5 absolute">
                <ImageWithLoading
                  src={
                    imageSource.imageUrl
                      ? new URL(
                          `file/${imageSource.imageUrl}`,
                          process.env.REACT_APP_ENDPOINT,
                        ).toString()
                      : placeholder
                  }
                  alt="Card Image"
                />
              </div>
            )}
            <div>
              {!isMobile && (
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
              )}
              {!isMobile && (
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
              )}
            </div>
          </div>
          <div className={isMobile ? "w-full" : "w-3/5"}>
            {selected === "List" ? (
              <Table
                handleOnClickView={handleOnClickView}
                data={archivesList?.results}
              />
            ) : (
              <Grid data={archivesList?.results} />
            )}

            <div className="flex justify-between text-primary text-2xl cursor-pointer px-2.5 uppercase my-10">
              <button onClick={handleLoadMore} className=" hover:text-black">
                &#x2B; Load More
              </button>
              <button
                className=" hover:text-black"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                &#x2191; Top
              </button>
            </div>
          </div>
          <div className=" md:w-16 w-0"></div>
        </div>
      </PrivateLayout>
    </AnimationLayout>
  );
};

export default ArchivePage;
