import styled from "styled-components";
import ButtonNavigation from "./ButtonNavigation";

export default styled(ButtonNavigation)`
  .btn,
  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3rem;

    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    background-color: #3bc9db;
    margin-top: 2rem;
    color: #fff;
    text-decoration: none;
    background-color: #3bc9db;
    transition: all 0.2s;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background-color: #1098ad;
    color: #fff;
  }
  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  .btn:active,
  .btn:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  .btn-restore-all {
    padding: 1rem 2rem;
  }

  .btn-box {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;
