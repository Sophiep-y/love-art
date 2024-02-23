import {Dashboard} from "../assets/svg/Dashboard";
import {User} from "../assets/svg/User";
import {Vehicle} from "../assets/svg/Vehicle";
import {Zone} from "../assets/svg/Zone";
import {Thresold} from "../assets/svg/Thresold";
import {Promo} from "../assets/svg/Promo";
import {Driver} from "../assets/svg/Driver";
import {Payment} from "../assets/svg/Payment";
import {Role} from "../assets/svg/Role";
import {Permission} from "../assets/svg/Permission";
import {TipManagement} from "../assets/svg/TipManagement";
import {Settings} from "../assets/svg/Settings";
import React from "react";
import {APP_ROUTES} from "./app-routes";

export const sidebarData = [{
    label: "Dashboard", path: APP_ROUTES.dashboard, icon: <Dashboard/>,
}, {
    label: "User", path: APP_ROUTES.user, icon: <User/>,
}, {
    label: "Vehicle", path: APP_ROUTES.vehicles, icon: <Vehicle/>,
}, {
    label: "Zone", path: APP_ROUTES.zone, icon: <Zone/>
},

    {
        type: 'divider'
    },

    {
        label: 'Thresold', path: APP_ROUTES.threshold, icon: <Thresold/>
    },

    {
        label: 'Promo Code', path: APP_ROUTES.promoCode, icon: <Promo/>
    },

    {
        label: "Driver", path: APP_ROUTES.driver, icon: <Driver/>
    }, {
        label: "Payment", path: APP_ROUTES.payment, icon: <Payment/>
    }, {
        type: 'divider'
    }, {
        label: "Role", path: APP_ROUTES.role, icon: <Role/>
    }, {
        label: "Permission", path: APP_ROUTES.permission, icon: <Permission/>
    }, {
        label: "Tip Management", path: APP_ROUTES.tipManagement, icon: <TipManagement/>
    }, {
        label: "Settings", path: APP_ROUTES.settings, icon: <Settings/>
    },]
