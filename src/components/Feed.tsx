import React from "react";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-1 md:max-w-1xl xl:grid-cols-1 xl:max-w-2xl max-auto">
      <section className="col-span-1">
        <Stories />
      </section>
    </main>
  );
};

export default Feed;
