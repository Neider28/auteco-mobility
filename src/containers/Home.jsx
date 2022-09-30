import React from 'react';
import { Events } from '../components/Events.jsx';
import { Blogs } from '../components/Blogs.jsx';

const Home = () => {
  return (
    <main>
      <Events />
      <Blogs />
    </main>
  );
};

export { Home };
