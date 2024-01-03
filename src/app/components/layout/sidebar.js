"use client";

import React from "react";
import { Divider, Drawer } from "@mantine/core";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";

import { CreatorStudio, ProfessionalTools, Settings } from "./sidebar-menus";
import { itemsDrawer } from "@/utils/sidebar-items";

const Sidebar = ({ isOpen, toggleSideBar }) => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <>
      <Drawer
        opened={isOpen}
        onClose={() => toggleSideBar()}
        size="xs"
        withCloseButton={false}
      >
        <div className="px-2">
          <div className="flex justify-between items-center">
            <figure className="" onClick={toggleSideBar}>
              <Image
                className="rounded-full"
                src={faker.image.nature(512, 512, consume_data)}
                style={{ objectFit: "cover" }}
                width={42}
                height={42}
                alt=""
              />
            </figure>

            <div className="border rounded-full py-1 px-1">
              <IconPlus size={26} />
            </div>
          </div>

          <div className="mt-2">
            <p className="font-bold">{faker.lorem.words(1)}</p>
            <p className="">@{faker.lorem.words(1)}</p>
          </div>

          <div className="flex space-x-4 mt-2">
            <p>
              <span className="font-bold mr-1">{faker.number.int(1000)}</span>
              Following
            </p>

            <p>
              <span className="font-bold mr-1">{faker.number.int(1000)}</span>
              Followers
            </p>
          </div>

          <div className="mt-4">
            {itemsDrawer.map((item) =>
              item.requiresUsername ? (
                <Link
                  key={item}
                  href={`/${faker.person.lastName()}${item.link}`}
                  className="flex items-center space-x-4 py-4"
                >
                  {item.icon}
                  <h2 className="font-bold text-xl">{item.title}</h2>
                </Link>
              ) : (
                <Link
                  key={item}
                  href={`${item.link}`}
                  className="flex items-center space-x-4 py-4"
                >
                  {item.icon}
                  <h2 className="font-bold text-xl">{item.title}</h2>
                </Link>
              )
            )}
          </div>

          <Divider />

          <div className="mt-4 space-y-6">
            <CreatorStudio />
            <ProfessionalTools />
            <Settings />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
