import styled from "styled-components";
import NavigationHeader from "./NavigationHeader";

export default styled(NavigationHeader)`
  .navigation__item {
    position: relative;
    background-color: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navigation__list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4.8rem;
    fill: none;
    stroke: white;
    color: #e3fafc;
    justify-content: center;
  }
  .main-nav-link:link,
  .main-nav-link:visited {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 500;
    color: #dee2e6;
    transition: all 0.3s;
    background-color: transparent;
  }

  .main-nav-link:hover,
  .main-nav-link:active {
    color: #fff;
  }

  .btn-icon-new,
  .btn-icon-trash {
    height: 2.6rem;
    width: 2.6rem;
    color: #e3fafc;
    fill: #e3fafc;
  }

  .btn-box {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;
