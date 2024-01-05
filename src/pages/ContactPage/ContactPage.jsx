import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import {CrossIcon} from "../../assets/svg/cross-icon";
import Sidebar from "../../components/Sidebar/Sidebar";
import useIsMobile from "../../hooks/useIsMobile";

const ContactPage = () => {
        const isMobile = useIsMobile();


        const contactInfo =
            [
                [
                    {
                        title: 'Address',
                        subCategories: [
                            {
                                title: 'Streets',
                                description: '61 Ocean st.\nWoollahra, Sydney \nNSW, Australia 2025'
                            },
                            {
                                title: 'Postel',
                                description: 'PO Box 389 \nWoollahra, Sydney \nNSW, Australia 2025'
                            }
                        ],


                    },
                    {
                        title: 'Socials',
                        subCategories: [
                            {
                                title: 'Instagram',
                                description: '@loveartinterntional'
                            }
                        ],
                    },

                ],
                [
                    {
                        title: 'Phone',
                        subCategories: [
                            {
                                title: 'Sydney',
                                description: '+61 2 9327 7538'
                            },
                            {
                                title: 'New York',
                                description: '+1 347 410 5392'
                            },
                            {
                                title: 'London',
                                description: '+44 7408 831950'
                            }
                        ],
                    },
                    {
                        title: 'Email',
                        subCategories: [
                            {
                                title: 'General',
                                description: 'mail@loveart.com'
                            }
                            ,
                            {
                                title: 'Accounts',
                                description: 'account@loveart.com'
                            }

                        ]

                    }]
            ];


        return (<PrivateLayout
                pageTitle="Archive"
                noHeader
                footer={!isMobile}
                footer_on_stick={true}
            >
                <div className="md:flex block justify-between items-start p-5 ">

                    <div className='flex justify-between'>
                        <span className="text-6xl text-black uppercase">Contact</span>
                        {isMobile && <Sidebar icon={<CrossIcon/>} fromSidebarNav={true}/>}

                    </div>

                    <div className='w-full'>
                        <div className="flex md:w-3/5 w-full md:justify-end justify-between md:mt-0 mt-16 ml-auto">
                            {

                                contactInfo.map((value) => (
                                    <div className='md:mr-32 mr-10'>
                                        {
                                            value.map((categories) => {
                                                return (
                                                    <div>
                                                        <div className='uppercase text-primary'>
                                                            {categories.title}
                                                        </div>
                                                        {
                                                            categories.subCategories.map((subCategories) => {
                                                                return (
                                                                    <div className='mt-10'>
                                                                        <div className='text-primary'>
                                                                            {subCategories.title}

                                                                        </div>
                                                                        <div style={{whiteSpace: "pre-line"}}>
                                                                            {subCategories.description}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ))

                            }

                        </div>

                        <div className='flex justify-end md:my-24 my-12'>
                            For Internship enquiries, please email mail@loveart.com with your CV and Covering
                            Letter.
                        </div>

                    </div>


                    {!isMobile && <Sidebar icon={<CrossIcon/>} fromSidebarNav={true}/>}


                </div>
            </PrivateLayout>
        )
            ;
    }
;

export default ContactPage;
