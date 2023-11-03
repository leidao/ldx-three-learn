/*
 * @Description: 获取useState的最新值
 * @Author: ldx
 * @Date: 2022-04-11 14:34:32
 * @LastEditors: ldx
 * @LastEditTime: 2022-04-11 15:39:21
 */
import { useRef, useState } from 'react';
export const useSyncState = (initState) => {
    const [state, setStateValue] = useState(initState);
    const stateRef = useRef(state);
    const setState = (value) => {
        stateRef.current = value;
        setStateValue(value);
    };
    return [stateRef, setState];
};
