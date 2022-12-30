import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <section className="m-4 p-4 print:w-full lg:mx-20">{children}</section>
);

export default Container;
