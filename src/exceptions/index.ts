export class CustomException extends Error {
  public message: string;

  constructor(message: string = '일시적인 오류가 발생했어요') {
    super(message);
    this.message = message;
  }
}
