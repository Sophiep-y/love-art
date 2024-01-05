import React, {useState} from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import {CrossIcon} from "../../assets/svg/cross-icon";
import Table from "./Table";
import Grid from "./Grid";
import Sidebar from "../../components/Sidebar/Sidebar";
import {salesData} from "./salesData";
import Dropdown from "../../components/Dropdown/DropdownButton";
import DropdownOption from "../../components/Dropdown/DropdownOption";
import ArtDetailSidebarStateLess from "../../components/ArtCard/ArtSidebarStateless";
import useIsMobile from "../../hooks/useIsMobile";
import userArtDetailSidebar from "../../hooks/userArtDetailSidebar";


const ProfilePage = () => {
    const [selected, setSelected] = useState("Grid");
    const [selectedCategory, setSelectedCategory] = useState("Collection");
    const [show, setShow] = useState(false);
    const [imageSource, setImageSource] = useState(null);
    const [isValueHidden, setIsValueHidden] = useState(false);

    const isMobile = useIsMobile();


    const handleOnClickView = (row) => {

        if (row?.id === imageSource?.id) {
            setShow(false);
            setImageSource(null)
            return;
        }

        setShow(true);
        setImageSource({
            imageUrl: row?.imageUrl, id: row?.id
        });
    };


    const handleSelected = (value) => {
        setSelected(value);
    };

    const handleSelectedCategory = (value) => {
        setSelectedCategory(value);
    };

    const {
        isCollapsed,
        isUnCollapse,
        isNavigation,
        selectedArtForSidebar,
        toggleSidebar,
    } = userArtDetailSidebar();


    return (
        <div>
            <PrivateLayout pageTitle="Profile" noHeader footer footer_on_stick={false} className='mb-20'>
                <div className={`${isMobile ? 'block' : 'flex'} justify-between items-center pt-5 px-5`}>
                    <div className='flex justify-between items-center'>
                        <span className="text-6xl text-black uppercase">Profile</span>
                        {isMobile && <Sidebar icon={<CrossIcon className='h-8'/>} fromSidebarNav={true}/>}
                    </div>
                    <div className={`flex justify-between ${isMobile ? 'mt-2 w-full' : 'w-3/5'}`}>

                        {
                            <div
                                className={`flex justify-between  ${(isValueHidden && isMobile) ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} ${isMobile ? 'fixed bottom-0 left-0 right-0 bg-white z-20 shadow-values p-4' : 'opacity-100'}  transition-opacity duration-300 ease-in-out`}>
                                {salesData?.map((item) => (<div
                                    className={`flex flex-col ${(isValueHidden && (item.isPrice)) ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-opacity duration-300 ease-in-out`}>
              <span className="uppercase text-primary font-normal text-sm min-w-36">
                {item?.title}
              </span>
                                    <span className={`text-black font-normal text-sm min-w-36`}>
                {item?.value}
              </span>
                                </div>))}
                            </div>
                        }


                        {
                            isMobile && (
                                <div className='flex justify-between'>
                                    <Dropdown initialOption={selectedCategory}
                                              onSelect={(option) => handleSelectedCategory(option)}>
                                        <DropdownOption
                                        >
                                            Collection
                                        </DropdownOption>

                                        <DropdownOption
                                        >
                                            Wishlist
                                        </DropdownOption>
                                    </Dropdown>

                                    <Dropdown initialOption={selected} onSelect={(option) => handleSelected(option)}>
                                        <DropdownOption
                                        >
                                            Grid
                                        </DropdownOption>

                                        <DropdownOption
                                        >
                                            List
                                        </DropdownOption>
                                    </Dropdown>
                                </div>
                            )
                        }

                        <div className={`flex ${isMobile ? ' justify-end' : ''} cursor-pointer  min-w-32`}
                             onClick={() => {
                                 setIsValueHidden(!isValueHidden)
                             }}>
              <span className="uppercase  hover:text-black text-primary font-normal text-sm ">
              {isValueHidden ? 'Show Values' : 'Hide Values'}
              </span>
                        </div>


                    </div>

                    {!isMobile &&
                        <Sidebar icon={<CrossIcon/>} fromSidebarNav={true}/>}
                </div>
                <div className={` ${isMobile ? 'my-8' : 'my-60'} p-5 flex justify-between`}>
                    {!isMobile && <div>
                        {!isMobile && show && (<div className="h-260 w-1/6 absolute">
                            <img
                                className="h-full w-full object-cover"
                                src={imageSource.imageUrl}
                                alt="Card Image"
                            />
                        </div>)}
                        <div>
            <span
                onClick={() => handleSelected("Grid")}
                className={selected === "Grid" ? "text-black text-2xl cursor-pointer uppercase" : "text-primary text-2xl cursor-pointer uppercase"}
            >
              Grid
            </span>
                            <span
                                onClick={() => handleSelected("List")}
                                className={selected === "List" ? "text-black text-2xl cursor-pointer px-2.5 uppercase" : "text-primary text-2xl cursor-pointer px-2.5 uppercase"}
                            >
              List
            </span>
                        </div>
                        <div className="flex-col flex mt-7">
            <span
                onClick={() => handleSelectedCategory("Collection")}
                className={selectedCategory === "Collection" ? "text-black text-2xl cursor-pointer  uppercase" : "text-primary text-2xl cursor-pointer  uppercase"}
            >
              Collection
            </span>
                            <span
                                onClick={() => handleSelectedCategory("Wishlist")}
                                className={selectedCategory === "Wishlist" ? "text-black text-2xl cursor-pointer  uppercase" : "text-primary text-2xl cursor-pointer uppercase "}
                            >
              Wishlist
            </span>
                        </div>
                    </div>}
                    <div className={`${isMobile ? 'w-max' : 'w-3/5'}`}>
                        <Table
                            handleOnClickView={handleOnClickView}
                            setImageSource={setImageSource}
                            className={`${selected === "List" ? 'opacity-100 scale-100' : 'opacity-0 scale-0 hidden'} transition-opacity duration-300 ease-in-out`}
                        />
                        <Grid
                            onDetail={toggleSidebar}
                            isValueHidden={isValueHidden} isWishList={selectedCategory === 'Wishlist'}
                            className={`${selected !== "List" ? 'opacity-100 scale-100' : 'opacity-0 scale-0 h-0'} transition-opacity duration-300 ease-in-out`}
                        />
                    </div>
                    <div className="w-16"></div>
                </div>


            </PrivateLayout>);
            <ArtDetailSidebarStateLess
                art={selectedArtForSidebar}
                showIcon={false}
                isCollapsed={isCollapsed}
                isUnCollapse={isUnCollapse}
                isNavigation={isNavigation}
                toggleSidebar={toggleSidebar}
            />
        </div>)
};

export default ProfilePage;
