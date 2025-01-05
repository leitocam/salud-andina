import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <p className="button__text">
          <span style={{ "--index": 0 }}>D</span>
          <span style={{ "--index": 1 }}>E</span>
          <span style={{ "--index": 2 }}>S</span>
          <span style={{ "--index": 3 }}>C</span>
          <span style={{ "--index": 4 }}>U</span>
          <span style={{ "--index": 5 }}>B</span>
          <span style={{ "--index": 6 }}>R</span>
          <span style={{ "--index": 7 }}>E</span>
          <span style={{ "--index": 8 }}> </span>
          <span style={{ "--index": 9 }}>M</span>
          <span style={{ "--index": 10 }}>Á</span>
          <span style={{ "--index": 11 }}>S</span>
        </p>
        <div className="button__circle">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon"
            width={14}
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon button__icon--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background:rgba(33, 181, 174, 0.84);
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 14px 0px 0px 0px; 
    animation: text-rotation 8s linear infinite;

    > span {
      position: absolute;
      transform: rotate(calc(25deg * var(--index))) translateY(-6px); /* Increase distance from center */
      inset: 0px 0px 0px 0px;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #fff;
    color: #21b5ad;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: #000;
    transform: scale(1.05);
  }

  .button:hover .button__icon {
    color: #000;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export default Button;
