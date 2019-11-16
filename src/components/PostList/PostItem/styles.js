import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;

  .post-header {
    display: flex;
    align-items: center;

    img.avatar {
      width: 32px;
      height: 32px;
      object-fit: contain;
      border-radius: 16px;
      margin-right: 5px;
    }

    .user-details {
      display: flex;
      flex-direction: column;

      span {
        font-family: Helvetica;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;

        &.user-name {
          font-size: 14px;
          font-weight: bold;
          color: #4a4a4a;
        }

        &.post-date {
          font-size: 11px;
          color: #9a9a9a;
        }
      }
    }
  }

  .separator {
    border-top: 1px solid #eeeeee;
    margin-bottom: 10px;
  }

  .post-content {
    width: 660px;
    height: 22px;
    color: #3e3e3e;
    margin-bottom: 10px;
    padding: 10px 0;
    height: auto;
    white-space: pre-line;
  }

  .comment-container {
    display: flex;
    padding-top: 5px;

    img.comment-avatar {
      width: 28px;
      height: 28px;
      object-fit: contain;
      border-radius: 16px;
    }

    p.comment-content {
      border-radius: 20px;
      background-color: #eeeeee;
      padding: 10px;
      margin-left: 10px;
      margin-bottom: 10px;
    }
  }
`;
