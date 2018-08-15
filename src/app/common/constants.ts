import { environment } from '../../environments/environment';
/**
 * *This file exports all the constants expecially endpoints for the application.
 */

// Constants related to Qulabro APIs.
const BASE_URL: string = environment.baseURL;

// LOGIN ENDPOINT
export const LOGIN = `${BASE_URL}/v1/auth/login`;

// SIGNUP PROCESS ENDPOINTS
export const EMAIL = `${BASE_URL}/v1/signup/step1`;
export const VERIFY = `${BASE_URL}/v1/signup/verify`;

export const SET_NAME = `${BASE_URL}/v1/signup/name`;
export const SET_PASSWORD = `${BASE_URL}/v1/signup/password`;

export const CREATE_COMPANY = `${BASE_URL}/v1/company/create`;
export const CREATE_WORSPACE = `${BASE_URL}/v1/company/workspace`;

// REFRESH TOKEN ENDPOINT
export const REFREASH = `${BASE_URL}/v1/auth/refresh`;

// INVITE ENDPOINT
export const INVITE = `${BASE_URL}/v1/invite/`;

// Constants related to PEXIP.
export const ADMIN_NODE = 'mgt.attribes.com';
export const CONFERENCE_NODE = 'conf.attribes.com';
export const PEXIP_ALIAS_DOMAIN = 'conf.attribes.com';
