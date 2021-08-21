import styled from "styled-components";
const TableWrapper = styled.div`
.table{
    .table_links{
        color: grey;
        font-size: 12px;
    }
    .middle{
        vertical-align: middle;
    }
    .table__head{
        font-size: 13px;
        color: #AAB5C5;
    }
    .table_img{
        width: 40px;
        height: 40px;
        border-radius: 30%;
    }
    .bg_online{
        background-image: linear-gradient(310deg,#17ad37,#98ec2d);
        font-size: 13px;
    }
    .bg_ofline{
        background-color: #96A7C6;
        font-size: 13px;    
    }
}   
.text-xs {
    line-height: 1.25;
    font-size: .75rem;
}
`;
export default TableWrapper;