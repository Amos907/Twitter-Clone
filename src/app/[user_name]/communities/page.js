import React from "react";
import { faker } from "@faker-js/faker";
import OffsetSectionContainer from "@/app/components/offset-section-container";
import Trends from "@/app/components/layout/trends";
import {
  IconCirclePlus,
  IconSearch,
  IconDots,
  IconUsers,
  IconArrowLeft,
} from "@tabler/icons-react";
import { Autocomplete, Divider } from "@mantine/core";
import Image from "next/image";

const Communities = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <OffsetSectionContainer>
      <section>
        <div className="flex justify-around mt-2 space-x-2 mx-3 items-center">
          <IconArrowLeft size={32} />

          <div className="w-full rounded-lg bg-light-200 flex justify-between h-10 my-auto">
            <div className="justify-center pl-4">
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

          <IconUsers size={30} className="" />
        </div>

        {/* <div className="p-6">
          <p className="font-bold text-xl">Pinned Lists</p>
          <p className="m-2 mt-8 text-light-400">
            Nothing to see here yet - pin your favorite pins to access them
            quickly.
          </p>
        </div>
        <Divider /> */}

        <div className="p-6">
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl">Discover new Communities</p>
            <IconDots size={32} />
          </div>
          <div className="space-y-4 mt-8">
            {faker.datatype.array(3).map((item) => (
              <div className="flex justify-between items-center" key={item}>
                <div className="flex space-x-2">
                  <figure className="">
                    <Image
                      className="rounded-lg"
                      src={faker.image.fashion(512, 512, consume_data)}
                      style={{ objectFit: "cover" }}
                      width={56}
                      height={56}
                      alt=""
                    />
                  </figure>

                  <div>
                    <div className="flex space-x-1 items-center">
                      <p className="font-bold text-lg">
                        {faker.lorem.words(1)}
                      </p>
                    </div>

                    <p className="text-light-400">
                      <span className="mx-1">{faker.datatype.number(100)}</span>
                      members
                    </p>

                    <div className="flex space-x-2">
                      <div className="pl-3 flex items-center">
                        {faker.datatype.array(3).map((item) => (
                          <figure
                            key={item}
                            className="-ml-3 rounded-full border"
                          >
                            <Image
                              className="rounded-full"
                              src={faker.image.fashion(512, 512, consume_data)}
                              style={{ objectFit: "cover" }}
                              width={24}
                              height={24}
                              alt=""
                            />
                          </figure>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <IconCirclePlus size={32} />
              </div>
            ))}
          </div>

          <p className="text-blue cursor-pointer pt-4">Show more</p>
        </div>

        <Divider />

        {/* <div className="p-6">
          <p className="font-bold text-xl">Your Lists</p>
          <p className="m-2 mt-8 text-light-400">
            {
              "You haven't created or followed any lists. When you do, they'll show up here."
            }
          </p>
        </div> */}
      </section>

      <section>
        <Trends />
      </section>
    </OffsetSectionContainer>
  );
};

export default Communities;
