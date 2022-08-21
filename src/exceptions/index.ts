export class CustomException extends Error {
  public id: string;
  public message: string;

  constructor(id: string, message: string = '일시적인 오류가 발생했어요') {
    super(message);
    this.id = id;
    this.message = message;
  }
}
