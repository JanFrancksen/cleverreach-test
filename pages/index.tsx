import Head from 'next/head';
import { NextPage } from 'next/types';
import Container from '../components/Container';
import Form from '../components/KontaktForm/Form';
import Subnav from '../components/Subnav/Subnav';
import Heading from '../components/Typography/Heading';

const Home: NextPage = () => {
  const accountSettingsNav = [
    {
      id: 1,
      name: 'Users',
    },
    {
      id: 2,
      name: 'Privacy Policy',
    },
    {
      id: 3,
      name: 'Extensions',
    },
    {
      id: 4,
      name: 'Conversion Tracking',
    },
    {
      id: 5,
      name: 'Domains',
    },
    {
      id: 6,
      name: 'Archives',
    },
  ];

  const accountSettingsSubNav = [
    {
      id: 1,
      name: 'Privacy Settings',
    },
    {
      id: 2,
      name: 'AV-Vertrag erstellen',
    },
    {
      id: 3,
      name: 'Mustertexte',
    },
    {
      id: 4,
      name: 'Link',
    },
    {
      id: 5,
      name: 'Link',
    },
    {
      id: 6,
      name: 'Link',
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
      <main className="Content">
        <div className="ContentContainer mx-auto lg:my-20">
          <div className="mb-4 items-baseline justify-between border-b px-4 lg:flex">
            <Heading title="Account Settings" size="5xl" tag="h1" />
            <Subnav data={accountSettingsNav} />
          </div>
          <Container>
            <Subnav data={accountSettingsSubNav} />

            <Form />
          </Container>
        </div>
      </main>
    </>
  );
};

export default Home;
