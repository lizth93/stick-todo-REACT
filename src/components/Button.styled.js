import styled from "styled-components";
import Button from "./Button";

export default styled(Button)`
  .btn {
    background-color: #0ca678;
    transition: all 0.2s;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3rem;
    border-radius: 10rem;
    position: relative;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;

    margin-top: 2rem;
    color: #fff;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background-color: #20c997;
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
`;
