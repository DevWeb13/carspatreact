import React from "react";

function Home({ active }) {
  return (
    <main
      className={
        active ? "homeContainer homeContainerDesactived" : "homeContainer"
      }
      tabIndex={active ? 0 : -1}
    >
      <div className="cover"></div>
    </main>
  );
}

export default Home;
