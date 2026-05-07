import { OpenAPI } from "./generated";

/**
 * Configure generated API client defaults from Vite environment.
 */
export function configureApi() {
    OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL ?? "/diff-fuse/api";
    OpenAPI.WITH_CREDENTIALS = false; // flip if we add cookies/auth later
}
