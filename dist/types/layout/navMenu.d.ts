/// <reference types="react" />
import { Mode } from '@/recoil';
import { RoutesType } from '../router/routes';
interface Props {
    mode: Mode;
    theme: 'light' | 'dark';
    routes: RoutesType[];
}
declare const NavMenu: React.FC<Props>;
export default NavMenu;
