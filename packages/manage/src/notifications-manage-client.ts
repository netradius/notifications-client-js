import * as Errors from "./errors";
import * as Types from "./types";
import fetch, { Response } from "node-fetch";

export class NotificationsManageClient {
	private baseUrl:string;
	private authorizationToken:string;
	private organizationID:string|undefined;

	constructor(baseUrl:string, options:Types.NotificationsManageClientOptions) {
		baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;	// remove trailing slash

		if (!this.isUrl(baseUrl)) throw new Errors.ArgumentError("baseUrl is invalid.");

		this.baseUrl = baseUrl;
		this.authorizationToken = options.authorizationToken;
	}

	/**
	 * Get the baseUrl
	 */
	getBaseUrl():string {
		return this.baseUrl;
	}

	/**
	 * Set the authorization token.
	 */
	setAuthorizationToken(authorizationToken:string):void {
		this.authorizationToken = authorizationToken;
	}

	setOrganizationID(organizationID:string):void {
		this.organizationID = organizationID;
	}

	/**
	 * Get an info object for the authorized user. This call can be made without setting the client organizationID.
	 * This method can be used to get a list of valid organization IDs for the authenticated user.
	 */
	async getInfo():Promise<Types.AuthenticatedUserInfo> {
		const uri = "/manage/info";

		return await this.executeRequest<Types.AuthenticatedUserInfo>(uri, "GET", "get-info");
	}

	/**
	 * Generates a valid Webhook key. This call can be made without an organization ID.
	 */
	async generateWebhookKey():Promise<Types.KeyResult> {
		const uri = "/manage/key/webhook";

		return await this.executeRequest<Types.KeyResult>(uri, "POST", "create-key");
	}

	/**
	 * Get a list of messages. Limits the number of records by pageSize and starting with the record at nextPageID.
	 */
	async getMessages(pageSize:number, nextPageID?:string):Promise<Types.MessageList> {
		const uri = "/manage/organization/{{organizationID}}/messages";

		return await this.executeRequest<Types.MessageList>(uri, "GET", "list-message", undefined, {
			pagesize: pageSize.toString(),
			nextpage: nextPageID,
		});
	}

	/**
	 * Get a message record.
	 */
	async getMessage(messageID:string):Promise<Types.Message> {
		const uri = `/manage/organization/{{organizationID}}/message/${encodeURIComponent(messageID)}`;

		return await this.executeRequest<Types.Message>(uri, "GET", "get-message");
	}

	/**
	 * Delete an existing message. Admin only.
	 */
	async deleteMessage(messageID:string):Promise<void> {
		const uri = `/manage/organization/{{organizationID}}/message/${encodeURIComponent(messageID)}`;

		return await this.executeRequest(uri, "DELETE", "delete-message");
	}

	/**
	 * Create an email message.
	 */
	async createEmailMessage(emailMessage:Types.CreateEmailMessage, test:boolean):Promise<Types.CreateMessageResult> {
		const uri = "/manage/organization/{{organizationID}}/message";
		const contentType = test ? "create-test-email-message" : "create-email-message";

		return await this.executeRequest<Types.CreateMessageResult>(uri, "POST", contentType, emailMessage);
	}

	/**
	 * Create an SMS message.
	 */
	async createSmsMessage(smsMessage:Types.CreateSmsMessage, test:boolean):Promise<Types.CreateMessageResult> {
		const uri = "/manage/organization/{{organizationID}}/message";
		const contentType = test ? "create-test-sms-message" : "create-sms-message";

		return await this.executeRequest<Types.CreateMessageResult>(uri, "POST", contentType, smsMessage);
	}

	/**
	 * Get a list of organizations. Only an admin app key can make this request. This call can be made without setting the client organizationID.
	 * Limits the number of records by pageSize and starting with the record at nextPageID.
	 */
	async getOrganizations(pageSize:number, nextPageID?:string):Promise<Types.OrganizationList> {
		const uri = "/manage/organizations";	// This URI is different. We don't embed the client organization id because the get organizations endpoint does not use it.

		return await this.executeRequest<Types.OrganizationList>(uri, "GET", "list-organization", undefined, {
			pagesize: pageSize.toString(),
			nextpage: nextPageID,
		});
	}

	/**
	 * Get an organization record. This call can be made without setting the client organizationID. Only an admin app key can get organization records other than its own.
	 */
	async getOrganization(organizationID:string):Promise<Types.Organization> {
		const uri = `/manage/organization/${encodeURIComponent(organizationID)}`;

		return await this.executeRequest<Types.Organization>(uri, "GET", "get-organization");
	}

	/**
	 * Creates a new organization. This call can be made without setting the client organizationID. Only an admin app key can create organizations.
	 */
	async createOrganization(organization:Types.CreateOrganizationData):Promise<Types.Organization> {
		const uri = "/manage/organization";	// This URI is different. We don't embed the client organization id because the create organization endpoint does not use it.

		return await this.executeRequest<Types.Organization>(uri, "POST", "create-organization", organization);
	}

