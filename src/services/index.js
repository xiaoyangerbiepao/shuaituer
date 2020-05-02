import { request } from '@/utils/request';
// 新增 API 菜单
export function GetOrganization() {
    return request("/Organization/GetOrganization", {
      method: 'GET',
    });
  }
  