"use client";

import { useState } from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import Navbar from "./components/navbar";
import { Divider } from "@mantine/core";
import {
  IconDots,
  IconMessageCircle,
  IconRepeat,
  IconHeart,
  IconChartBar,
  IconShare,
} from "@tabler/icons-react";
import PostOptions from "./components/post-options-modal";

export default function Home() {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";
  const [open, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!open);
  };
  return (
    <main>
      <Navbar />
      <section className="overflow-y-scroll">
        <Divider my="xs" />
        {faker.datatype.array(10).map((item) => (
          <div key={item}>
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
                        src="/images/twitter-blue.png"
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
              <figure className="h-96 w-full relative">
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
                  <IconMessageCircle color="gray" />
                  <p>{faker.number.int(1000)}</p>
                </div>

                <div className="flex space-x-1">
                  <figure className="w-6 h-6 relative">
                    <Image
                      src="/images/heart-red.svg"
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
                  <figure className="w-6 h-6 relative">
                    <Image
                      src="/images/retweet-green.svg"
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
                  <figure className="w-6 h-6 relative">
                    <Image
                      src="/images/analytics-post.svg"
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
                  <IconShare color="gray" />
                </div>
              </div>
            </div>

            <Divider my="xs" />
          </div>
        ))}

        <div className="">
          <PostOptions isOpen={open} toggleModal={toggleModal} />
        </div>
      </section>
    </main>
  );
}
