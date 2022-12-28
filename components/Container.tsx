import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <section className="px-4 print:w-full lg:px-12 lg:pt-20">{children}</section>
);

export default Container;
