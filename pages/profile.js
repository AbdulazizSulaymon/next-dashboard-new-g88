import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import Layout from "../containers/Layout";
import { AppData, Application, Check, Conversations, Information } from "../data/AppData";
import ProfileWrapper from "../Wrappers/ProfileWrapper";

const profile = () => {
  const router = useRouter();
  return (
    <Layout>
      <ProfileWrapper>
        <div className="container-fluid position-relative">
          <div className="page-header">
            <span class="mask bg-gradient-primary opacity-6"></span>
          </div>
          <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
            <div className="row gx-4">
              <div className="col-auto">
                <div className="avatar avatar-xl position-relative d-flex">
                  <img
                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/bruce-mars.jpg"
                    alt="profile_img"
                    className="border-radius"
                  />
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1 User">Alec Thompson</h5>
                  <p class="mb-0 font-weight-bold text-sm user">
                    CEO / Co-Founder
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div className="nav-wrapper position-relative end-0">
                  <ul
                    className="nav nav-pills nav-fill p-1 bg-transparent d-flex"
                    role="tablist"
                  >
                    {AppData.map((v) => (
                      <li className="nav-item">
                        <a
                          className={`nav-link mb-0 px-0 py-1${
                            router.pathname === v.active ? "active_link" : ""
                          }`}
                          data-bs-toggle="tab"
                          aria-selected="false"
                          role="tab"
                        >
                          {v.active}
                          <FontAwesomeIcon icon={v.icon} />
                          <span className="ms-2">{v.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 mt-4">
          <div className="row">
            <div className="col-12 col-xl-4 mb-3">
              <div className="card h-100 mb-3">
                <div className="card-header p-3">
                  <h6 className="mb-0 color">Platform Settings</h6>
                </div>
                <div className="card-body p-3">
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder">
                    Account
                  </h6>
                  <ul className="d-flex list-group">
                    {Check.map((v) => (
                      <li className="list-group-item border-0 px-0 p-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                          />
                          <label
                            for="flexSwitchDefault"
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                          >
                            {v.title}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">
                    Application
                  </h6>
                  <ul className="d-flex list-group">
                    {Application.map((v) => (
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            class="form-check-input ms-auto"
                            type="checkbox"
                          />
                          <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0">
                            {v.title}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-3">
              <div className="card h-100">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-md-8 d-flex align-items-center">
                      <h6 class="mb-0">Profile Information</h6>
                    </div>
                    <div className="col-md-4 text-end">
                      <FontAwesomeIcon icon={faUserEdit} />
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  <p className="text-sm">
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </p>
                  <hr className="horizontal gray-light my-4"></hr>
                  <ul className="list-group">
                    {Information.map((v) => (
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong>{v.strong}</strong> {v.title}
                      </li>
                    ))}
                    <li className="list-group-item border-0 ps-0 text-sm">
                      <strong>Social: </strong>
                      <FontAwesomeIcon icon={faFacebook} className="ms-2" />
                      <FontAwesomeIcon icon={faTwitter} className="ms-2" />
                      <FontAwesomeIcon icon={faInstagram} className="ms-2" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-3">
              <div className="card h-100">
                <div className="card-header pb-0 p-3">
                  <h6 class="mb-0">Conversations</h6>
                </div>
              </div>
              <div className="card-body p-3">
                  <ul className="list-group">
                      {Conversations.map ((v) => (
                          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                              <div className="me-3">
                                  <img src={v.img} alt="kal" className="border-radius-lg shadow avatar" />
                              </div>
                              <div className="d-flex align-items-start flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">{v.name}</h6>
                                  <p className="mb-0 text-xs">{v.title}</p>
                              </div>
                              <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto text-uppercase" href="#">{v.reply}</a>
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
            <div className="col-12 mt-4"></div>
          </div>
          <div className="footer pt-3"></div>
        </div>
      </ProfileWrapper>
    </Layout>
  );
};

export default profile;
