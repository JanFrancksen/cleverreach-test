import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const ContentContainer = ({ children }: ContainerProps) => (
  <section className="content h-full w-full items-center justify-center overflow-y-scroll p-4 print:m-0 print:p-0 lg:py-20">
    <div className="mx-auto w-container print:w-full">{children}</div>
  </section>
);

export default ContentContainer;
