// const express = require('express') //common JS
import express from 'express'; // ES6(import 불러오는 방식으로 요즘 주로 사용)
import { tempRouter } from './routes/temp.route.js';
import { response } from './config/response.js';
import { status } from './config/response.status.js';
import { BaseError } from './config/error.js';
import { userRouter } from './routes/user.route.js';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
import configDotenv from 'dotenv';

configDotenv.config(); // .env 파일 사용 (환경 변수 관리)

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

app.use('/user', userRouter);

app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// router setting
app.use('/temp', tempRouter);
app.use('/user', userRouter);

//404 에러 핸들
app.use((req, res, next) => {
  const err = new BaseError({ status: status.NOT_FOUND, message: 'Not Found' });
  next(err);
});

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack)

  // 템플릿 엔진 변수 설정
  res.locals.message = err.message;
  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.data.status || 500).send(response(err.data));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

