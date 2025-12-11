export class ApiResponse<T> {
  constructor(
    public success: boolean,
    public data: T | null = null,
    public message: string = ""
  ) {}
}
