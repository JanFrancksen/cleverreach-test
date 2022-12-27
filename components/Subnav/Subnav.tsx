import Link from 'next/link';
import { useState } from 'react';

type SubnavProps = {
  data: {
    id: number;
    name: string;
  }[];
};

const Subnav = ({ data }: SubnavProps) => {
  const [active, setActive] = useState(2);

  return (
    <ul className="flex flex-row gap-4 overflow-y-auto">
      {data.map(item => (
        <li
          key={item.id}
          className={
            item.id === active
              ? 'whitespace-nowrap border-b-2 pb-4 text-gray-800 sm:border-orange-400'
              : 'whitespace-nowrap pb-4 text-gray-400 hover:border-b-2 hover:text-gray-800 lg:hover:border-orange-400'
          }>
          <Link href="/" onClick={() => setActive(item.id)}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Subnav;
