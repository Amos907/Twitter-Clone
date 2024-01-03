import React from "react";
import { IconBrandX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { faker } from "@faker-js/faker";
import { itemsMain } from "@/utils/sidebar-items";

const SidebarMain = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <div className="">
      <div className="space-y-3 mt-2">
        <div>
          <Link href="/" className="pb-4">
            <IconBrandX size={36} />
          </Link>

          <div className="-ml-3">
            {itemsMain.map((item) =>
              item.requiresUsername ? (
                <Link
                  key={item}
                  href={`/${faker.person.lastName()}${item.link}`}
                  className="flex items-center py-4 hover:bg-gray-100 rounded-full px-3"
                >
                  {item.icon}
                  <h2 className="hidden lg:block text-xl ml-4">{item.title}</h2>
                </Link>
              ) : (
                <Link
                  key={item}
                  href={`${item.link}`}
                  className="flex items-center py-4 hover:bg-gray-100 rounded-full px-3"
                >
                  {item.icon}
                  <h2 className="hidden lg:block text-xl ml-4">{item.title}</h2>
                </Link>
              )
            )}
          </div>
        </div>

        <div>
          <figure className="">
            <Image
              className="rounded-full"
              src={faker.image.nature(512, 512, consume_data)}
              style={{ objectFit: "cover" }}
              width={40}
              height={40}
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SidebarMain;
