import Main from "./Main";
import styled from "styled-components";

export default styled(Main)`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 35rem));
    align-items: center;
    justify-content: center;
    row-gap: 1vh;
    column-gap: 2vh;
    margin: 2rem 2rem -1rem 2rem;
  }
`;
