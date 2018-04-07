import * as Types from '../action-types';

const courseReducer = (state = {
    courseData: [],
    collectData: []
}, action) => {
    state = {...state};
    switch (action.type) {
        case Types.INIT_COURSE:
            state.courseData = action.payload;
            break;

        case Types.COLLECT:
            let isExit = state.collectData.find(item => {
                return item.id == action.payload.id;
            });
            !isExit ? state.collectData.push(action.payload) : null;
            break;

        case Types.COLLECTGET:
            state.collectData = action.payload;
            break;
    }
    return state;
};
export default courseReducer;
