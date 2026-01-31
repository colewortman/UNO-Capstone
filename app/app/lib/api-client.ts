class ApiClient {
    async get<T>(endpoint: string): Promise<T> {
        const res = await fetch(`/api${endpoint}`);
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }
        return res.json();
    }
}
export const apiClient = new ApiClient();