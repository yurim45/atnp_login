import React from "react";
import styled from "styled-components";
import { flexSet, description } from "../styles/variable";

const Page404 = ({}) => {
  return (
    <Page>
      <div className='title'>
        <h1>404 Not Found</h1>
        <p>해당 페이지를 찾을 수 없습니다.</p>
      </div>
      <main>
        <img
          alt='404 Not Found'
          src='https://static.oqupie.com/images/site/404.svg'
        />
        <h2>죄송합니다. 해당 페이지를 찾을 수 없습니다.</h2>
        <p>
          OQUPIE 는 이 현상이 반복적으로 나타날 경우 자동으로 개발자에게 전달해
          준답니다.
        </p>
      </main>
    </Page>
  );
};

export default Page404;

const Page = styled.section`
  max-width: 1200px;
  margin: auto;

  .title {
    padding: 30px;

    h1 {
      font-size: 40px;
      font-weight: bold;
    }

    p {
      padding: 20px 0;
      font-size: 15px;
      color: #9b9b9b;
    }
  }
  main {
    ${flexSet("center", "center", "column")}

    img {
      width: 325px;
      margin-bottom: 20px;
    }

    h2 {
      color: #4a4a4a;
      font-size: 21px;
    }

    p {
      padding: 12px 0;
      color: #929292;
      font-size: 13px;
    }
  }
`;
