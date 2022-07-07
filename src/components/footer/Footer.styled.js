import Footer from "./Footer";
import styled from "styled-components";

export default styled(Footer)`
  color: #fff;
  padding: 2rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #0ca678;

  .logo-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .title-app {
    font-size: 2rem;
    font-family: inherit;
  }
  .copyrigth {
    display: flex;
    font-size: 1.2rem;
    line-height: 1.6rem;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 0.5rem;
    text-align: center;
  }

  .icon-github {
    fill: #fff;
    width: 2rem;
    height: 2rem;
  }

  .link-github {
    text-decoration: none;
    color: #fff;
  }
`;
