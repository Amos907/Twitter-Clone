import React from "react";
import SidebarMain from "./layout/sidebar-main";

export default function OffsetSectionContainer({ children }) {
  return (
    <section className="md:flex lg:justify-center">
      <div className="hidden md:flex justify-end md:w-1/6 mr-8 h-80 md:mt-4">
        <SidebarMain />
      </div>
      <div className="flex-grow md:border-l border-r md:border-b overflow-y-scroll flex-shrink md:w-3/4 lg:w-1/3 md:flex-none md:mt-4">
        {children[0]}
      </div>
      <div className="hidden lg:w-1/6 lg:block mx-10 md:mt-4">
        {children[1]}
      </div>
    </section>
  );
}
