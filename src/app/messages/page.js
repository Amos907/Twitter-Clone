"use client";

import React from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import { Autocomplete } from "@mantine/core";
import {
  IconSettingsFilled,
  IconSearch,
  IconDots,
  IconMessage2Plus,
  IconInfoCircle,
} from "@tabler/icons-react";
import SidebarMain from "../components/layout/sidebar-main";

const Messages = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <main className="md:flex lg:justify-center h-screen">
      <section className="hidden md:flex justify-end md:w-1/6 mr-8 h-80 md:mt-4">
        <SidebarMain />
      </section>
      <section className="flex-grow md:border-l border-r overflow-y-scroll flex-shrink md:w-3/5 lg:w-1/5 md:flex-none md:mt-4">
        <header className="flex justify-between mt-2 space-x-2 mx-3 md:mx-2">
          <div className="flex items-center space-x-4 md:space-x-2">
            <figure className="md:hidden">
              <Image
                className="rounded-full"
                src={faker.image.nature(512, 512, consume_data)}
                style={{ objectFit: "cover" }}
                width={40}
                height={40}
                alt=""
              />
            </figure>

            <p className="font-semibold text-lg">Messages</p>
          </div>
          <div className="mt-1 flex space-x-2">
            <IconSettingsFilled size={24} />
            <IconMessage2Plus size={24} className="hidden md:block" />
          </div>
        </header>

        <div className="m-3">
          <div className="w-full rounded-lg bg-light-200 flex justify-between h-10 my-auto mb-2">
            <div className="justify-center pl-4">
              <Autocomplete
                variant="unstyled"
                radius={0}
                placeholder="Search direct messages"
                data={[]}
              />
            </div>

            <div className="rounded-r-lg cursor-pointer pt-1">
              <IconSearch size={32} className="p-1" />
            </div>
          </div>
        </div>

        <div>
          {faker.datatype.array(3).map((item) => (
            <div key={item} className="p-2 pb-1">
              <div className="flex space-x-2">
                <figure className="h-12 w-12 relative">
                  <Image
                    className="rounded-full"
                    src={faker.image.fashion(512, 512, consume_data)}
                    style={{ objectFit: "cover" }}
                    fill
                    sizes="100vh"
                    alt=""
                  />
                </figure>

                <div className="pl-2 w-80">
                  <div className="flex items-center space-x-1 mb-auto">
                    <p className="font-bold">{faker.lorem.words(1)}</p>
                    <figure>
                      <Image
                        src="/images/icons/twitter-blue.png"
                        style={{
                          objectFit: "cover",
                        }}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </figure>

                    <p className="">@{faker.lorem.words(1)}</p>

                    <div className="flex items-center">
                      <p className="pl-1 pr-1 pb-2">.</p>
                      <p>Nov 11, 2023</p>
                    </div>
                  </div>
                  <div className="overflow-x-hidden mt-2">
                    <p className="text-gray-400">{faker.lorem.sentences(1)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="hidden lg:w-1/3 lg:block md:mt-4 border-r">
        {/* <div className="flex items-center justify-center my-auto h-full">
          <div className="space-y-1">
            <p className="font-bold text-3xl">Select a message</p>
            <p className="text-light-400 w-96">
              Choose from your existing conversations, start a new one, or just
              keep swimming.
            </p>
            <div className="pt-4">
              <div className="h-12 w-48 border bg-blue rounded-full cursor-pointer flex items-center justify-center">
                <p className="font-semibold text-white">New Message</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1 mb-auto">
              <p className="font-bold">{faker.lorem.words(1)}</p>
              <figure>
                <Image
                  src="/images/icons/twitter-blue.png"
                  style={{
                    objectFit: "cover",
                  }}
                  width={18}
                  height={18}
                  alt=""
                />
              </figure>
            </div>

            <IconInfoCircle size={24} />
          </div>

          <div className="hover:bg-gray-100 mt-4 text-center">
            <div className="pt-4 space-y-1 flex justify-center">
              <figure className="h-16 w-16 relative">
                <Image
                  className="rounded-full"
                  src={faker.image.fashion(512, 512, consume_data)}
                  style={{ objectFit: "cover" }}
                  fill
                  sizes="100vh"
                  alt=""
                />
              </figure>
            </div>

            <div className="flex justify-center space-x-1 mt-1">
              <p className="font-bold">{faker.lorem.words(1)}</p>
              <figure className="h-4 w-4 relative">
                <Image
                  src="/images/icons/twitter-blue.png"
                  style={{
                    objectFit: "cover",
                  }}
                  fill
                  sizes="100vh"
                  alt=""
                />
              </figure>
            </div>

            <div>
              <p>@{faker.lorem.word(8)}</p>
              <p>
                {faker.lorem.sentences(1)}
                <span className="text-blue">#{faker.lorem.word(8)}</span>
              </p>
              <div className="flex items-center text-light-400 justify-center">
                <p className="">Joined March 2007</p>
                <p className="pl-1 pr-1 pb-2">.</p>
                <p className="">
                  {faker.number.float({ min: 10, max: 100, precision: 0.1 })}K
                  Followers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Messages;
