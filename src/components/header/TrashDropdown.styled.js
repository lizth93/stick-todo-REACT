import styled from "styled-components";
import TrashDropdown from "./TrashDropdown";

export default styled(TrashDropdown)`
  .main-nav-link {
    background-color: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.8rem;
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
      align-items: center;
      gap: 1rem;
      color: #e3fafc;
    }
    &-items:hover {
      color: #fff;
    }
  }

  .btn-icon-trash:hover {
    fill: #fff;
  }

  .trash:hover,
  .nav__btn--trash:hover + .trash {
    visibility: visible;
    opacity: 1;
  }
  .trash__list {
    list-style: none;
  }

  .btn-icon-smile {
    fill: #0ca678;
    stroke: #0ca678;
    visibility: visible;
    opacity: 1;
    z-index: 20;
  }
`;
