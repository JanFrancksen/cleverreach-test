import { useEffect, useState } from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [activeBell, setActiveBell] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveBell(true);
    }, 10000);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="Navbar z-20 flex w-full items-center justify-end gap-4 bg-white py-2 px-4 shadow-md print:hidden">
      {(activeBell && (
        <div className="group relative">
          <AiFillBell
            onClick={() => setActiveBell(false)}
            className="animate-pulse cursor-pointer text-xl text-red-500"
          />
          <div className="w- pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 rounded-lg border bg-white p-4 text-center text-sm opacity-0 transition-opacity group-hover:opacity-100">
            <span className="font-bold">Nicht vergessen:</span>
            <br />
            Jetzt Jan einstellen!
          </div>
        </div>
      )) || <AiOutlineBell className="text-xl text-gray-600" />}
      <div className="flex items-center gap-1">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-gray-300 font-bold">
          A
        </div>
        <FaChevronDown className="text-xs text-gray-400" />
      </div>
    </div>
  );
};

export default Navbar;
