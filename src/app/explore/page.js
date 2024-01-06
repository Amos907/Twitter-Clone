"use client";

import React, { useState } from "react";
import OffsetSectionContainer from "../components/offset-section-container";
import {
  IconSearch,
  IconSettingsFilled,
  IconDots,
  IconShare,
  IconMessageCircle,
} from "@tabler/icons-react";
import { Autocomplete, Divider, Button } from "@mantine/core";
import Image from "next/image";
import Sidebar from "../components/layout/sidebar";
import { faker } from "@faker-js/faker";

const Explore = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";
  const [isOpen, setOpen] = useState(false);
  const toggleSideBar = () => {
    setOpen(!isOpen);
  };

  return (
    <main>
      <OffsetSectionContainer>
        <section>
          <div className="flex justify-around mt-2 space-x-2 mx-3">
            <figure className="md:hidden" onClick={toggleSideBar}>
              <Image
                className="rounded-full"
                src={faker.image.nature(512, 512, consume_data)}
                style={{ objectFit: "cover" }}
                width={40}
                height={40}
                alt=""
              />
            </figure>

            <div className="w-full rounded-lg bg-light-200 flex justify-between h-10 my-auto mb-2">
              <div className="justify-center pl-4">
                <Autocomplete
                  variant="unstyled"
                  radius={0}
                  placeholder="Search"
                  data={[]}
                />
              </div>

              <div className="rounded-r-lg cursor-pointer pt-1">
                <IconSearch size={32} className="p-1" />
              </div>
            </div>

            <IconSettingsFilled size={30} className="mt-1" />
          </div>

          <section className="mx-3">
            <div className="rounded-lg p-3 mt-4 space-y-3">
              <p className="font-bold text-xl">Trends for you</p>
              {faker.datatype.array(5).map((item) => (
                <div key={item} className="">
                  <div className="flex justify-between">
                    <p className="text-gray">{faker.lorem.words(2)}</p>
                    <IconDots />
                  </div>
                  <div className="">
                    <p className="font-bold text-base">
                      {faker.lorem.words(1)}
                    </p>
                    <p className="text-gray text-sm">
                      {faker.number.int(1000)}K {""} posts
                    </p>
                  </div>
                </div>
              ))}

              <p className="text-blue cursor-pointer py-2">Show more</p>
            </div>
          </section>

          <Divider />

          {faker.datatype.array(3).map((item) => (
            <div key={item}>
              <section className="mx-3">
                <div className="flex justify-between items-center">
                  <div className="flex pt-4 space-x-2 items-center">
                    <figure className="">
                      <Image
                        className="rounded-full"
                        src="/images/icons/msg.svg"
                        style={{ objectFit: "cover" }}
                        width={20}
                        height={20}
                        alt=""
                      />
                    </figure>

                    <p className="text-2xl font-bold">{faker.lorem.words(2)}</p>
                  </div>
                  <div className="mr-2">
                    <IconDots />
                  </div>
                </div>

                {faker.datatype.array(5).map((item) => (
                  <div key={item} className="">
                    <div className="p-2 pb-1 flex justify-between">
                      <div className="flex">
                        <figure className="">
                          <Image
                            className="rounded-full"
                            src={faker.image.fashion(512, 512, consume_data)}
                            style={{ objectFit: "cover" }}
                            width={45}
                            height={45}
                            alt=""
                          />
                        </figure>

                        <div className="pl-2">
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
                              <p>{faker.number.int(24)}h</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-1">
                        <IconDots />
                      </div>
                    </div>

                    <div className="pl-16 pr-4">
                      <figure className="h-64 w-full relative">
                        <Image
                          className="rounded-xl"
                          src={faker.image.fashion(512, 512, consume_data)}
                          style={{ objectFit: "cover" }}
                          fill
                          sizes="100vh"
                          alt=""
                        />
                      </figure>

                      <div className="flex justify-around py-4">
                        <div className="flex space-x-1">
                          <figure className="w-5 h-5">
                            <IconMessageCircle color="gray" />
                          </figure>

                          <p>{faker.number.int(1000)}</p>
                        </div>

                        <div className="flex space-x-1">
                          <figure className="w-5 h-5 relative">
                            <Image
                              src="/images/icons/heart-red.svg"
                              fill
                              style={{
                                objectFit: "cover",
                              }}
                              sizes="100vh"
                              alt=""
                            />
                          </figure>
                          <p>{faker.number.int(1000)}</p>
                        </div>

                        <div className="flex space-x-1">
                          <figure className="w-5 h-5 relative">
                            <Image
                              src="/images/icons/retweet-green.svg"
                              fill
                              style={{
                                objectFit: "cover",
                              }}
                              sizes="100vh"
                              alt=""
                            />
                          </figure>
                          <p>{faker.number.int(1000)}</p>
                        </div>

                        <div className="flex space-x-1">
                          <figure className="w-5 h-5 relative">
                            <Image
                              src="/images/icons/analytics-post.svg"
                              fill
                              style={{
                                objectFit: "cover",
                              }}
                              sizes="100vh"
                              alt=""
                            />
                          </figure>
                          <p>{faker.number.int(1000)}</p>
                        </div>

                        <div className="flex space-x-1">
                          <figure className="w-5 h-5">
                            <IconShare color="gray" />
                          </figure>
                        </div>
                      </div>
                    </div>

                    <Divider my="xs" />
                  </div>
                ))}
              </section>

              <section className="mx-3">
                <div className="flex justify-between items-center">
                  <div className="flex pt-2 space-x-2">
                    <figure className="">
                      <Image
                        className="rounded-full"
                        src="/images/icons/topic.svg"
                        style={{ objectFit: "cover" }}
                        width={20}
                        height={20}
                        alt=""
                      />
                    </figure>
                    <div>
                      <p className="text-2xl font-bold">
                        {faker.lorem.words(2)}
                      </p>
                      <p className="text-gray">{faker.lorem.word(8)}</p>
                    </div>
                  </div>
                  <div className="mr-2">
                    <Button className="rounded-xl" size="sm" variant="outline">
                      Following
                    </Button>
                  </div>
                </div>

                <p className="text-blue cursor-pointer py-2">Show more</p>
              </section>

              <Divider />
            </div>
          ))}
        </section>
        <div>
          <div className="bg-light-200 rounded-lg p-3 mt-4 space-y-3">
            <p className="font-bold text-xl">Who to follow</p>
            {faker.datatype.array(3).map((item) => (
              <div className="flex justify-between" key={item}>
                <div className="flex space-x-2">
                  <figure className="">
                    <Image
                      className="rounded-full"
                      src={faker.image.fashion(512, 512, consume_data)}
                      style={{ objectFit: "cover" }}
                      width={44}
                      height={44}
                      alt=""
                    />
                  </figure>

                  <div>
                    <div className="flex space-x-1 items-center">
                      <p>{faker.lorem.words(2)}</p>
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
                    <p className="text-gray">@{faker.lorem.words(2)}</p>
                  </div>
                </div>

                <Button color="dark" className="rounded-xl">
                  follow
                </Button>
              </div>
            ))}

            <p className="text-blue cursor-pointer py-2">Show more</p>
          </div>
        </div>
      </OffsetSectionContainer>
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
    </main>
  );
};

export default Explore;
