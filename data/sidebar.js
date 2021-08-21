import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashboardPages = [
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title: "Dashboard",
        href: "/dashboard"
    },
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title: "Tables",
        href: "/table"
    },
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title: "Billing",
        href: "/billing"
    }
]

export const accountPages = [
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title: "Profile",
        href: "/profile"
    },
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title: "Sign in",
        href: "/sign-in"
    },
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title: "Sign Up",
        href: "/sign-up"
    },
]