	/**
	 * Update an existing organization. This call can be made without setting the client organizationID.
	 */
	async updateOrganization(organizationID:string, organization:Types.UpdateOrganizationData):Promise<Types.Organization> {
		const uri = `/manage/organization/${encodeURIComponent(organizationID)}`;	// This URI is different. We don't embed the client organization id because the update organization endpoint does use it.

		return await this.executeRequest<Types.Organization>(uri, "PATCH", "update-organization", organization);
	}

	/**
	 * Delete an existing organization. This call can be made without setting the client organizationID.
	 */
	async deleteOrganization(organizationID:string):Promise<void> {
		const uri = `/manage/organization/${encodeURIComponent(organizationID)}`;	// This URI is different. We don't embed the client organization id because the update organization endpoint does use it.

		return await this.executeRequest(uri, "DELETE", "delete-organization");
	}

	/**
	 * Get a list of users.
	 * Limits the number of records by pageSize and starting with the record at nextPageID.
	 */
	async getUsers(pageSize:number, nextPageID?:string):Promise<Types.UserList> {
		const uri = "/manage/organization/{{organizationID}}/users";

		return await this.executeRequest<Types.UserList>(uri, "GET", "list-user", undefined, {
			pagesize: pageSize.toString(),
			nextpage: nextPageID,
		});
	}

	/**
	 * Get a user record.
	 */
	async getUser(userID:string):Promise<Types.User> {
		const uri = `/manage/organization/{{organizationID}}/user/${encodeURIComponent(userID)}`;

		return await this.executeRequest<Types.User>(uri, "GET", "get-user");
	}

	/**
	 * Creates a new user.
	 */
	async createUser(user:Types.CreateUserData):Promise<Types.User> {
		const uri = "/manage/organization/{{organizationID}}/user";

		return await this.executeRequest<Types.User>(uri, "POST", "create-user", user);
	}

	/**
	 * Update an existing user.
	 */
	async updateUser(userID:string, user:Types.UpdateUserData):Promise<Types.User> {
		const uri = `/manage/organization/{{organizationID}}/user/${encodeURIComponent(userID)}`;

		return await this.executeRequest<Types.User>(uri, "PATCH", "update-user", user);
	}

	/**
	 * Delete an existing user.
	 */
	async deleteUser(userID:string):Promise<void> {
		const uri = `/manage/organization/{{organizationID}}/user/${encodeURIComponent(userID)}`;

		return await this.executeRequest(uri, "DELETE", "delete-user");
	}


	/**
	 * Get a list of templates.
	 * Limits the number of records by pageSize and starting with the record at nextPageID.
	 */
	async getTemplates(pageSize:number, nextPageID?:string):Promise<Types.TemplateList> {
		const uri = "/manage/organization/{{organizationID}}/templates";

		return await this.executeRequest<Types.TemplateList>(uri, "GET", "list-template", undefined, {
			pagesize: pageSize.toString(),
			nextpage: nextPageID,
		});
	}

	/**
	 * Get a template record.
	 */
	async getTemplate(templateID:string):Promise<Types.Template> {
		const uri = `/manage/organization/{{organizationID}}/template/${encodeURIComponent(templateID)}`;

		return await this.executeRequest<Types.Template>(uri, "GET", "get-template");
	}

	/**
	 * Creates a new template.
	 */
	async createTemplate(template:Types.CreateTemplateData):Promise<Types.Template> {
		const uri = "/manage/organization/{{organizationID}}/template";

		return await this.executeRequest<Types.Template>(uri, "POST", "create-template", template);
	}

	/**
	 * Update an existing template.
	 */
	async updateTemplate(templateID:string, template:Types.UpdateTemplateData):Promise<Types.Template> {
		const uri = `/manage/organization/{{organizationID}}/template/${encodeURIComponent(templateID)}`;

		return await this.executeRequest<Types.Template>(uri, "PATCH", "update-template", template);
	}

	/**
	 * Delete an existing template.
	 */
	async deleteTemplate(templateID:string):Promise<void> {
		const uri = `/manage/organization/{{organizationID}}/template/${encodeURIComponent(templateID)}`;

		return await this.executeRequest(uri, "DELETE", "delete-template");
	}

	/**
	 * Get a list of senders.
	 * Limits the number of records by pageSize and starting with the record at nextPageID.
	 */
	async getSenders(pageSize:number, nextPageID?:string):Promise<Types.SenderList> {
		const uri = "/manage/organization/{{organizationID}}/senders";

		return await this.executeRequest(uri, "GET", "list-sender", undefined, {
			pagesize: pageSize.toString(),
			nextpage: nextPageID,
		});
	}

