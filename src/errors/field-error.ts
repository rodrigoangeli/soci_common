import { CustomError } from "./custom-error";

export class FieldError extends CustomError {
  statusCode = 400;

  // Constructor now accepts an array of errors
  constructor(public errors: { message: string; field: string }[]) {
    super("Field validation error");

    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, FieldError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.message, field: err.field };
    });
  }
}
