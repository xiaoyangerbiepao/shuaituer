import { postWithJson, getWithQueryString } from '../utils/request';

import { apiPrefix } from '../config/projectConfig';

// 新增 API 树目录
export function addApiTree(params) {
    return request(`${apiPrefix}/api_manager/interface/api/addApiTree`, {
      method: 'POST',
      body: params,
    });
  }
  

// 获取目录树
export function catalogTree() {
    return request(`${apiPrefix}/api_manager/interface/api/getAPICatalogTree`);
}  