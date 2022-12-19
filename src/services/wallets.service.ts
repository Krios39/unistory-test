import {HttpService} from "./http.service";
import {Wallet} from "../models/wallet";

export interface WalletMeta{
    currentPage: number,
    perPage: number,
    totalPages: number
}
export interface WalletsDto {
    items: Wallet[]
    meta: WalletMeta
}

class WalletsServiceImpl {

    async getWallets(page: number, perPage: number): Promise<WalletsDto> {
        const params = new URLSearchParams([['page', page.toString()], ['perPage', perPage.toString()]])
        return await HttpService.get<WalletsDto>({url: '', params}).then(data => data)
    }

    async getWalletById(id: number): Promise<Wallet> {
        return await HttpService.get<Wallet>({url: `id/${id}`}).then(data => data)
    }

    async getWalletByAddress(address: string): Promise<Wallet> {
        return await HttpService.get<Wallet>({url: `address/${address}`,}).then(data => data)
    }
}

export const WalletsService = new WalletsServiceImpl()