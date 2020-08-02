import { css } from '@emotion/core'

const style = css`
  margin: 0px;
  padding: 0px;
  text-align: center;
  & .header {
    background: green;
    text-align: center;
    & .header-logo {
      align-item: center;
      justify-content: center;
      height: 50px;
      & .fa-flag {
        margin: 10px;
        color: #fff;
        &:before {
        }
      }
    }
  }

  & .textArea {
    width: 500px;
    height: 100px;
  }
`;

export default style;