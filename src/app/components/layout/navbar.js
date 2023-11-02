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
    <nav className="bg-white z-[1000] py-2 w-full">
      <div className="px-3 flex items-center md:hidden">
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

      <Divider my="xs" />

      <div className="z-[1000] md:hidden">
        <div className="h-9 mx-2 bg-gradient-to-r from-blue-600 to-purple-500 rounded-3xl flex">
          <div className="flex justify-between ml-4 items-center">
            {faker.datatype.array(3).map((item) => (
              <figure key={item} className="-ml-3 rounded-full border">
                <Image
                  className="rounded-full"
                  src={faker.image.fashion(512, 512, consume_data)}
                  style={{ objectFit: "cover" }}
                  width={30}
                  height={30}
                  alt=""
                />
              </figure>
            ))}

            <p className="text-sm text-white font-semibold pl-1">
              +{faker.number.int(1000)}
            </p>

            <p className="text-sm text-white pl-1 truncate w-24">
              {faker.lorem.words(4)}
            </p>

            <p className="text-white pl-1">#{faker.lorem.word(10)}</p>
            <figure className="ml-4">
              <Image
                src="/images/speech.svg"
                style={{
                  objectFit: "cover",
                }}
                width={18}
                height={18}
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>

      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
    </nav>
  );
};

export default Navbar;
