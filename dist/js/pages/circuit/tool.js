import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description: 工具栏
 * @Author: ldx
 * @Date: 2022-04-06 19:34:55
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 16:25:31
 */
import { Dropdown, InputNumber, Space } from 'antd';
import { useState } from 'react';
import { DownOutlined, HandOutlined, LineOutlined, SelectOutlined, TextFilled } from './icons';
const Tool = ({ className, editor }) => {
    const [selected, setSelected] = useState('panning');
    const [open, setOpen] = useState(false);
    if (!editor)
        return _jsx("div", {});
    // useEffect(() => {}, [])
    /** 改变画布缩放大小 */
    const zoomChange = () => { };
    const items = [
        {
            label: (_jsx(InputNumber, { size: "small", defaultValue: 100, min: 0, max: 100, formatter: (value) => `${value}%`, onChange: zoomChange })),
            key: '1'
        },
        {
            label: '放大',
            key: '2',
            onClick: editor.zoomIn
        },
        { label: '缩小', key: '3', onClick: editor.zoomOut }
    ];
    const styleFn = (value) => {
        return {
            background: selected === value ? '#1890ff' : '',
            color: selected === value ? '#fff' : '#000'
        };
    };
    return (_jsxs("div", { className: `${className} flex justify-center items-center`, children: [_jsxs("div", { className: "flex-1 flex items-center ", children: [_jsx("div", { className: "cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px", style: styleFn('selected'), onClick: () => {
                            setSelected('selected');
                            editor.toolOperation = 'selected';
                        }, children: _jsx(SelectOutlined, {}) }), _jsx("div", { className: "cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px", style: styleFn('text'), onClick: () => {
                            setSelected('text');
                            editor.toolOperation = 'text';
                        }, children: _jsx(TextFilled, {}) }), _jsx("div", { className: "cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px", style: styleFn('panning'), onClick: () => {
                            setSelected('panning');
                            editor.toolOperation = 'panning';
                        }, children: _jsx(HandOutlined, {}) }), _jsx("div", { className: "cursor-pointer w-32px h-32px hover:bg-#f2f2f2  rounded-6px flex justify-center items-center ml-10px", style: styleFn('line'), onClick: () => {
                            setSelected('line');
                            editor.toolOperation = 'line';
                        }, children: _jsx(LineOutlined, {}) })] }), _jsx("div", { className: "w-100px", children: _jsx(Dropdown, { menu: { items }, trigger: ['click'], open: open, onOpenChange: (flag) => {
                        setOpen(flag);
                    }, children: _jsx("a", { onClick: (e) => e.preventDefault(), children: _jsxs(Space, { children: [_jsx("div", { children: "100%" }), _jsx(DownOutlined, { className: "mt-6px fill-#1890ff " })] }) }) }) })] }));
};
export default Tool;
