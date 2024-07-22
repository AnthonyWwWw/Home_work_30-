import { all, call } from 'redux-saga/effects'
import { taskWatcher } from './taskWatcher'

export function* rootSaga(){
    yield all([
        call(taskWatcher),
    ])  
}