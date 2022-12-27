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
  <div className="Sidebar z-20 bg-slate-900 text-white print:hidden">
    <SbIcon icon={<FaPaperPlane />} primary />
    <SbIcon icon={<SiSpeedtest />} />
    <SbIcon icon={<FaUsers />} />
    <SbIcon icon={<IoMdChatbubbles />} />
    <SbIcon icon={<FaNewspaper />} />
    <SbIcon icon={<FaCogs />} />
    <SbIcon icon={<FaProjectDiagram />} />
  </div>
);

export default Sidebar;
