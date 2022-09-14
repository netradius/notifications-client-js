"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockReasonType = exports.AppKeyType = exports.AppKeyStatus = exports.ServiceProvider = exports.SenderStatus = exports.TemplateStage = exports.TemplateStatus = exports.CustomerStatus = exports.MessageStatus = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType["Email"] = "email";
    MessageType["Sms"] = "sms";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["Pending"] = "pending";
    MessageStatus["Success"] = "success";
    MessageStatus["Failure"] = "failure";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
var CustomerStatus;
(function (CustomerStatus) {
    CustomerStatus["Active"] = "active";
    CustomerStatus["Inactive"] = "inactive";
})(CustomerStatus = exports.CustomerStatus || (exports.CustomerStatus = {}));
var TemplateStatus;
(function (TemplateStatus) {
    TemplateStatus["Active"] = "active";
    TemplateStatus["Inactive"] = "inactive";
})(TemplateStatus = exports.TemplateStatus || (exports.TemplateStatus = {}));
var TemplateStage;
(function (TemplateStage) {
    TemplateStage["Published"] = "PUBLISHED";
    TemplateStage["Draft"] = "DRAFT";
})(TemplateStage = exports.TemplateStage || (exports.TemplateStage = {}));
var SenderStatus;
(function (SenderStatus) {
    SenderStatus["Active"] = "active";
    SenderStatus["Inactive"] = "inactive";
})(SenderStatus = exports.SenderStatus || (exports.SenderStatus = {}));
var ServiceProvider;
(function (ServiceProvider) {
    ServiceProvider["Twilio"] = "twilio";
    ServiceProvider["SendGrid"] = "sendgrid";
    ServiceProvider["EmailIntegrationTest"] = "email-integration-test";
    ServiceProvider["SmsIntegrationTest"] = "sms-integration-test";
})(ServiceProvider = exports.ServiceProvider || (exports.ServiceProvider = {}));
var AppKeyStatus;
(function (AppKeyStatus) {
    AppKeyStatus["Active"] = "active";
    AppKeyStatus["Inactive"] = "inactive";
})(AppKeyStatus = exports.AppKeyStatus || (exports.AppKeyStatus = {}));
var AppKeyType;
(function (AppKeyType) {
    AppKeyType["Messaging"] = "messaging";
    AppKeyType["Webhook"] = "webhook";
    AppKeyType["Management"] = "management";
    AppKeyType["Admin"] = "admin";
    AppKeyType["MessagingTest"] = "messaging-test";
})(AppKeyType = exports.AppKeyType || (exports.AppKeyType = {}));
var BlockReasonType;
(function (BlockReasonType) {
    BlockReasonType["Spam"] = "spam";
    BlockReasonType["Bounce"] = "bounce";
    BlockReasonType["Blocked"] = "blocked";
    BlockReasonType["OptOut"] = "optout";
    BlockReasonType["Other"] = "other";
    BlockReasonType["Manual"] = "manual";
})(BlockReasonType = exports.BlockReasonType || (exports.BlockReasonType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFtT0EsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3RCLDhCQUFlLENBQUE7SUFDZiwwQkFBVyxDQUFBO0FBQ1osQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBRUQsSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3hCLG9DQUFtQixDQUFBO0lBQ25CLG9DQUFtQixDQUFBO0lBQ25CLG9DQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUl4QjtBQUVELElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN6QixtQ0FBaUIsQ0FBQTtJQUNqQix1Q0FBcUIsQ0FBQTtBQUN0QixDQUFDLEVBSFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFHekI7QUFFRCxJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDekIsbUNBQWlCLENBQUE7SUFDakIsdUNBQXFCLENBQUE7QUFDdEIsQ0FBQyxFQUhXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBR3pCO0FBRUQsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3hCLHdDQUF1QixDQUFBO0lBQ3ZCLGdDQUFlLENBQUE7QUFDaEIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3ZCLGlDQUFpQixDQUFBO0lBQ2pCLHFDQUFxQixDQUFBO0FBQ3RCLENBQUMsRUFIVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUd2QjtBQUVELElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUMxQixvQ0FBaUIsQ0FBQTtJQUNqQix3Q0FBcUIsQ0FBQTtJQUNyQixrRUFBK0MsQ0FBQTtJQUMvQyw4REFBMkMsQ0FBQTtBQUM1QyxDQUFDLEVBTFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFLMUI7QUFFRCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdkIsaUNBQWlCLENBQUE7SUFDakIscUNBQXFCLENBQUE7QUFDdEIsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBRUQsSUFBWSxVQU1YO0FBTkQsV0FBWSxVQUFVO0lBQ3JCLHFDQUF1QixDQUFBO0lBQ3ZCLGlDQUFtQixDQUFBO0lBQ25CLHVDQUF5QixDQUFBO0lBQ3pCLDZCQUFlLENBQUE7SUFDZiw4Q0FBZ0MsQ0FBQTtBQUNqQyxDQUFDLEVBTlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFNckI7QUFFRCxJQUFZLGVBT1g7QUFQRCxXQUFZLGVBQWU7SUFDMUIsZ0NBQWEsQ0FBQTtJQUNiLG9DQUFpQixDQUFBO0lBQ2pCLHNDQUFtQixDQUFBO0lBQ25CLG9DQUFpQixDQUFBO0lBQ2pCLGtDQUFlLENBQUE7SUFDZixvQ0FBaUIsQ0FBQTtBQUNsQixDQUFDLEVBUFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFPMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKioqKioqKioqKioqKioqKioqKioqXG4vLyBDbGllbnQgVHlwZXNcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25NYW5hZ2VPcHRpb25zIHtcblx0YXV0aG9yaXphdGlvblRva2VuOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckluZm8ge1xuXHRSb2xlOiBzdHJpbmcsXG5cdEN1c3RvbWVySUQ6IHN0cmluZyxcblx0T3JnYW5pemF0aW9uTmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpS2V5UmVzdWx0IHtcblx0QXBpS2V5OiBzdHJpbmdcbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKlxuLy8gTWVzc2FnZSBUeXBlc1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VMaXN0IHtcblx0UmVzdWx0czogTWVzc2FnZVtdLFxuXHROZXh0UGFnZTogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG5cdE1lc3NhZ2VJRDogc3RyaW5nLFxuXHRUeXBlOiBNZXNzYWdlVHlwZSxcblx0TWVzc2FnZVN0YXR1czogTWVzc2FnZVN0YXR1cyxcblx0U2VuZGVySUQ6IHN0cmluZyxcblx0U2VuZGVyTWVzc2FnZUlEPzogc3RyaW5nLFxuXHRTZW5kZXJTdGF0dXM/OiBzdHJpbmcsXG5cdFNlbmRlclN0YXR1c01lc3NhZ2U/OiBzdHJpbmcsXG5cdFRlbXBsYXRlU2x1Zzogc3RyaW5nLFxuXHRUZW1wbGF0ZUxvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRSZWNpcGllbnQ6IEVtYWlsUmVjaXBpZW50IHwgU21zUmVjaXBpZW50LFxuXHREYXRlQ3JlYXRlZDogc3RyaW5nLFxuXHREYXRlQ29tcGxldGVkOiBzdHJpbmcsXG5cdE1lcmdlVmFsdWVzPzogdW5rbm93bixcblx0TWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxSZWNpcGllbnQge1xuXHROYW1lOiBzdHJpbmcsXG5cdEVtYWlsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbXNSZWNpcGllbnQge1xuXHRQaG9uZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRW1haWxNZXNzYWdlIHtcblx0VGVtcGxhdGVTbHVnOiBzdHJpbmcsXG5cdFRlbXBsYXRlTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdFJlY2lwaWVudDogRW1haWxSZWNpcGllbnQsXG5cdE1lcmdlVmFsdWVzPzogdW5rbm93bixcblx0TWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlU21zTWVzc2FnZSB7XG5cdFRlbXBsYXRlU2x1Zzogc3RyaW5nLFxuXHRUZW1wbGF0ZUxvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRSZWNpcGllbnQ6IFNtc1JlY2lwaWVudCxcblx0TWVyZ2VWYWx1ZXM/OiB1bmtub3duLFxuXHRNZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVNZXNzYWdlUmVzdWx0IHtcblx0TWVzc2FnZUlEOiBzdHJpbmdcbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKlxuLy8gQ3VzdG9tZXIgVHlwZXNcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckxpc3Qge1xuXHRSZXN1bHRzOiBDdXN0b21lcltdLFxuXHROZXh0UGFnZTogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXIge1xuXHRDdXN0b21lcklEOiBzdHJpbmcsXG5cdEFwaUtleTogc3RyaW5nLFxuXHRPcmdhbml6YXRpb25OYW1lOiBzdHJpbmcsXG5cdFN0YXR1czogQ3VzdG9tZXJTdGF0dXNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVDdXN0b21lckRhdGEge1xuXHRPcmdhbml6YXRpb25OYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVDdXN0b21lckRhdGEge1xuXHRPcmdhbml6YXRpb25OYW1lPzogc3RyaW5nLFxuXHRBcGlLZXk/OiBzdHJpbmcsXG5cdFN0YXR1cz86IEN1c3RvbWVyU3RhdHVzXG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKipcbi8vIFRlbXBsYXRlIFR5cGVzXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVMaXN0IHtcblx0UmVzdWx0czogVGVtcGxhdGVbXSxcblx0TmV4dFBhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlIHtcblx0U2x1Zzogc3RyaW5nLFxuXHRMb2NhbGU6IHN0cmluZyxcblx0TmFtZTogc3RyaW5nLFxuXHRUeXBlOiBNZXNzYWdlVHlwZSxcblx0U3RhdHVzOiBUZW1wbGF0ZVN0YXR1cyxcblx0Q29udGVudD86IFRlbXBsYXRlQ29udGVudFtdLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlQ29udGVudCB7XG5cdFN0YWdlOiBUZW1wbGF0ZVN0YWdlLFxuXHRTdWJqZWN0OiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdEJvZHk6IHN0cmluZyxcblx0RGF0ZUxhc3RNb2RpZmllZDogc3RyaW5nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVRlbXBsYXRlRGF0YSB7XG5cdFNsdWc6IHN0cmluZyxcblx0TG9jYWxlPzogc3RyaW5nLFxuXHROYW1lOiBzdHJpbmcsXG5cdFR5cGU6IE1lc3NhZ2VUeXBlLFxuXHRTdGF0dXM6IFRlbXBsYXRlU3RhdHVzLFxuXHRTdGFnZTogVGVtcGxhdGVTdGFnZSxcblx0U3ViamVjdD86IHN0cmluZyxcblx0Qm9keTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlVGVtcGxhdGVEYXRhIHtcblx0TmFtZT86IHN0cmluZyxcblx0U3RhdHVzPzogVGVtcGxhdGVTdGF0dXMsXG5cdFN0YWdlPzogVGVtcGxhdGVTdGFnZSxcblx0U3ViamVjdD86IHN0cmluZyxcblx0Qm9keT86IHN0cmluZ1xufVxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqXG4vLyBTZW5kZXIgVHlwZXNcblxuZXhwb3J0IGludGVyZmFjZSBTZW5kZXJMaXN0IHtcblx0UmVzdWx0czogU2VuZGVyW10sXG5cdE5leHRQYWdlOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZW5kZXIge1xuXHRTZW5kZXJJRDogc3RyaW5nLFxuXHROYW1lOiBzdHJpbmcsXG5cdFR5cGU6IE1lc3NhZ2VUeXBlLFxuXHRTdGF0dXM6IFNlbmRlclN0YXR1cyxcblx0UHJpb3JpdHk6IG51bWJlcixcblx0U2VydmljZVByb3ZpZGVyOiBTZXJ2aWNlUHJvdmlkZXIsXG5cdFNlbmRlckNvbmZpZ3VyYXRpb246IGFueSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTZW5kZXJEYXRhIHtcblx0TmFtZTogc3RyaW5nLFxuXHRUeXBlOiBNZXNzYWdlVHlwZSxcblx0U3RhdHVzOiBTZW5kZXJTdGF0dXMsXG5cdFByaW9yaXR5OiBudW1iZXIsXG5cdFNlcnZpY2VQcm92aWRlcjogU2VydmljZVByb3ZpZGVyLFxuXHRTZW5kZXJDb25maWd1cmF0aW9uOiBPYmplY3Rcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZW5kZXJEYXRhIHtcblx0TmFtZT86IHN0cmluZyxcblx0VHlwZT86IE1lc3NhZ2VUeXBlLFxuXHRTdGF0dXM/OiBTZW5kZXJTdGF0dXMsXG5cdFByaW9yaXR5PzogbnVtYmVyLFxuXHRTZXJ2aWNlUHJvdmlkZXI/OiBTZXJ2aWNlUHJvdmlkZXIsXG5cdFNlbmRlckNvbmZpZ3VyYXRpb24/OiBPYmplY3Rcbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKlxuLy8gQXBwS2V5IFR5cGVzXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwS2V5TGlzdCB7XG5cdFJlc3VsdHM6IEFwcEtleVtdLFxuXHROZXh0UGFnZTogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwS2V5IHtcblx0QXBwS2V5SUQ6IHN0cmluZyxcblx0TmFtZTogc3RyaW5nLFxuXHRUeXBlOiBBcHBLZXlUeXBlLFxuXHRTdGF0dXM6IEFwcEtleVN0YXR1cyxcblx0QXBwS2V5OiBzdHJpbmcsXG5cdEtleVNuaXBwZXQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUFwcEtleURhdGEge1xuXHROYW1lOiBzdHJpbmcsXG5cdFR5cGU6IEFwcEtleVR5cGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVBcHBLZXlEYXRhIHtcblx0TmFtZT86IHN0cmluZyxcblx0U3RhdHVzPzogQXBwS2V5U3RhdHVzXG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKipcbi8vIEJsb2NrIFR5cGVzXG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tMaXN0IHtcblx0UmVzdWx0czogQmxvY2tbXSxcblx0TmV4dFBhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrIHtcblx0QmxvY2tJRDogc3RyaW5nLFxuXHRSZWNpcGllbnQ6IHN0cmluZyxcblx0UmVhc29uOiBzdHJpbmcsXG5cdERlc2NyaXB0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdERhdGVBZGRlZDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQmxvY2tEYXRhIHtcblx0UmVjaXBpZW50OiBzdHJpbmcsXG5cdFJlYXNvbjogQmxvY2tSZWFzb25UeXBlLFxuXHREZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqXG4vLyBFbnVtc1xuXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG5cdEVtYWlsID0gXCJlbWFpbFwiLFxuXHRTbXMgPSBcInNtc1wiLFxufVxuXG5leHBvcnQgZW51bSBNZXNzYWdlU3RhdHVzIHtcblx0UGVuZGluZyA9IFwicGVuZGluZ1wiLFxuXHRTdWNjZXNzID0gXCJzdWNjZXNzXCIsXG5cdEZhaWx1cmUgPSBcImZhaWx1cmVcIlxufVxuXG5leHBvcnQgZW51bSBDdXN0b21lclN0YXR1cyB7XG5cdEFjdGl2ZSA9IFwiYWN0aXZlXCIsXG5cdEluYWN0aXZlID0gXCJpbmFjdGl2ZVwiXG59XG5cbmV4cG9ydCBlbnVtIFRlbXBsYXRlU3RhdHVzIHtcblx0QWN0aXZlID0gXCJhY3RpdmVcIixcblx0SW5hY3RpdmUgPSBcImluYWN0aXZlXCJcbn1cblxuZXhwb3J0IGVudW0gVGVtcGxhdGVTdGFnZSB7XG5cdFB1Ymxpc2hlZCA9IFwiUFVCTElTSEVEXCIsXG5cdERyYWZ0ID0gXCJEUkFGVFwiXG59XG5cbmV4cG9ydCBlbnVtIFNlbmRlclN0YXR1cyB7XG5cdEFjdGl2ZSA9IFwiYWN0aXZlXCIsXG5cdEluYWN0aXZlID0gXCJpbmFjdGl2ZVwiXG59XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2VQcm92aWRlciB7XG5cdFR3aWxpbyA9IFwidHdpbGlvXCIsXG5cdFNlbmRHcmlkID0gXCJzZW5kZ3JpZFwiLFxuXHRFbWFpbEludGVncmF0aW9uVGVzdCA9IFwiZW1haWwtaW50ZWdyYXRpb24tdGVzdFwiLFxuXHRTbXNJbnRlZ3JhdGlvblRlc3QgPSBcInNtcy1pbnRlZ3JhdGlvbi10ZXN0XCIsXG59XG5cbmV4cG9ydCBlbnVtIEFwcEtleVN0YXR1cyB7XG5cdEFjdGl2ZSA9IFwiYWN0aXZlXCIsXG5cdEluYWN0aXZlID0gXCJpbmFjdGl2ZVwiXG59XG5cbmV4cG9ydCBlbnVtIEFwcEtleVR5cGUge1xuXHRNZXNzYWdpbmcgPSBcIm1lc3NhZ2luZ1wiLFxuXHRXZWJob29rID0gXCJ3ZWJob29rXCIsXG5cdE1hbmFnZW1lbnQgPSBcIm1hbmFnZW1lbnRcIixcblx0QWRtaW4gPSBcImFkbWluXCIsXG5cdE1lc3NhZ2luZ1Rlc3QgPSBcIm1lc3NhZ2luZy10ZXN0XCIsXG59XG5cbmV4cG9ydCBlbnVtIEJsb2NrUmVhc29uVHlwZSB7XG5cdFNwYW0gPSBcInNwYW1cIixcblx0Qm91bmNlID0gXCJib3VuY2VcIixcblx0QmxvY2tlZCA9IFwiYmxvY2tlZFwiLFxuXHRPcHRPdXQgPSBcIm9wdG91dFwiLFxuXHRPdGhlciA9IFwib3RoZXJcIixcblx0TWFudWFsID0gXCJtYW51YWxcIlxufVxuIl19