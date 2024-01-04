"use client";

import React from "react";
import Image from "next/image";
import { Divider, Button } from "@mantine/core";
import {
  IconDots,
  IconArrowLeft,
  IconMessageCircle,
  IconShare,
  IconCalendar,
} from "@tabler/icons-react";
import { faker } from "@faker-js/faker";
import OffsetSectionContainer from "@/app/components/offset-section-container";
import Trends from "@/app/components/layout/trends";

const Profile = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <OffsetSectionContainer>
      <section>
        <div className="flex justify-between mt-2 space-x-2 mx-3">
          <div className="flex items-center space-x-4">
            <IconArrowLeft size={32} />

            <div>
              <p className="font-semibold text-lg">
                {faker.person.firstName()}
              </p>
              <p className="text-light-400">
                {faker.datatype.number(10000)} posts
              </p>
            </div>
          </div>
        </div>

        <div
          className="py-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(229,231,235,1) 0%, rgba(229,231,235,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)",
          }}
        >
          <div class="m-2 flex justify-between">
            <figure className="">
              <Image
                className="rounded-full border-4 border-white"
                src={faker.image.fashion(512, 512, consume_data)}
                style={{ objectFit: "cover" }}
                width={90}
                height={90}
                alt=""
              />
            </figure>
            <div className="mt-12">
              <div className="px-4 border py-2 border-gray-200 rounded-full cursor-pointer">
                <p className="text-sm font-semibold">Edit Profile</p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-16 ml-2 mr-2">
          <p className="font-semibold text-lg">{faker.person.firstName()}</p>
          <p className="text-light-400">@{faker.lorem.words(1)}</p>
          <div className="flex space-x-2 pt-2 items-center">
            <IconCalendar size={22} />
            <p>Joined Jully 2022</p>
          </div>

          <div className="flex space-x-2 pt-1">
            <p>
              <span className="font-bold">{faker.datatype.number(1000)}</span>{" "}
              <span className="text-gray-400">Followers</span>
            </p>
            <p>
              <span className="font-bold">{faker.datatype.number(1000)}</span>{" "}
              <span className="text-gray-400">Following</span>
            </p>
          </div>

          <div className="flex justify-between mt-4">
            <div className="">
              <p className="font-bold">Posts</p>
              <Divider
                className="rounded-md mt-2 w-14 -ml-1"
                size="xl"
                color="blue"
              />
            </div>

            <div>
              <p className="text-light-400">Replies</p>
              {/* <Divider className="rounded-md mt-2" size="xl" color="blue" /> */}
            </div>

            <div>
              <p className="text-light-400">Highlights</p>
              {/* <Divider className="rounded-md mt-2" size="xl" color="blue" /> */}
            </div>

            <div>
              <p className="text-light-400">Media</p>
              {/* <Divider className="rounded-md mt-2" size="xl" color="blue" /> */}
            </div>

            <div>
              <p className="text-light-400">Likes</p>
              {/* <Divider className="rounded-md mt-2" size="xl" color="blue" /> */}
            </div>
          </div>
        </div>
        <Divider />

        {faker.datatype.array(2).map((item) => (
          <div key={item} className="">
            <div className="flex space-x-1 p-2 pl-8">
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
              <p className="text-sm font-semibold text-gray-600">
                You Reposted
              </p>
            </div>
            <div className="pt-0 p-4 pb-1 flex justify-between">
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
                  sizes="100vh"
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
      </section>

      <section>
        <Trends />
      </section>
    </OffsetSectionContainer>
  );
};

export default Profile;
