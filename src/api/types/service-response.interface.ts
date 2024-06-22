export enum ResponseStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export interface ServiceResponse<T = null> {
  success: boolean;
  message: string;
  responseObject: T;
  statusCode: number;
  stack?: string;
}

export interface ServiceErrorResponse extends ServiceResponse<null> {
  success: false;
}
