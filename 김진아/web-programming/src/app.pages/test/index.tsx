import React from 'react';

type TProps = {
  title: string;
  age?: number;
};

const PageTest: React.FC<TProps> = ({ title, age = 20 }) => {
  return <div>{age}</div>;
};

export default PageTest;
