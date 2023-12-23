"use client";

import { useState } from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import Navbar from "./components/layout/navbar";
import { Divider, Autocomplete, Button } from "@mantine/core";
import {
  IconDots,
  IconMessageCircle,
  IconRepeat,
  IconHeart,
  IconChartBar,
  IconShare,
  IconBrandX,
  IconPlus,
  IconUser,
  IconNotes,
  IconBookmark,
  IconUsers,
  IconCash,
  IconHome2,
  IconSearch,
  IconBell,
  IconMail,
  IconDotsCircleHorizontal,
} from "@tabler/icons-react";
import PostOptions from "./components/post-options-modal";
import OffsetSectionContainer from "./components/offset-section-container";

export default function Home() {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";
  const [open, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!open);
  };
  return (
    <main>
      <OffsetSectionContainer>
        <div className="flex-grow md:border-l border-r overflow-y-scroll flex-shrink h-[100%] md:w-3/4 lg:w-1/3 md:flex-none">
          <Navbar />
          <Divider my="xs" />
          <div className="">
            {faker.datatype.array(10).map((item) => (
              <div key={item} className="">
                <div className="p-4 pb-1 flex justify-between">
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
                    <IconDots onClick={toggleModal} />
                  </div>
                </div>

                <div className="pl-16 pr-4">
                  <figure className="h-64 w-full relative">
                    <Image
                      className="rounded-xl"
                      src={faker.image.fashion(512, 512, consume_data)}
                      style={{ objectFit: "cover" }}
                      fill
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
          </div>

          {/* <div className="">
            <PostOptions isOpen={open} toggleModal={toggleModal} />
          </div> */}
        </div>

        <div className="hidden lg:w-1/6 lg:block mx-10 mt-2">
          <div className="hidden rounded-lg bg-light-200  md:flex justify-between w-80 h-10 my-auto mb-2">
            <div className="flex-grow justify-center pl-4">
              <Autocomplete
                variant="unstyled"
                radius={0}
                placeholder="Search"
                data={[]}
              />
            </div>

            <div className="rounded-r-lg cursor-pointer pt-1">
              <IconSearch size="2em" className="p-1" />
            </div>
          </div>

          <div className="bg-light-200 mt-4 h-42 rounded-lg p-3 space-y-1">
            <p className="font-bold text-xl">Subscribe to Premium</p>
            <p className="text-base font-semibold">
              Subscribe to unlock new features and if elligible, receive a share
              of ads revenue.
            </p>

            <Button className="rounded-lg" color="dark">
              Subscribe
            </Button>
          </div>

          <div className="bg-light-200 mt-4 rounded-lg p-3 space-y-3">
            <p className="font-bold text-xl">Live on X</p>
            {faker.datatype.array(3).map((item) => (
              <div key={item} className="space-y-2">
                <div className="flex space-x-1 items-center">
                  <figure className="">
                    <Image
                      className="rounded-full"
                      src={faker.image.fashion(512, 512, consume_data)}
                      style={{ objectFit: "cover" }}
                      width={22}
                      height={22}
                      alt=""
                    />
                  </figure>

                  <p className="capitalize text-sm font-semibold">
                    {faker.lorem.words(3)}
                  </p>

                  <figure>
                    <Image
                      src="/images/icons/twitter-blue.png"
                      style={{
                        objectFit: "cover",
                      }}
                      width={16}
                      height={16}
                      alt=""
                    />
                  </figure>

                  <p className="text-sm text-gray">is hosting</p>
                </div>

                <div className="flex justify-between">
                  <p>{faker.lorem.words(6)}</p>
                  <div className="flex items-center border-2 p-2 rounded-2xl border-red space-x-1 mx-1">
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

                    <p className="text-gray text-base">+7</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-light-200 rounded-lg p-3 mt-4 space-y-3">
            <p className="font-bold text-xl">Trends for you</p>
            {faker.datatype.array(10).map((item) => (
              <div key={item} className="">
                <div className="flex justify-between">
                  <p className="text-gray">{faker.lorem.words(2)}</p>
                  <IconDots />
                </div>
                <div className="">
                  <p className="font-bold text-base">{faker.lorem.words(1)}</p>
                  <p className="text-gray text-sm">
                    {faker.number.int(1000)}K {""} posts
                  </p>
                </div>
              </div>
            ))}
          </div>

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
          </div>
        </div>
      </OffsetSectionContainer>
    </main>
  );
}
