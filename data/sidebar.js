import { faBuilding, faCopyright, faCreditCard, faDiceD6, faRocket, faTools, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashboardPages = [
    {
        icon: <FontAwesomeIcon className="icons" icon={faHome} />,
        title: "Dashboard",
        href: "/dashboard"
    },
    {
        icon: <FontAwesomeIcon className="icons" icon={faBuilding} />,
        title: "Tables",
        href: "/table"
    },
    {
        icon: <FontAwesomeIcon className="icons" icon={faCreditCard} />,
        title: "Billing",
        href: "/billing"
    },
    {
        icon: <FontAwesomeIcon className="icons" icon={faDiceD6} />,
        title: "Virtual Reality",
        href: "/virtual"
    },
    {
        icon: <FontAwesomeIcon className="icons" icon={faTools} />,
        title: "RTL",
        href: "/rtl"
    }
]

export const accountPages = [
    {
        icon: <FontAwesomeIcon className="icons" icon={faUser} />,
        title: "Profile",
        href: "/profile"
    },
    {
        icon: <FontAwesomeIcon className="icons" icon={faCopyright} />,
        title: "Sign in",
        href: "/sign-in"
    },
    {
        icon: <FontAwesomeIcon className="icons" icon={faRocket} />,
        title: "Sign Up",
        href: "/sign-up"
    },
]