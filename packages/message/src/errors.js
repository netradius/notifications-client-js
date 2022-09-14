"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.FetchError = exports.AuthorizationError = exports.ArgumentError = void 0;
class NotificationMessageError {
    constructor(message, name, options) {
        this.name = name;
        this.message = message;
        this.stack = (new Error(message)).stack;
        this.cause = options?.cause;
    }
}
Object.setPrototypeOf(NotificationMessageError, Object.create(Error.prototype));
class ArgumentError extends NotificationMessageError {
    constructor(message, options) {
        super(message, "ArgumentError", options);
    }
}
exports.ArgumentError = ArgumentError;
class AuthorizationError extends NotificationMessageError {
    constructor(message, options) {
        super(message, "AuthorizationError", options);
    }
}
exports.AuthorizationError = AuthorizationError;
class FetchError extends NotificationMessageError {
    constructor(message, options) {
        super(message, "FetchError", options);
    }
}
exports.FetchError = FetchError;
class ResponseError extends NotificationMessageError {
    constructor(message, options) {
        super(message, "ResponseError", options);
    }
}
exports.ResponseError = ResponseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BLE1BQU0sd0JBQXdCO0lBTTdCLFlBQVksT0FBYyxFQUFFLElBQVcsRUFBRSxPQUE4QjtRQUN0RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUVoRixNQUFhLGFBQWMsU0FBUSx3QkFBd0I7SUFDMUQsWUFBWSxPQUFjLEVBQUUsT0FBcUI7UUFDaEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNEO0FBSkQsc0NBSUM7QUFFRCxNQUFhLGtCQUFtQixTQUFRLHdCQUF3QjtJQUMvRCxZQUFZLE9BQWMsRUFBRSxPQUFxQjtRQUNoRCxLQUFLLENBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRDtBQUpELGdEQUlDO0FBRUQsTUFBYSxVQUFXLFNBQVEsd0JBQXdCO0lBQ3ZELFlBQVksT0FBYyxFQUFFLE9BQXFCO1FBQ2hELEtBQUssQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRDtBQUpELGdDQUlDO0FBRUQsTUFBYSxhQUFjLFNBQVEsd0JBQXdCO0lBQzFELFlBQVksT0FBYyxFQUFFLE9BQXFCO1FBQ2hELEtBQUssQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRDtBQUpELHNDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBFcnJvck9wdGlvbnMgeyBjYXVzZTogYW55IH1cblxuLy8gQmFzZWQgb24gaHR0cHM6Ly93d3cuYmVubmFkZWwuY29tL2Jsb2cvMzIyNi1leHBlcmltZW50aW5nLXdpdGgtZXJyb3Itc3ViLWNsYXNzaW5nLXVzaW5nLWVzNS1hbmQtdHlwZXNjcmlwdC0yLTEtNS5odG1cblxuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbk1lc3NhZ2VFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cblxuY2xhc3MgTm90aWZpY2F0aW9uTWVzc2FnZUVycm9yIHtcblx0cHVibGljIG5hbWU6IHN0cmluZztcblx0cHVibGljIG1lc3NhZ2U6IHN0cmluZztcblx0cHVibGljIHN0YWNrPzogc3RyaW5nO1xuXHRwdWJsaWMgY2F1c2U6YW55fHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOnN0cmluZywgbmFtZTpzdHJpbmcsIG9wdGlvbnM6RXJyb3JPcHRpb25zfHVuZGVmaW5lZCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0XHR0aGlzLnN0YWNrID0gKG5ldyBFcnJvcihtZXNzYWdlKSkuc3RhY2s7XG5cdFx0dGhpcy5jYXVzZSA9IG9wdGlvbnM/LmNhdXNlO1xuXHR9XG59XG5cbk9iamVjdC5zZXRQcm90b3R5cGVPZihOb3RpZmljYXRpb25NZXNzYWdlRXJyb3IsIE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKSk7XG5cbmV4cG9ydCBjbGFzcyBBcmd1bWVudEVycm9yIGV4dGVuZHMgTm90aWZpY2F0aW9uTWVzc2FnZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcsIG9wdGlvbnM/OkVycm9yT3B0aW9ucykge1xuXHRcdHN1cGVyKG1lc3NhZ2UsIFwiQXJndW1lbnRFcnJvclwiLCBvcHRpb25zKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXphdGlvbkVycm9yIGV4dGVuZHMgTm90aWZpY2F0aW9uTWVzc2FnZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcsIG9wdGlvbnM/OkVycm9yT3B0aW9ucykge1xuXHRcdHN1cGVyKG1lc3NhZ2UsIFwiQXV0aG9yaXphdGlvbkVycm9yXCIsIG9wdGlvbnMpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEVycm9yIGV4dGVuZHMgTm90aWZpY2F0aW9uTWVzc2FnZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcsIG9wdGlvbnM/OkVycm9yT3B0aW9ucykge1xuXHRcdHN1cGVyKG1lc3NhZ2UsIFwiRmV0Y2hFcnJvclwiLCBvcHRpb25zKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VFcnJvciBleHRlbmRzIE5vdGlmaWNhdGlvbk1lc3NhZ2VFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6c3RyaW5nLCBvcHRpb25zPzpFcnJvck9wdGlvbnMpIHtcblx0XHRzdXBlcihtZXNzYWdlLCBcIlJlc3BvbnNlRXJyb3JcIiwgb3B0aW9ucyk7XG5cdH1cbn1cbiJdfQ==