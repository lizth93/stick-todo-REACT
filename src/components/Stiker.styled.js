import styled from "styled-components";
import Sticker from "./Sticker";

export default styled(Sticker)`
  border: 3px solid white;
  font-size: 1.4rem;
  background-color: #12b886;
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

  .btn-box {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;
