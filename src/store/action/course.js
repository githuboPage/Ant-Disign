import * as Types from '../action-types';
import {queryCourseList,queryCourse} from '../../api/course';
const courseAction = {
      async getCourse(type) {
         /*
         * 1、调取API中的方法从服务器端获取数据
         * 2、返回对应的ACTION对象 {type/payload}
         */
        return {
            type: Types.INIT_COURSE,
            payload:await  queryCourseList(type)
        }
    },
    collectCourse(item){
          return {
              type:Types.COLLECT,
              payload:item,
          }
    },
    getCollect(){
          return {
              type:Types.COLLECTGET,
              payload:queryCourse()
          }
    }
};
export default courseAction;