// temp.controller.js

import { status } from '../config/response.status.js';
import { getTempData, checkFlag } from '../services/temp.service.js';
import { response } from '../config/response.js';

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};

// export const tempException = (req, res, next) => {
//   console.log("/temp/exception/"+req.params.flag); //req.params.flag는 temp.route.js의 flag 파라미터를 얻어온다
//   return res.send(response(status.SUCCESS, checkFlag(req.params.flag)));
// }

export const tempException = (req, res, next) => {
  try {
      console.log("/temp/exception/" + req.params.flag); // req.params.flag는 temp.route.js의 flag 파라미터를 얻어온다
      const result = checkFlag(req.params.flag);
      res.send(response(status.SUCCESS, result));
  } catch (error) {
      next(error); // 에러 발생 시 다음 미들웨어로 에러를 전달합니다.
  }
};
