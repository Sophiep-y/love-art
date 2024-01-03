import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import {CrossIcon} from "../../assets/svg/cross-icon";
import Sidebar from "../../components/Sidebar/Sidebar";

const ContactPage = () => {


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
                footer
                footer_on_stick={true}
            >
                <div className="flex justify-between items-start p-5 ">
                    <span className="text-6xl text-black uppercase">Contact</span>


                    <div className='w-full'>
                        <div className="flex w-3/5 justify-end ml-auto">
                            {

                                contactInfo.map((value) => (
                                    <div className='mr-32'>
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

                        <div className='flex justify-end my-24'>
                            For Internship enquiries, please email mail@loveart.com with your CV and Covering Letter.
                        </div>

                    </div>


                    <Sidebar icon={<CrossIcon/>} fromSidebarNav={true}/>


                </div>
            </PrivateLayout>
        )
            ;
    }
;

export default ContactPage;
