//own
import styled from "styled-components";
import Modal from "./Modal";
import stickersImage from "./postit.jpg";

export default styled(Modal)`
  .modal {
    transition: all 0.3s;

    &__backdrop {
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;

      transition: all 0.3s;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.8);
    }

    &__content {
      font-size: 1.5rem;
      display: flex;
      background-image: linear-gradient(to right bottom, #c3fae8, #e6fcf5);
      max-height: 50rem;
      position: absolute;
      z-index: 100;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
      width: 75%;
      background-color: #fff;
      border-radius: 3px;
      overflow: hidden;
    }

    &__right {
      padding: 3vh;
      flex-grow: 2;
    }

    &-img-box {
      background-image: linear-gradient(
          to right bottom,
          rgba(150, 242, 215, 0.5),
          rgba(99, 230, 190, 0.5)
        ),
        url(${stickersImage});
      background-size: cover;
      width: 45%;
      background-position: center;
    }

    &:target {
      opacity: 1;
      visibility: visible;
    }
  }

  .modal:target .modal__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  .modal__close {
    color: #777;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 4rem;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;
    line-height: 1;
  }

  .modal__close:hover {
    color: #1098ad;
  }
  textarea {
    font-size: inherit;
    color: #777;
    margin-top: 2rem;
    padding: 0.5rem;
    width: 95%;
    height: 10rem;
    border: none;
  }
  .create-color {
    width: 15rem;
  }
`;
