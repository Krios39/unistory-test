import {Axios,} from "axios";

class HttpServiceImpl {
    private axios: Axios

    constructor(baseURL: string) {
        this.axios = new Axios({baseURL})
    }

    async get<T>({url, params}: { url: string, params?: URLSearchParams }): Promise<T> {
        return await this.axios.get<T>(url, {params}).then(response=> JSON.parse(response.data as string))
    }
}
export const HttpService = new HttpServiceImpl('https://new-backend.unistory.app/api/data/')
