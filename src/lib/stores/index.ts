import { APP_NAME } from '$lib/constants';
import { derived, type Writable, writable } from 'svelte/store';
import type { ModelConfig } from '$lib/apis';
import type { Banner } from '$lib/types';
import type { Socket } from 'socket.io-client';

// Backend
export const WEBUI_NAME = writable(APP_NAME);
export const config: Writable<Config | undefined> = writable(undefined);
export const user: Writable<SessionUser | undefined> = writable(undefined);
//TODO: Create Method to get ownerID
export const ownerID = writable('')

// Frontend
export const MODEL_DOWNLOAD_POOL = writable({});

export const mobile = writable(false);

export const socket: Writable<null | Socket> = writable(null);
export const activeUserCount: Writable<null | number> = writable(null);
export const USAGE_POOL: Writable<null | string[]> = writable(null);

export const theme = writable('system');

export const chatId = writable('');
export const chatTitle = writable('');

export const chats = writable([]);
export const pinnedChats = writable([]);
export const tags = writable([]);

export const models: Writable<Model[]> = writable([]);
export const prompts: Writable<Prompt[]> = writable([]);
export const documents: Writable<Document[]> = writable([]);

export const tools = writable([]);
export const functions = writable([]);

export const banners: Writable<Banner[]> = writable([]);

export const settings: Writable<Settings> = writable({});

export const showSidebar = writable(false);
export const showSettings = writable(false);
export const showArchivedChats = writable(false);
export const showChangelog = writable(false);

export const showControls = writable(false);
export const showOverview = writable(false);
export const showCallOverlay = writable(false);

export const temporaryChatEnabled = writable(false);
export const scrollPaginationEnabled = writable(false);
export const currentChatPage = writable(1);

export type Model = OpenAIModel | OllamaModel;

type BaseModel = {
	id: string;
	name: string;
	info?: ModelConfig;
	owned_by: 'ollama' | 'openai';
};

export interface OpenAIModel extends BaseModel {
	owned_by: 'openai';
	external: boolean;
	source?: string;
}

export interface OllamaModel extends BaseModel {
	owned_by: 'ollama';
	details: OllamaModelDetails;
	size: number;
	description: string;
	model: string;
	modified_at: string;
	digest: string;
	ollama?: {
		name?: string;
		model?: string;
		modified_at: string;
		size?: number;
		digest?: string;
		details?: {
			parent_model?: string;
			format?: string;
			family?: string;
			families?: string[];
			parameter_size?: string;
			quantization_level?: string;
		};
		urls?: number[];
	};
}

type OllamaModelDetails = {
	parent_model: string;
	format: string;
	family: string;
	families: string[] | null;
	parameter_size: string;
	quantization_level: string;
};

type Settings = {
	models?: string[];
	conversationMode?: boolean;
	speechAutoSend?: boolean;
	responseAutoPlayback?: boolean;
	audio?: AudioSettings;
	showUsername?: boolean;
	notificationEnabled?: boolean;
	title?: TitleSettings;
	splitLargeDeltas?: boolean;
	chatDirection: 'LTR' | 'RTL';

	system?: string;
	requestFormat?: string;
	keepAlive?: string;
	seed?: number;
	temperature?: string;
	repeat_penalty?: string;
	top_k?: string;
	top_p?: string;
	num_ctx?: string;
	num_batch?: string;
	num_keep?: string;
	options?: ModelOptions;
};

type ModelOptions = {
	stop?: boolean;
};

type AudioSettings = {
	STTEngine?: string;
	TTSEngine?: string;
	speaker?: string;
	model?: string;
	nonLocalVoices?: boolean;
};

type TitleSettings = {
	auto?: boolean;
	model?: string;
	modelExternal?: string;
	prompt?: string;
};

type Prompt = {
	command: string;
	user_id: string;
	title: string;
	content: string;
	timestamp: number;
};

type Document = {
	collection_name: string;
	filename: string;
	name: string;
	title: string;
};

type Config = {
	status: boolean;
	name: string;
	version: string;
	default_locale: string;
	default_models: string;
	default_prompt_suggestions: PromptSuggestion[];
	features: {
		auth: boolean;
		auth_trusted_header: boolean;
		enable_signup: boolean;
		enable_login_form: boolean;
		enable_web_search?: boolean;
		enable_image_generation: boolean;
		enable_admin_export: boolean;
		enable_admin_chat_access: boolean;
		enable_community_sharing: boolean;
	};
	oauth: {
		providers: {
			[key: string]: string;
		};
	};
};

type PromptSuggestion = {
	content: string;
	title: [string, string];
};

type SessionUser = {
	id: string;
	email: string;
	name: string;
	role: string;
	profile_image_url: string;
};

type DATA_SENSITVITY = 'PUBLIC' | 'CUI' | 'NONCRIT'
type DISSEMINATION =   'FEDONLY' | 'FEDCON' | 'NOCON' | 'NOFORN' | ''

interface Workspaces {
	id: string,
	type: string,
	name: string,
	description: string,
	modality: string,
	embedding_model: string,
	classification: DATA_SENSITVITY,
	owner_id: string,
	owner_email: string,
	owner_name: string,
	data_sensitivity: DATA_SENSITVITY,
	dissemination_control: DISSEMINATION,
	cui_categories: null | string,
	private: boolean,
	temp: boolean,
	createdAt: "2024-10-08T17:35:04.166Z",
	updatedAt: "2024-10-08T17:35:04.166Z",
	file_count: "0"
}

export const workspaces: Writable<Workspaces[]> = writable([])
export const sharedWorkspaces: Writable<Workspaces[]> = writable([])

interface CreateWorkspaces {
	name: string,
	description: string,
	data_sensitivity: string,
	dissemination_control: string

}

export const createWorkspace = async (params: CreateWorkspaces) => {
	const response = await fetch('https://httpbin.org/post', {
		method: 'POST',
		body: JSON.stringify({
			type: "user",
			private: true, //need to verify what this is
			temp: false,
			...params
		})
	})
	
	const json = await response.json()
	const result = JSON.stringify(json)
	return result
}

//TODO: Change the URL to https://niprgpt.mil/api/chroma/collections?owner_id=${ownerID}&page=1&page_size=10&type=user&name=&sort_by=createdAt&sort_order=DESC
//TODO: Extract the base URL
export const getWorkspaces = async () => {
	return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
	.then(response => response.json())
	.then(data => {
		return data
	}).catch(error => {
		console.log(error);
		return [];
	});
}

//TODO: Change the URL to https://niprgpt.mil/api/chroma/collections?owner_id=${ownerID}&page=1&page_size=10&type=user&name=&sort_by=createdAt&sort_order=DESC
//TODO: Extract the base URL
export const getSharedWorkspaces = async () => {
	return fetch(`https://pokeapi.co/api/v2/pokemon?limit=15`)
	.then(response => response.json())
	.then(data => {
		return data
	}).catch(error => {
		console.log(error);
		return [];
	});
}