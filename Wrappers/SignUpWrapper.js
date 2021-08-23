import styled from "styled-components";

const SignUpWrapper = styled.div`

    .big-container {
        height: 450px;
        padding: 0;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        background-size: cover;
        background-position: 50%;
        background-image: url('https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved14.jpg');       
        .bbuy {
            background-image: linear-gradient( 310deg,#7928ca,#ff0080);
        }
        ul {
            li {
                margin-left: 25px;
            }
        }
       
    }
    .small-container {
        margin-top: -150px;
        input {
            border: 1px solid gray;
            outline: none;
        }
        .bsign {
            background-image: linear-gradient(310deg,#141727,#3a416f);
        }
    }
`;

export default SignUpWrapper;