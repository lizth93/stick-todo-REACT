import styled from "styled-components";
import Notification from "./Notification";

export default styled(Notification)`
  .notification {
    width: 100%;
    height: 3rem;
    background-color: #1a8ed1;
    display: flex;
    justify-content: center;
    padding: 0.5rem 10%;
    align-items: center;
    color: white;
  }

  .notification h2,
  .notification p {
    font-size: 1rem;
    margin: 0.2rem;
  }

  .error {
    background-color: #690000;
  }

  .success {
    background-color: #1ad1b9;
  }
`;