	/**
	 * Get a sender record.
	 */
	async getSender(senderID:string):Promise<Types.Sender> {
		const uri = `/manage/organization/{{organizationID}}/sender/${encodeURIComponent(senderID)}`;

		return await this.executeRequest<Types.Sender>(uri, "GET", "get-sender");
	}

	/**
	 * Creates a new sender.
	 */
	async createSender(sender:Types.CreateSenderData):Promise<Types.Sender> {
		const uri = "/manage/organization/{{organizationID}}/sender";

		return await this.executeRequest<Types.Sender>(uri, "POST", "create-sender", sender);
	}

	/**
	 * Update an existing sender.
	 */
	async updateSender(senderID:string, sender:Types.UpdateSenderData):Promise<Types.Sender> {
		const uri = `/manage/organization/{{organizationID}}/sender/${encodeURIComponent(senderID)}`;

		return await this.executeRequest<Types.Sender>(uri, "PATCH", "update-sender", sender);
	}

	/**
	 * Delete an existing sender.
	 */
	async deleteSender(senderID:string):Promise<void> {
		const uri = `/manage/organization/{{organizationID}}/sender/${encodeURIComponent(senderID)}`;

		return await this.executeRequest(uri, "DELETE", "delete-sender");
	}


	/**
	 * Get a list of blocks.
	 * Limits the number of records by pageSize and starting with the record at nextPageID.
	 */
	async getBlocks(pageSize:number, nextPageID?:string):Promise<Types.BlockList> {
		const uri = "/manage/organization/{{organizationID}}/blocks";

		return await this.executeRequest<Types.BlockList>(uri, "GET", "list-block", undefined, {
			pagesize: pageSize.toString(),
			nextpage: nextPageID,
		});
	}

	/**
	 * Get a block record.
	 */
	async getBlock(blockID:string):Promise<Types.Block> {
		const uri = `/manage/organization/{{organizationID}}/block/${encodeURIComponent(blockID)}`;

		return await this.executeRequest<Types.Block>(uri, "GET", "get-block");
	}

	/**
	 * Creates a new block.
	 */
	async createBlock(block:Types.CreateBlockData):Promise<Types.Block> {
		const uri = "/manage/organization/{{organizationID}}/block";

		return await this.executeRequest<Types.Block>(uri, "POST", "create-block", block);
	}

	/**
	 * Delete a block.
	 */
	async deleteBlock(blockID:string):Promise<void> {
		const uri = `/manage/organization/{{organizationID}}/block/${encodeURIComponent(blockID)}`;

		await this.executeRequest(uri, "DELETE", "delete-block");
	}

	// If there is a network response with JSON then a tuple is returned (boolean success, object jsonContent). If any exceptions are thrown they are not handled by this method.
	private async executeRequest<T>(uri:string, method:string, contentTypeResource:string, requestBody?:unknown, queryParameters?:Record<string, string|undefined>|undefined):Promise<T> {
		if (uri.includes("{{organizationID")) {
			if (!this.organizationID) throw new Errors.InitError("Required organizationID has not been set.");
			uri = uri.replace(/{{organizationID}}/, encodeURIComponent(this.organizationID));
		}

		let qp = "";
		if (queryParameters) {
			const cleanedQP = {} as Record<string, string>;
			for (const [k, v] of Object.entries(queryParameters)) {
				if (v != undefined) {
					cleanedQP[k] = v;
				}
			}

			qp = "?" + (new URLSearchParams(cleanedQP)).toString();
		}

		let requestData:string|undefined;
		if (requestBody) {
			requestData = (typeof requestBody === "string") ? requestBody : JSON.stringify(requestBody);
		}

		let responseBodyText:string|undefined = undefined;
		let responseBody:unknown = undefined;

		let response:Response|undefined;

		try {
			response = await fetch(this.baseUrl + uri + qp, {
				method,
				headers: {
					"Content-Type": `application/vnd.notification.${contentTypeResource}.v1+json`,
					"Authorization": this.authorizationToken,
				},
				body: requestData,
			});
			responseBodyText = await response.text();
		} catch (ex) {
			throw new Errors.FetchError((ex as Error).message, { cause: ex });
		}

		if (response.status === 401 || response.status === 403) {	// AWS HTTP API Gateway returns 403 from the authorizer (instead of 401) if the credentials are invalid
			throw new Errors.AuthorizationError("Authorization Failed");
		} else if (response.status === 404) {
			throw new Errors.ResponseError("Resource not found");
		}


		try {
			responseBody = responseBodyText && JSON.parse(responseBodyText);
		} catch (ex) {
			throw new Errors.ResponseError("Invalid response content", { cause: responseBodyText});
		}

		if (response.status != 200) {
			throw new Errors.ResponseError((responseBody as Types.ErrorResponse).error ?? responseBodyText);
		}

		return responseBody as T;
	}

	private isUrl(value:string):boolean {
		try {
			const url = new URL(value);
			return url.protocol === "http:" || url.protocol === "https:";
		} catch { }

		return false;
	}
}
