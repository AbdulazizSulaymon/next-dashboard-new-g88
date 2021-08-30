import Button from "@material-ui/core/Button";
import { faBars, faBaseballBall } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SignInWrapper from "../Wrappers/SignInWrapper";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

const SignIn = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <List>
      <div className=" d-flex justify-content-between align-items-center p-2 rounded-pill shadow nav">
        <p className="fw-bold p-0 m-0">Soft UI Dashboard</p>
        <ul className="d-flex py-2 px-5">
          <li className="mx-2">Dashboard</li>
          <li className="mx-2">Profile</li>
          <li className="mx-2">Sign Up</li>
          <li className="mx-2">Sign In</li>
        </ul>
        <Button variant="contained" className="rounded-pill px-5">
          FREE DOWNLOAD
        </Button>
      </div>
    </List>
  );

  return (
    <SignInWrapper>
      <div className="bac"></div>
      <div className="container p-2">
        <div className="d-none d-lg-flex d-flex justify-content-between align-items-center p-2 rounded-pill shadow nav">
          <p className="fw-bold p-0 m-0">Soft UI Dashboard</p>
          <ul className="d-flex py-2 px-5">
            <li className="mx-2">Dashboard</li>
            <li className="mx-2">Profile</li>
            <li className="mx-2">Sign Up</li>
            <li className="mx-2">Sign In</li>
          </ul>
          <Button variant="contained" className="rounded-pill px-5">
            FREE DOWNLOAD
          </Button>
        </div>
        <div className="d-block d-lg-none">
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <FontAwesomeIcon className="text-dark " icon={faBars} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>

        <div className="clas">
          <h3>Welcome back</h3>
          <p>Enter your email and password to sign in</p>
        </div>
        <div className="py-5">
          <ul className="d-flex justify-content-center mt-5">
            <li>
              <Link href="/">
                <a className="button-link">Company</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Team</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Pricing</a>
              </Link>
            </li>
          </ul>
          <ul className="d-flex justify-content-center mt-5">
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faBaseballBall}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
          </ul>
          <p className="text-secondary text-center mt-4">
            Copyright © 2021 Soft by Creative Tim.
          </p>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
