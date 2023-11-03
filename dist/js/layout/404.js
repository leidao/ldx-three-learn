import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const NoFoundPage = () => {
    const navigate = useNavigate();
    return (_jsx(Result, { status: "404", title: "404", subTitle: "Sorry, the page you visited does not exist.", extra: _jsx(Button, { type: "primary", onClick: () => navigate('/'), children: "Back Home" }) }));
};
export default NoFoundPage;
