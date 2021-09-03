import { LoggerService } from '@nestjs/common';

const log = console.log;

export class CustomLoggerService implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    // NOTE : winston, aws S3 등과 연동하여 log를 수집하는 기능을 넣는다.
    log(`log : ${optionalParams} ${message}`);
  }

  // 프로그램을 디버깅하기 위한 정보 지정
  debug(message: any, ...optionalParams: any[]) {
    // NOTE : winston, aws S3 등과 연동하여 log를 수집하는 기능을 넣는다.
    log(`debug : ${optionalParams} ${message}`);
  }

  // 처리가능한 문제, 향후 시스템에 에러의 원인이 될 수 있는 경고성 메시지
  warn(message: any, ...optionalParams: any[]) {
    // NOTE : winston, aws S3 등과 연동하여 log를 수집하는 기능을 넣는다.
    log(`warn : ${optionalParams} ${message}`);
  }

  // 요청을 처리하는 도중 문제가 발생한 경우, 개발자가 호출되어야 하는 수준
  error(message: any, ...optionalParams: any[]) {
    // NOTE : winston, aws S3 등과 연동하여 log를 수집하는 기능을 넣는다.
    // NOTE : 개발자를 호출할 수 있는 기능을 추가한다.
    log(`error : ${optionalParams} ${message}`);
  }

  // 어플리케이션 작동이 불가능한 수준의 문제가 발생한 경우
  fatal(message: any, ...optionalParams: any[]) {
    // NOTE : winston, aws S3 등과 연동하여 log를 수집하는 기능을 넣는다.
    // NOTE : 개발자를 호출할 수 있는 기능을 추가한다.
    log(`fatal : ${optionalParams} ${message}`);
  }
}
