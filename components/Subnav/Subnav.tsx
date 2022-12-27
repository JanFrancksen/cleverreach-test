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
    <ul className="flex flex-row gap-4 ">
      {data.map(item => (
        <li
          key={item.id}
          className={
            item.id === active
              ? 'border-b-2 border-orange-400 pb-4 text-gray-800'
              : 'pb-4 text-gray-400 hover:border-b-2 hover:border-orange-400'
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
