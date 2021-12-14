import { BasicPageParams } from '@/utils/api/BasicResponseModel'

export interface BuyingItem {
  purchase_no: number
}

export interface BuyingResultModel extends BasicPageParams {
  data: BuyingItem[]
}

export interface ModuleItem {
  id: number
  moduleName: string
}
