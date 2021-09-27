import styled from "styled-components";

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  main {
    width: 90%;
    height: 500px;
    border: 5px solid darkblue;
  }
  h1 {
    border-bottom: 5px solid darkblue;
    margin: 0px;
    padding: 10px;
    background: rgb(29, 72, 171);
    background: linear-gradient(
      90deg,
      rgba(29, 72, 171, 1) 0%,
      rgba(124, 25, 25, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  }
  > div {
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    main {
      width: 500px;
    }
  }
`;
