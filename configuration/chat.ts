import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Howdy! I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. Ask me anythin' 'bout Dallas, y'hear? 🤠`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Well, shoot! Looks like I'm havin' a bit of trouble comin' up with a response. How 'bout tryin' again later, partner? 🤠`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
