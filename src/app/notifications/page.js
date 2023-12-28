"use client";

import React from "react";
import Image from "next/image";
import { Divider } from "@mantine/core";
import { IconSettingsFilled, IconDots } from "@tabler/icons-react";
import { faker } from "@faker-js/faker";
import OffsetSectionContainer from "../components/offset-section-container";
import Trends from "../components/layout/trends";

const Notifications = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <OffsetSectionContainer>
      <div>
        <header className="flex justify-between mt-2 space-x-2 mx-3">
          <div className="flex items-center space-x-4">
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

            <p className="font-semibold text-lg">Notifications</p>
          </div>

          <IconSettingsFilled size={24} className="mt-1" />
        </header>

        <section className="mx-8 pt-2">
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <p className="font-bold text-lg">All</p>
              <Divider
                className="rounded-md mt-2 w-14"
                size="xl"
                color="blue"
              />
            </div>

            <div>
              <p className="text-light-400 text-lg">Verified</p>
              {/* <Divider className="rounded-md mt-2" size="xl" color="blue" /> */}
            </div>

            <div>
              <p className="text-light-400 text-lg">Mentions</p>
              {/* <Divider className="rounded-md mt-2" size="xl" color="blue" /> */}
            </div>
          </div>

          <div></div>
        </section>

        <Divider />

        {faker.datatype.array(3).map((item) => (
          <div key={item} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <figure>
                  <Image
                    src="/images/icons/person-filled.svg"
                    style={{
                      objectFit: "cover",
                    }}
                    width={32}
                    height={32}
                    alt=""
                  />
                </figure>

                <figure className="">
                  <Image
                    className="rounded-full"
                    src={faker.image.nature(512, 512, consume_data)}
                    style={{ objectFit: "cover" }}
                    width={32}
                    height={32}
                    alt=""
                  />
                </figure>
              </div>

              <IconDots />
            </div>
            <p className="space-x-2 pl-10">
              <span className="font-bold">{faker.lorem.words(2)}</span>
              <span className="text-sm">followed you</span>
            </p>
          </div>
        ))}

        {faker.datatype.array(3).map((item) => (
          <div key={item} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <figure>
                  <Image
                    src="/images/icons/heart-red.svg"
                    style={{
                      objectFit: "cover",
                    }}
                    width={32}
                    height={32}
                    alt=""
                  />
                </figure>

                <figure className="">
                  <Image
                    className="rounded-full"
                    src={faker.image.nature(512, 512, consume_data)}
                    style={{ objectFit: "cover" }}
                    width={32}
                    height={32}
                    alt=""
                  />
                </figure>
              </div>

              <IconDots />
            </div>

            <div className="pl-10">
              <p className="space-x-2">
                <span className="font-bold">{faker.lorem.words(2)}</span>
                <span className="text-sm">liked your repost</span>
              </p>

              <p>{faker.lorem.sentence(8)}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Trends />
      </div>
    </OffsetSectionContainer>
  );
};

export default Notifications;
