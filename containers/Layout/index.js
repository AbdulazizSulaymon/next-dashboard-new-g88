import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { dashboardPages } from '../../data/sidebar'
import LayoutWrapper from './LayoutWrapper'
import Link from "next/link"

const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            <div className="sidebar myshadow show">
                <div className="d-flex align-items-center">
                    <img src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct.png"
                        className="logo me-2" alt="" />
                    <p className="m-0 soft">Soft UI Dashboard</p>
                </div>
                <hr className="horizontal dark mt-4" />
                <div className="line"></div>
                <ul className="mt-4">
                    {dashboardPages.map(v => <li key={v.href} className="mb-4">
                        <Link href={v.href}>
                            <a className="item d-flex align-items-center">
                                <div className="icon rounded shadow">
                                    {v.icon}
                                </div>
                                <p className="ms-3 mb-0">
                                    {v.title}
                                </p>
                            </a>
                        </Link>
                    </li>)}
                </ul>
                <p class="text-uppercase account">Account pages</p>
            </div>
            <div className="rightside ">
                <header>
                    <FontAwesomeIcon icon={faBars} />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </LayoutWrapper>
    )
}

export default Layout
