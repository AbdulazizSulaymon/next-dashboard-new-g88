import React from "react";
import Layout from "../containers/Layout";
import Link from "next/link";
import TableWrapper from "../Wrappers/TabbleWrapper";
import TableData from "../data/TableData";
import { Button } from "@material-ui/core";

const table = () => {
  return (
    <Layout>
      <TableWrapper>
        <div className="myshadow p-3 rounded">
          <h4 className="fw-bold">Authors table</h4>

          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th>
                  <span className="table__head">AUTHOR</span>
                </th>
                <th>
                  <span className="table__head">FUNCTION</span>
                </th>
                <th>
                  <span className="table__head">STATUS</span>
                </th>
                <th>
                  <span className="table__head">EMPLOYED</span>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((v, i) => (
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img src={v.img} class="table_img me-3" alt="user1" />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{v.name}</h6>
                        <Link href="#">
                          <a className="table_links m-0 text-xs text-secondary mb-0">
                            {v.social}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="middle">
                    <p className="text-xs mb-0 text-black-50 fw-bold">
                      {v.function.job}
                    </p>
                    <p className="text-xs mb-0 text-secondary ">
                      {v.function.scills}
                    </p>
                  </td>
                  <td className="middle">
                    {v.status ? (
                      <div className="bg_online w-50 rounded p-1">
                        <p className="text-center text-white mb-0">ONLINE</p>
                      </div>
                    ) : (
                      <div className="bg_ofline w-50 rounded p-1">
                        <p className="text-center text-white mb-0">OFLINE</p>
                      </div>
                    )}
                  </td>
                  <td className="middle table_links mb-0 table_links fw-bold">
                    {v.employed}
                  </td>
                  <td>
                    <Button color="secondary">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TableWrapper>
    </Layout>
  );
};
import Layout from '../containers/Layout';
import Link from "next/link";
import TableWrapper from '../Wrappers/TabbleWrapper';
import { Button } from '@material-ui/core';
import {setTable, setTable2} from '../redux/Action/TableAction';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";

const table = () => {
    useEffect(() => {
        setTable();
        setTable2();
    }, []);
    const data = useSelector(state => state.TableReducer.tableData);
    const data2 = useSelector(state => state.TableReducer.tableData2);
    console.log(data2);
    return (
        <Layout>
            <TableWrapper>
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="tableShadow p-3 rounded">
                            <h5 className="">Authors table</h5>

                            <table className="table align-items-center mb-0">
                                <thead>
                                <tr>
                                    <th className={"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}>AUTHOR</th>
                                    <th className={"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-2"}>FUNCTION</th>
                                    <th className={"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}>STATUS</th>
                                    <th className={"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}>EMPLOYED</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((v, i) => <tr key={i}>
                                    <td>
                                        <div className="d-flex px-2 py-1">
                                            <div>
                                                <img src={v.img} className="table_img me-3" alt="user1" />
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm ">{v.name}</h6>
                                                <Link href="#"><a className="m-0 text-xs text-secondary mb-0">{v.social}</a></Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">
                                        <p className="text-xs mb-0 text-black-50 fw-bold">{v.function.job}</p>
                                        <p className="text-xs mb-0 text-secondary ">{v.function.scills}</p>
                                    </td>
                                    <td className="align-middle">
                                        {v.status ? <div className="bg_online mx-auto w-50 rounded p-1">
                                            <p className="text-center text-white mb-0">ONLINE</p>
                                        </div> : <div className="bg_ofline  w-50 mx-auto rounded p-1">
                                            <p className="text-center text-white mb-0">OFLINE</p>
                                        </div>}
                                    </td>
                                    <td className="align-middle mb-0 text-center text-secondary  fw-bold"><span className={"text-xs"}>{v.employed}</span></td>
                                    <td className={"align-middle text-center"}>
                                        <Button>Edit</Button>
                                    </td>
                                </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="tableShadow p-3 rounded">
                            <h5 className="">Project table</h5>

                            <table className="table align-items-center mb-0">
                                <thead>
                                <tr>
                                    <th className={"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}>PROJECT</th>
                                    <th className={"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-2"}>BUDGET</th>
                                    <th className={"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}>STATUS</th>
                                    <th className={"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}>COMPLETION</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {data2.map((v, i) =>  <tr key={i}>
                                    <td className={"align-middle"}>
                                        <div className={"d-flex align-items-center"}>
                                            <img  className={"project_img"} src={v.img} alt=""/>
                                            <p className={"mb-0 ms-2 text-sm"}>Spotify</p>
                                        </div>
                                    </td>
                                    <td className={"align-middle"}><p className={"text-sm mb-0"}>{v.price}</p></td>
                                    <td className={"align-middle"}>
                                        <p className={"text-xs text-secondary m-0"} style={{fontWeight: "600"}}>{v.status}</p>
                                    </td>
                                    <td className={"align-middle"}>
                                        <div className={"d-flex align-items-center justify-content-center"}>
                                            <p className={"text-xs text-secondary m-0 me-3"}  style={{fontWeight: "600"}}>{v.completion}%</p>
                                            <div className={"position-relative progres_line"}>
                                                <div className={`position-absolute progres_line_info  ${v.completion > 0 && v.completion <= 30 && "bg-danger" || v.completion <= 50 && "bg-warning" || v.completion <= 80 && "bg-info"|| v.completion > 80 && "bg-success"  }`} style={{width:v.completion+"%"}}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={"align-middle"}>
                                        <FontAwesomeIcon icon={faEllipsisV}/>
                                    </td>

                                </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </TableWrapper>
        </Layout>
    )
}

export default table;
