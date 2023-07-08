import ContactCard from "@/src/pages/home/components/ContactCard";
import React from "react";

const RightBar = () => {
  return (
    <div className=" hidden md:block">
      <div className="relative w-64"></div>
      <aside
        id="separator-sidebar"
        className="fixed right-0 z-40 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h3 className=" text-gray-800 text-xl bg-gray-50 dark:bg-gray-800 dark:text-white">
            Contact
          </h3>
          <ul className="space-y-2 font-medium">
            <li>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default RightBar;
