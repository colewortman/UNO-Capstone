import { fetchFromApi } from "./api";

export const healthRoute = {
    check: () => fetchFromApi<{ status: string }>("/health"),
};