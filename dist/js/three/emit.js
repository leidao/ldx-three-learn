/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-02 12:23:15
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 00:39:41
 */
import mitt from 'mitt';
export class Emit {
    eventBus = mitt();
    on(event, callback) {
        this.eventBus.on(event, callback);
    }
    off(event, callback) {
        this.eventBus.off(event, callback);
    }
    emit(event, ...args) {
        this.eventBus.emit(event, ...args);
    }
}
