import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { dashboardPages, AccoundPages } from "../../data/sidebar";
import LayoutWrapper from "./../../Wrappers/LayoutWrapper";
import { PersonIcon } from "@material-ui/icons/Person";
import { AccessAlarm } from "@material-ui/icons/AccessAlarm";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import { useRouter } from "next/dist/client/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutWrapper>
      <div className="sidebar show myshadow me-2">
        <Link href="/">
          <a className="d-flex align-items-center p-3 pb-0">
            <img
              className="photo"
              src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct.png"
              alt=""
            />
            <p className="mb-0 ms-2 fw-bold">Soft Ui Dashboard</p>
          </a>
        </Link>
        <hr />
        <ul className="my-4">
          {dashboardPages.map((v) => (
            <li
              className={`mb-3 ms-2 ${
                router.pathname === v.href ? "active" : ""
              }`}
              key={v.href}
            >
              <Link href={v.href}>
                <a className="item d-flex align-items-center">
                  <div className="icon rounded shadow">{v.icon}</div>
                  <p className="ms-3 mb-0"> {v.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="my-4">
          <small className="text-secondary mb-5">ACCOUNT PAGES</small>
          {AccoundPages.map((v) => (
            <li className="my-3 ms-2" key={v.href}>
              <Link href={v.href}>
                <a className="item d-flex align-items-center">
                  <div className="icon rounded shadow">{v.icon}</div>
                  <p className="ms-3 mb-0"> {v.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="cardBox mt-5">
          <div className="full_back"></div>
          <div className="card_body">
            <div className="rounded bg-white w-25 my-3 text-dark text-center ms-3">
              <PersonIcon  />
            </div>
            <div className="docs_info ms-4">
              <h6 className="texts">Need help?</h6>
              <p className="fw-bold texts">Please check our docs</p>
              <Button className="my-2 rounded ms-2" variant="contained">
                Documentation
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <Button className="btn-gradient text-white">Upgrade to pro</Button>
        </div>
      </div>
      <div className="rightside ">
        <header className="">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex align-items-center">
                <Link href="/">
                  <a className="text-secondary">Pages</a>
                </Link>
                <p className="mb-0 ms-2">/ Dashboard</p>
              </div>
              <p className="fw-bold">Dashboard</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center input-group">
                <span className="input-group-text">
                <AccessAlarm />
                </span>
                <input className="input" placeholder="Type here..."></input>
              </div>
              <div className="d-flex align-items-center mx-3">
                <PersonIcon />
                <p className="mb-0 fw-bold">SignIn</p>
              </div>
              <NotificationsIcon className="me-2" />
              <SettingsIcon className="" />
            </div>
          </div>
        </header>
        <div className="content">{children}</div>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
