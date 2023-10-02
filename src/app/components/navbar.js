"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconBrandX } from "@tabler/icons-react";
import { faker } from "@faker-js/faker";
import { Divider } from "@mantine/core";
import Sidebar from "./sidebar";

const Navbar = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";
  const [isOpen, setOpen] = useState(false);
  const toggleSideBar = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className="py-2 w-full">
      <div className="px-3 flex items-center">
        <figure className="" onClick={toggleSideBar}>
          <Image
            className="rounded-full"
            src={faker.image.nature(512, 512, consume_data)}
            style={{ objectFit: "cover" }}
            width={40}
            height={40}
            alt=""
          />
        </figure>

        <IconBrandX size={30} className="mx-auto" />
      </div>

      <div className="flex justify-between px-16 mt-4">
        <div>
          <p className="font-bold">For you</p>
          <Divider className="rounded-md mt-2" size="xl" color="blue" />
        </div>

        <div>
          <p>Following</p>
          <Divider className="rounded-md mt-2" size="xl" color="blue" />
        </div>
      </div>

      <Divider my="xs" variant="dotted" className="-pt-4" />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
    </nav>
  );
};

export default Navbar;
