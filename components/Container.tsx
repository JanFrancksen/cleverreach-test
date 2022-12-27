import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <section className="px-12 pt-20 print:w-full">{children}</section>
);

export default Container;
