import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 422px;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    158deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );

  h3 {
    margin: 10px 0px 10px 50px;
    width: 80%;
    padding-bottom: 20px;
    text-align: left;
    color: black;
    font-size: 25px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  border: 1px solid red;
  input {
    flex: 1;
    padding: 5px;
    font-size: 1rem;
    color: darkblue;
    border-radius: 5px;
    &::placeholder {
      color: darkgreen;
      background-color: skyblue;
      font-weight: bold;
    }
  }

  button {
    width: 150px;
    background-color: blueviolet;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;

    &:hover {
      background-color: #3e8e41;
    }
    &:active {
      background-color: #3e8e41;
      transform: translateY(2px);
    }
  }
`;
