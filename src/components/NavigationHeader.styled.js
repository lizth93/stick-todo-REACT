import styled from "styled-components";
import NavigationHeader from "./NavigationHeader";

export default styled(NavigationHeader)`
  .navigation__item {
    position: relative;
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
    :link,
    :visited {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.8rem;
      text-decoration: none;
      font-weight: 500;
      color: #dee2e6;
      transition: all 0.3s;
    }

    :hover,
    :active {
      color: #fff;
    }
  }

  .btn-icon-new,
  .btn-icon-trash {
    height: 2.6rem;
    width: 2.6rem;
    color: #e3fafc;
    fill: #e3fafc;
  }

  .trash {
    background-color: #e3fafc;
    max-height: 85vh;
    padding: 3rem 3rem;
    position: absolute;
    color: #555;
    font-size: 1.5rem;
    right: 0rem;
    z-index: 10;
    min-width: 40rem;

    border-radius: 3px;
    box-shadow: 0 0.8rem 5rem 2rem rgba(134, 156, 160, 0.342);
    top: 4.6rem;
    text-align: center;
    visibility: hidden;
    opacity: 0;

    transition: all 0.1s;
    overflow-y: auto;

    &-stroke {
      stroke: #e3fafc;
    }

    &-items {
      display: flex;
      gap: 1rem;
    }
  }

  .trash:hover,
  .nav__btn--trash:hover + .trash {
    visibility: visible;
    opacity: 1;
  }

  .btn-icon-smile {
    fill: #1098ad;
    stroke: #1098ad;
    visibility: visible;
    opacity: 1;
    z-index: 20;
  }
  .trash__list {
    list-style: none;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    display: none;
  }
`;
