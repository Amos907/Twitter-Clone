import React from "react";
import {
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

import Image from "next/image";
import Link from "next/link";
import { faker } from "@faker-js/faker";

const SidebarMain = () => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  return (
    <div className="">
      <div className="space-y-3 mt-2">
        <div>
          <Link href="/" className="pb-4">
            <IconBrandX size={36} />
          </Link>

          <Link href="/" className="flex items-center py-4">
            <IconHome2 size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Home</h2>
          </Link>

          <Link href="/explore" className="flex items-center py-4">
            <IconSearch size={32} />
            <h2 className="hidden lg:flex text-xl ml-4">Explore</h2>
          </Link>

          <Link href="/notifications" className="flex items-center py-4">
            <IconBell size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Notifications</h2>
          </Link>

          <div className="flex items-center py-4">
            <IconMail size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Messages</h2>
          </div>

          <Link
            href={`/${faker.person.lastName()}/lists`}
            className="flex items-center space-x-4 py-4"
          >
            <IconNotes size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Lists</h2>
          </Link>

          <div className="flex items-center space-x-4 py-4">
            <IconBookmark size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Bookmarks</h2>
          </div>

          <div className="flex items-center space-x-4 py-4">
            <IconUsers size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Communities</h2>
          </div>

          <div className="flex items-center space-x-4 py-4">
            <IconBrandX size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Premium</h2>
          </div>

          <div className="flex items-center py-4">
            <IconUser size={32} />
            <h2 className="hidden lg:block text-xl ml-4">Profile</h2>
          </div>

          <div className="flex items-center py-4">
            <IconDotsCircleHorizontal size={32} />
            <h2 className="hidden lg:block text-xl ml-4">More</h2>
          </div>

          <div className="flex items-center space-x-4 py-4">
            <figure>
              <Image
                src="/images/icons/post.svg"
                style={{ objectFit: "cover" }}
                width={36}
                height={36}
                alt=""
              />
            </figure>
            <h2 className="hidden lg:block text-xl ml-4">Post</h2>
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
