import styled from "styled-components";

const color = "rgb(52, 71, 103)";
const iconColor = "rgb(60, 80, 110)";

const ProfileWrapper = styled.div`
  .color {
    color: ${color};
  }

  .page-header {
    min-height: 300px !important;
    background-image: url(https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved0.jpg);
    border-radius: 1rem;
    background-position-x: 50%;
    background-size: cover;
    position: relative;

    .mask {
      position: absolute;
      background-position: 50%;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      border-radius: 1rem;
    }

    .bg-gradient-primary {
      background-image: linear-gradient(310deg, #7928ca, #ff0080);
    }

    .opacity-6 {
      opacity: 0.6 !important;
    }
  }

  .card {
    min-width: 440px;
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
    position: relative;
    margin-top: -5%;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    -webkit-backdrop-filter: saturate(200%) blur(30px);
    backdrop-filter: saturate(200%) blur(30px);
    background-color: hsla(0, 0%, 100%, 0.8) !important;

    .User {
      font-family: "Open Sans" sans-serif;
      color: #344767;
      font-size: 20px;
    }
    .user {
      font-family: "Open Sans" sans-serif;
      color: #67748e;
      font-size: 14px;
    }
    .avatar-xl {
      width: 74px !important;
      height: 74px !important;
    }
    .border-radius {
      border-radius: 10px;
    }
  }

  .nav-wrapper {
    .nav {
      .nav-item {
        color: ${iconColor};
        .nav-link {
          color: ${color};
          opacity: 0.9;
          font-family: "Open Sans", sans-serif;
          font-size: 16px;
        }
        &:active {
          background-color: white;
          border-radius: 0.5rem;
          z-index: 3;
        }
      }
    }
  }

  .card .card-header {
    background: none;
    border: none;
  }
  .card .card-body {
    font-family: "Open Sans" sans-serif;
    padding: 1.5rem;

    .form-check-input:checked {
      background-color: rgba(58,65,111,.95);
      border-color: rgba(58,65,111,.95);
    }

    .font-weight-bolder {
      font-weight: 700 !important;
      color: ${color} !important;
      font-size: 12px;
    }
  }
`;

export default ProfileWrapper;
