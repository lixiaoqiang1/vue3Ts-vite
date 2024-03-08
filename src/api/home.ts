import request from '@/utils/request'
export class Home {
  /*搜索*/
  async getCurriculumsList(data:any) {
    let requestData: any = await request({
      url: "/api/xxxxxx",
      method: 'POST',
      data: data
    })
    return requestData
  }
 
}