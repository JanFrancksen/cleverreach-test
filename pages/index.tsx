import Container from '@ui/Container';
import Heading from '@ui/typography/Heading';
import Head from 'next/head';
import { NextPage } from 'next/types';
import Form from '../components/KontaktForm/Form';
import Subnav from '../components/Subnav/Subnav';

const Home: NextPage = () => {
  const accountSettingsNav = [
    {
      id: 1,
      name: 'Users',
      href: '#',
    },
    {
      id: 2,
      name: 'Privacy Policy',
      href: '#',
    },
    {
      id: 3,
      name: 'Extensions',
      href: '#',
    },
    {
      id: 4,
      name: 'Conversion Tracking',
      href: '#',
    },
    {
      id: 5,
      name: 'Domains',
      href: '#',
    },
    {
      id: 6,
      name: 'Archives',
      href: '#',
    },
  ];

  const accountSettingsSubNav = [
    {
      id: 1,
      name: 'Privacy Settings',
      href: '#',
    },
    {
      id: 2,
      name: 'AV-Vertrag erstellen',
      href: '#',
    },
    {
      id: 3,
      name: 'Mustertexte',
      href: '#',
    },
    {
      id: 4,
      name: 'Link',
      href: '#',
    },
    {
      id: 5,
      name: 'Link',
      href: '#',
    },
    {
      id: 6,
      name: 'Link',
      href: '#',
    },
  ];

  return (
    <>
      <Head>
        <title>CleverReach Test</title>
        <meta name="description" content="Testprojekt für CleverReach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-4 items-baseline justify-between border-b px-4 lg:flex">
        <Heading title="Account Settings" size="5xl" tag="h1" />
        <Subnav data={accountSettingsNav} />
      </div>
      <Container>
        <Subnav data={accountSettingsSubNav} />
        <Form />
      </Container>
    </>
  );
};

export default Home;
