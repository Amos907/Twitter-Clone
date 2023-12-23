import React from "react";
import SidebarMain from "./layout/sidebar-main";

export default function OffsetSectionContainer({ children }) {
  return (
    <section className="md:flex lg:justify-center">
      <div className="hidden md:flex justify-end md:w-1/6 mr-8 h-80">
        <SidebarMain />
      </div>
      {children}
    </section>
  );
}
