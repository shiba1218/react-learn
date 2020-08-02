/**@jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import React from 'react'
import style from './style'
import Head from 'next/Head'

const Top: React.FC = () => {
  return (
    <>
      <Global styles={css`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}
      />
      <Head>
          <link
            href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
            rel="stylesheet"
          ></link>
      </Head>
      <div css={style}>
        <header>
          <div className="header">
            <div className="header-logo">
              <i className="fas fa-flag fa-2x"></i>
            </div>
          </div>
        </header>
        <main>
          <div>apple</div>
          <div className="main">
            <div>
              <p>ツイートしよう</p>
            </div>
            <div>
              <textarea name="text" className="textArea"/>
              <button type="submit" name="ツイート" />
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default Top