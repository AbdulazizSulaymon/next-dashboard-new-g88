import React from 'react'
import Layout from '../containers/Layout';
import Link from "next/link";
import TableWrapper from '../Wrappers/TabbleWrapper';
import TableData from '../data/TableData';
import { Button } from '@material-ui/core';

const table = () => {
    return (
        <Layout>
            <TableWrapper>
                <div className="myshadow p-3 rounded">
                    <h4 className="fw-bold">Authors table</h4>

                    <table class="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th><span className="table__head">AUTHOR</span></th>
                                <th><span className="table__head">FUNCTION</span></th>
                                <th><span className="table__head">STATUS</span></th>
                                <th><span className="table__head">EMPLOYED</span></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableData.map((v, i) => <tr>
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div>
                                            <img src={v.img} class="table_img me-3" alt="user1" />
                                        </div>
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm ">{v.name}</h6>
                                            <Link href="#"><a className="table_links m-0 text-xs text-secondary mb-0">{v.social}</a></Link>
                                        </div>
                                    </div>
                                </td>
                                <td className="middle">
                                    <p className="text-xs mb-0 text-black-50 fw-bold">{v.function.job}</p>
                                    <p className="text-xs mb-0 text-secondary ">{v.function.scills}</p>
                                </td>
                                <td className="middle">
                                    {v.status ? <div className="bg_online w-50 rounded p-1">
                                        <p className="text-center text-white mb-0">ONLINE</p>
                                    </div> : <div className="bg_ofline w-50 rounded p-1">
                                        <p className="text-center text-white mb-0">OFLINE</p>
                                    </div>}
                                </td>
                                <td className="middle table_links mb-0 table_links fw-bold">{v.employed}</td>
                                <td>
                                    <Button color="secondary">Edit</Button>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </TableWrapper>
        </Layout>
    )
}

export default table;
