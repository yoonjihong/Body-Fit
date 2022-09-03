import styled from 'styled-components';

export const TitleStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  .left {
    .logo {
      font-weight: 900;
      font-size: 11px;
    }

    span.bar {
      padding: 0 5px;
      font-size: 11px;
      color: rgba(0, 0, 0, 0.4);
    }

    .version {
      color: rgba(0, 0, 0, 0.5);
      font-size: 11px;
      font-weight: 100;
      padding-left: 6px;
    }
  }
`;
