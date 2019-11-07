import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: #4a90e2;

  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    width: 100%;
    max-width: 1024px;
    color: #fff;

    display: flex;
    justify-content: space-between;

    a.current-user {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-right: 4px;
        margin-top: 3px;
      }
    }
  }
`;
