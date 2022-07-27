import React from 'react';
import propTypes from 'prop-types';

function Home({ active }) {
  return (
    <main
      className={
        active ? 'homeContainer homeContainerDesactived' : 'homeContainer'
      }
      // tabIndex={active ? 0 : -1}
    >
      <div className="cover" />
    </main>
  );
}

Home.propTypes = {
  active: propTypes.bool.isRequired,
};

export default Home;
