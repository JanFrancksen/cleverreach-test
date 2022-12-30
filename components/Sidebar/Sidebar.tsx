import {
  FaCogs,
  FaNewspaper,
  FaPaperPlane,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { SiSpeedtest } from 'react-icons/si';
import SbIcon from './SbIcon';

const Sidebar = () => (
  <aside className="sidebar z-20 bg-slate-900 text-white print:hidden max-md:flex max-md:justify-center">
    <SbIcon icon={<FaPaperPlane />} primary href="#" />
    <SbIcon icon={<SiSpeedtest />} href="#" />
    <SbIcon icon={<FaUsers />} href="#" />
    <SbIcon icon={<IoMdChatbubbles />} href="#" />
    <SbIcon icon={<FaNewspaper />} href="#" />
    <SbIcon icon={<FaCogs />} href="#" />
    <SbIcon icon={<FaProjectDiagram />} href="#" />
  </aside>
);

export default Sidebar;
