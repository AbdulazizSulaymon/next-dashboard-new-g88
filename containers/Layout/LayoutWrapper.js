import styled from 'styled-components';

const padding = "20px";

const LayoutWrapper = styled.div`
  display: flex;
  padding: ${padding};
  min-height: 100vh;

    .logo{
        height: 30px;
    }

  .sidebar{
        width: 0;
        flex-shrink: 0;
        padding: ${padding} 0;
        /* background-color: white; */
        box-shadow:  none !important;
        border-radius: 10px;
        position: sticky;
        top: 0;
        overflow-y: auto;
        margin-right: 20px;

        &.show{
            width: 260px;
            padding: ${padding};
        }

        ul{
            li{
                a{
                    .icon{
                        /* background-image: linear-gradient(310deg ,#e9ecef,#e9ecef); */
                        background-color: white !important;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: black !important;
                    }

                    color: rgb(147, 154, 161) !important;
                }
            }
        }
  }
  .rightside{
      flex: 1;

      header{
        padding: ${padding};
        background-color: white;
        border-radius: 10px;
        position: sticky;
        top: 0;
      }
      .content{
        margin-top: 10px;
        padding: ${padding};
      }
  }
`;

export default LayoutWrapper;