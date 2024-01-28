import React from "react";
import Image from "next/image";
import { Divider } from "@mantine/core";
import {
  IconDots,
  IconArrowLeft,
  IconMessageCircle,
  IconShare,
} from "@tabler/icons-react";
import { faker } from "@faker-js/faker";
import OffsetSectionContainer from "@/app/components/offset-section-container";
import Trends from "@/app/components/layout/trends";

const Bookmarks = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <OffsetSectionContainer>
      <section>
        <div className="flex justify-between mt-2 space-x-2 mx-3">
          <div className="flex items-center space-x-4">
            <IconArrowLeft size={32} />

            <div>
              <p className="font-semibold text-lg">Bookmarks</p>
              <p className="text-light-400">
                {"@"}
                {faker.person.bio()}
              </p>
            </div>
          </div>

          <IconDots size={24} className="mt-1" />
        </div>

        {/* <div className="p-6">
          <div className="space-y-2">
            <p className="font-bold text-3xl">Save posts for later</p>
            <p className="text-light-400">
              Bookmark posts to easily find the in the future.
            </p>
          </div>
        </div> */}

        {faker.datatype.array(22).map((item) => (
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
                <IconDots />
              </div>
            </div>

            <div className="pl-16 pr-4">
              {/* <figure className="h-64 w-full relative">
                <Image
                  className="rounded-xl"
                  src={faker.image.fashion(512, 512, consume_data)}
                  style={{ objectFit: "cover" }}
                  sizes="100vh"
                  fill
                  alt=""
                />
              </figure> */}

              <p>{faker.lorem.sentences(3)}/</p>

              <div className="flex justify-between items-center">
                <div className="flex justify-around py-4 flex-1">
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
                </div>

                <div className="flex space-x-1">
                  <figure className="w-5 h-5 relative">
                    <Image
                      src="/images/icons/bookmark-filled.svg"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      sizes="100vh"
                      alt=""
                    />
                  </figure>

                  <figure className="w-5 h-5 relative">
                    <Image
                      src="/images/icons/share2.svg"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      sizes="100vh"
                      alt=""
                    />
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

export default Bookmarks;
