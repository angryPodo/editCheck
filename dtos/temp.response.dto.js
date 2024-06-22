// temp.response.dto.js

export const tempResponseDTO = (data) => {
  return {"testString" : data}; //getTempData가 실행된 후 dto를 통해 만들어진 testString: this is TEst >.0라는 json데이터가 응답 데이터의 result에 들어감
}

export const flagResponseDTO = (flag) => {
  return {"flag" : flag};
}