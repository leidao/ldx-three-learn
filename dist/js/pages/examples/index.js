import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { examples } from '@/router/examples';
const Home = () => {
    // useEffect(() => {}, [])
    return (_jsx("div", { className: "h-100%  box-borderpb-0px", children: _jsx("div", { className: "h-100%  bg-white", children: _jsx("div", { id: "container", className: "h-100%  p-10px ", style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(398px, 1fr))',
                    gridTemplateRows: 'repeat(1, 268px)',
                    gap: '10px 12px'
                }, children: examples.map((example) => {
                    return (_jsxs("div", { className: "border-1px border-#ebeef5 w-400px cursor-pointer h-268px", style: { boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)' }, onClick: () => {
                            window.open(`/ldx-three-learn/#${example.path}`);
                        }, children: [_jsx("div", { className: "h-38px leading-38px px-10px text-18px text-#303133 border-b-1px border-b-#ebeef5", children: example.title }), _jsx("div", { className: "p-10px h-230px", children: _jsx("div", { className: "overflow-hidden ", children: _jsx("img", { className: "hover:scale-110 duration-800", width: 380, height: 210, src: example.icon, alt: example.title }) }) })] }, example.path));
                }) }) }) }));
};
export default Home;
