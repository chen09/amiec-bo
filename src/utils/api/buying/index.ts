import http from '@/utils/http/axios'
// import { RequestEnum } from '@/enums/httpEnum'
// import ApiClient from '../ApiClient'
import {BuyingResultModel} from "@/utils/api/buying/BuyingModel";

enum Api {
    buyingList = '/syuppin/buying'
}


export function getBuyingList(params) {
    return http.request<BuyingResultModel>({
        url: Api.buyingList,
        // method: RequestEnum.GET,
        method: 'GET',
        params
    })

    // return ApiClient.get<PurchaseResultModel>(Api.purchaseList, {params: params})
}


// export function getPurchaseList(params) {
//     return http.request(
//         {
//             url: Api.adminAccount,
//             method: RequestEnum.GET,
//             params
//         },
//         {
//             isShowErrorMessage: true
//         }
//     )
// }