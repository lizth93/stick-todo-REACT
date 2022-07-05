import styled from "styled-components";
import StickerOnTrash from "./StickerOnTrash";

export default styled(StickerOnTrash)`
  border: 3px solid white;
  font-size: 1.4rem;
  background-color: #0ca678;
  border: 0px solid #fff;
  border-radius: 0.5em;
  padding: 2rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  min-height: 12rem;
  display: flex;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  margin-bottom: 2rem;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  &.over {
    border: 3px dotted #0ca678;
  }

  .header-stick {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    position: absolute;
    padding: 1rem;
    top: 1rem;
    right: 1rem;
  }

  .icon-stick {
    width: 2.2rem;
    height: 2.2rem;
    fill: #fff;
    background-color: transparent;
    border-radius: 20%;
    stroke: #777;

    &:hover {
      fill: #20c997;
      transform: scale(1.5);
    }

    &:active {
      fill: #38d9a9;
      transform: scale(1);
    }
  }

  .text-content {
    margin-top: 2rem;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.1rem;
    -webkit-text-stroke: 0.4px #333;
  }

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
    background-color: #0ca678;
    margin-top: 2rem;
    color: #fff;
    text-decoration: none;
    background-color: #0ca678;
    transition: all 0.2s;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background-color: #087f5b;
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
