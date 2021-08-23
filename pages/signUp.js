import React from 'react'
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignUpWrapper from '../Wrappers/SignUpWrapper';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = () => (
        <List>
            <div className="d-flex justify-content-between align-items-center">
                <ul className="d-flex py-2 px-5">
                    <li className="mx-2">Pages</li>
                    <li className="mx-2">Authentication</li>
                    <li className="mx-2">Applications</li>
                    <li className="mx-2">Ecommerce</li>
                    <li className="mx-2">Docs</li>
                </ul>
                <Button variant="contained" className="rounded-pill bbuy me-3" color="secondary">
                   <small> Buy now</small>
                </Button>
            </div>
        </List>
    );
    return (
        <SignUpWrapper>
            <div className="p-3">
                <div className=" big-container container-fluid d-block text-white p-5 w-100 rounded bg-warning bgi">
                    <div className="d-flex justify-content-between">
                        <p className="fw-bold">Soft UI Dashboard</p>
                        <ul className="d-lg-flex d-none d-lg-block">
                            <li>Pages</li>
                            <li>Authentication</li>
                            <li>Applications</li>
                            <li>Ecommerce</li>
                            <li>Docs</li>
                        </ul>
                        <Button variant="contained" className="rounded-pill px-5 bbuy d-none d-lg-block" color="secondary">
                            BUY NOW
                        </Button>
                        <div className="bars_header  d-block d-lg-none">
                            {['top'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <Button onClick={toggleDrawer(anchor, true)}><FontAwesomeIcon className="text-white" icon={faBars} /></Button>
                                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center col-lg-5 mx-auto mt-5">
                            <h1>Welcome!</h1>
                            <p>Use these awesome forms to login or create new account in your project for free.</p>
                        </div>
                    </div>
                </div>
                <div className="container small-container ">
                    <div className="row text-dark text-center">
                        <div className="col-md-7 col-lg-5 col-xl-4 mx-auto">
                            <div className="card shadow rounded p-3">
                                <h5>Register with</h5>
                                <div className="row px-5 mt-3">
                                    <a href="https://www.facebook.com/" className="col-3 mx-auto border p-2 rounded"><FontAwesomeIcon className="fs-2 text-primary" icon={faFacebook} /></a>
                                    <a href="https://www.apple.com/" className="col-3 mx-auto border p-2 rounded"><FontAwesomeIcon className="fs-2" icon={faApple} /></a>
                                    <a href="https://www.google.com/" className="col-3 mx-auto border p-2 rounded"><FontAwesomeIcon className="fs-2 text-danger" icon={faGoogle} /></a>
                                </div>
                                <p className="mx-auto text-secondary mt-3">or</p>
                                <input type="text" placeholder="Name" className="mt-3 p-2 rounded border" />
                                <input type="email" placeholder="E-mail" className="mt-3 p-2 rounded border" />
                                <input type="password" placeholder="Password" className="mt-3 p-2 rounded border" />
                                <div className="d-flex justify-content-center align-items-center my-3 mx-0">
                                    <input type="checkbox" />
                                    <p className="mb-0 ms-2">I agree the <a className="fw-bold" href="#">Terms and Conditions</a></p>
                                </div>
                                <Button className="mt-1 rounded text-white bsign p-2">SIGN UP</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SignUpWrapper>
    )
}

export default SignUp;
