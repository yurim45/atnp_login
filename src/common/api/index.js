import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL;

export const getApi = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

// interceptors: then이나 catch로 처리되기 전에 요청이나 응답을 가로챌 수 있다
// response: 응답 인터셉터 추가 (request: 요청 인터셉터 추가)
//
getApi.interceptors.response.use(
  function (response) {
    // response 응답 데이터 가공
    return response;
  },
  function (error) {
    // error 오류 응답 처리
    const resp = error.response;
    try {
      console.warn(`=========== AXIOS ERROR [${resp?.status}] ===========`);
      console.warn('uri           : ' + resp?.config?.url);
      console.warn('method        : ' + resp?.config?.method);
      if (resp?.config?.data) {
        console.warn(
          'request data  : \n' +
            JSON.stringify(JSON.parse(resp?.config?.data), null, 2)
        );
      }
      console.warn(
        'Response ==============================\n' +
          JSON.stringify(resp.data, null, 2)
      );
    } catch (e) {}
  }
);

// JSON.stringify(value, replacer, space)
// value(필수): JSON 문자열로 변환할 값이다.(배열, 객체, 또는 숫자, 문자 등이 될 수 있다.)
// replacer(선택): 함수 또는 배열이 될 수 있다. 이 값이 null 이거나 제공되지 않으면, 객체의 모든 속성들이 JSON 문자열 결과에 포함된다.
// space(선택): 가독성을 목적으로 JSON 문자열 출력에 공백을 삽입하는 데 사용
