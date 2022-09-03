import styled from 'styled-components';

export const StartPageStyled = styled.div`
  text-align: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .line {
    padding: 80px 0;
    font-weight: 900;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }

  .types {
    display: flex;
    background: #f1f3f6;
    border-radius: 9px;

    .type {
      font-size: 30px;
      font-weight: 900;
      cursor: pointer;
      transition: color 0.3s;
      padding: 15px 14px 12px 14px;
      border-radius: 100px;
      color: #1a1b1e;

      &.active {
        color: white;
        background: #1a1b1e;
      }
      /* color: rgba(255, 255, 255, 1); */
      /* padding: 20px 30px 14px; */
      /* background: #1a1b1e; */

      &:hover {
        /* color: #000; */
      }

      .desc {
        font-size: 14px;
      }
    }
  }
`;
