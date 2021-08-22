import styled from "styled-components";

const padding = "20px";

const LayoutWrapper = styled.div`
  display: flex;
  padding: ${padding};
  min-height: 100vh;

  .logo {
    height: 30px;
  }

  .sidebar {
    width: 0;
    flex-shrink: 0;
    padding: ${padding} 0;
    /* background-color: white; */
    box-shadow: none !important;
    border-radius: 10px;
    position: sticky;
    top: 0;
    overflow-y: auto;
    margin-right: 20px;

    &.show {
      width: 260px;
      padding: 25px;
    }

    .soft {
      font-family: "Open Sans", sans-serif;
      font-size: 0.875rem;
      color: rgb(52, 71, 103);
    }

    hr.horizontal.dark {
      background-image: linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.4),
        transparent
      );
    }

    hr.horizontal {
      background-color: transparent;
    }

    .account {
      color: rgb(52, 71, 103);
      font-size: 13px;
      font-weight: 700;
      opacity: 0.6 !important;
    }

    ul {
      li {
        a {
          .icon {
            /* background-image: linear-gradient(310deg ,#e9ecef,#e9ecef); */
            background-color: white !important;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            .icons {
              width: 13px;
              height: 13px;
              color: rgb(60, 80, 110);
            }
          }
          color: rgb(52, 71, 103);
          opacity: 0.9;
          font-family: "Open Sans", sans-serif;
          font-size: 14px;
        }
      }
    }
  }
  .rightside {
    flex: 1;

    header {
      padding: ${padding};
      background-color: white;
      border-radius: 10px;
      position: sticky;
      top: 0;
    }
    .content {
      margin-top: 10px;
      padding: ${padding};
    }
  }
`;

export default LayoutWrapper;
