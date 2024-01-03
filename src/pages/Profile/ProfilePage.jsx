import React, {useState} from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import {salesData} from "./salesData";
import {CrossIcon} from "../../assets/svg/cross-icon";
import {useNavigate} from "react-router-dom";
import Table from "./Table";
import Grid from "./Grid";
import Sidebar from "../../components/Sidebar/Sidebar";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("Grid");
    const [selectedCategory, setSelectedCategory] = useState("Collection");
    const [show, setShow] = useState(false);
    const [imageSource, setImageSource] = useState(null);


    const [isValueHidden, setIsValueHidden] = useState(false);


    const handleOnClickView = (row) => {

        if (row?.id === imageSource?.id) {
            setShow(false);
            setImageSource(null)
            return;
        }

        setShow(true);
        setImageSource({
            imageUrl: row?.imageUrl,
            id: row?.id
        });
    };


    const handleSelected = (value) => {
        setSelected(value);
    };

    const handleSelectedCategory = (value) => {
        setSelectedCategory(value);
    };

    return (
        <PrivateLayout pageTitle="Profile" noHeader footer footer_on_stick={false}>
            <div className="flex justify-between items-center p-5">
                <span className="text-6xl text-black uppercase">Profile</span>
                <div className="flex justify-between w-3/5 ">
                    {

                        salesData?.map((item) => (
                                <div
                                    className={`flex flex-col ${(isValueHidden && item.isPrice) ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-opacity duration-300 ease-in-out`}>
              <span className="uppercase text-primary font-normal text-sm min-w-36">
                {item?.title}
              </span>
                                    <span className={`text-black font-normal text-sm min-w-36`}>
                {item?.value}
              </span>
                                </div>
                            )
                        )
                    }

                    <div className="flex flex-col cursor-pointer min-w-32" onClick={() => {
                        setIsValueHidden(!isValueHidden)
                    }}>
              <span className="uppercase  hover:text-black text-primary font-normal text-sm ">
              {isValueHidden ? 'Show Values' : 'Hide Values'}
              </span>
                    </div>


                </div>

                {/*<div*/}
                {/*  className="flex w-16 cursor-pointer"*/}
                {/*  onClick={() => navigate("/recommends")}*/}
                {/*>*/}
                {/*  <CrossIcon />*/}
                {/*</div>*/}


                <Sidebar icon={<CrossIcon/>} fromSidebarNav={true}/>
            </div>
            <div className="my-60 p-5 flex justify-between">
                <div>
                    {show && (
                        <div className="h-260 w-1/6 absolute">
                            <img
                                className="h-full w-full object-cover"
                                src={imageSource.imageUrl}
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
                    <div className="flex-col flex mt-7">
            <span
                onClick={() => handleSelectedCategory("Collection")}
                className={
                    selectedCategory === "Collection"
                        ? "text-black text-2xl cursor-pointer  uppercase"
                        : "text-primary text-2xl cursor-pointer  uppercase"
                }
            >
              Collection
            </span>
                        <span
                            onClick={() => handleSelectedCategory("Wishlist")}
                            className={
                                selectedCategory === "Wishlist"
                                    ? "text-black text-2xl cursor-pointer  uppercase"
                                    : "text-primary text-2xl cursor-pointer uppercase "
                            }
                        >
              Wishlist
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
                        <Grid isValueHidden={isValueHidden}/>
                    )}
                </div>
                <div className="w-16"></div>
            </div>


        </PrivateLayout>
    );
};

export default ProfilePage;
