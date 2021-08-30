# README.md

# nestjs 초기 세팅

- nestjs 설치
- resource, auth, decorators, guards, interceptors, settings로 src 폴더 구조 정리
  - resource에는 각 API에 필요한 리소스 별 정리
  - auth는 auth module과 service를,
  - decorators
  - guards 에는 guard들과 각 전략을 저장할 strategies 폴더
  - interceptors
  - settings
- swagger 사용, settings에 함수 형태로 만든 다음 main.ts에서 호출
- morgan 사용 / url 경로는 api 호출 시만 사용되도록 조정
  - custom한 Logger를 사용하여 winston에 이용
- tsconfig
  - include에는 src/ 경로를 추가하고,
  - rootDir로 ./src를 지정
- npm run build 가 정상 동작하는지 테스트
- typeorm config
  - configuration 때문에라도, useFactory를 사용해 작성한다.
- repository
- passport-local
- cors : cross origin을 허용하는 미들웨어
- helmet : 웹 취약성으로부터 앱 보호를 위한 미들웨어
- csurf : 사이트 요청 위조를 방지하기 위한 미들웨어, 세션 사용 시에만.
- throttler : 무차별 대입 공격 방지를 위한 미들웨어
