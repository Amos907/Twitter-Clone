import {
  IconBrandX,
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

export const itemsMain = [
  {
    title: "Home",
    icon: <IconHome2 size={36} />,
    link: "/",
    requiresUsername: false,
  },

  {
    title: "Explore",
    icon: <IconSearch size={36} />,
    link: "/explore",
    requiresUsername: false,
  },

  {
    title: "Notifications",
    icon: <IconBell size={36} />,
    link: "/notifications",
    requiresUsername: false,
  },

  {
    title: "Messages",
    icon: <IconMail size={36} />,
    link: "/messages",
    requiresUsername: false,
  },

  {
    title: "Lists",
    icon: <IconNotes size={36} />,
    link: "/lists",
    requiresUsername: true,
  },

  {
    title: "Bookmarks",
    icon: <IconBookmark size={36} />,
    link: "/x/bookmarks",
    requiresUsername: false,
  },

  {
    title: "Communities",
    icon: <IconUsers size={36} />,
    link: "/communities",
    requiresUsername: true,
  },

  {
    title: "Premium",
    icon: <IconBookmark size={36} />,
    link: "/premium",
    requiresUsername: false,
  },

  {
    title: "Profile",
    icon: <IconUser size={36} />,
    link: "",
    requiresUsername: true,
  },

  {
    title: "More",
    icon: <IconDotsCircleHorizontal size={36} />,
    link: "/",
    requiresUsername: false,
  },

  {
    title: "Post",
    icon: (
      <figure>
        <Image
          src="/images/icons/post.svg"
          style={{ objectFit: "cover" }}
          width={36}
          height={36}
          alt=""
        />
      </figure>
    ),
    link: "/",
    requiresUsername: false,
  },
];

export const itemsDrawer = [
  {
    title: "Profile",
    icon: <IconUser size={32} />,
    link: "",
    requiresUsername: true,
  },

  {
    title: "Premium",
    icon: <IconBrandX size={32} />,
    link: "/premium",
    requiresUsername: false,
  },

  {
    title: "Lists",
    icon: <IconNotes size={32} />,
    link: "/lists",
    requiresUsername: true,
  },

  {
    title: "Bookmarks",
    icon: <IconBookmark size={32} />,
    link: "/x/bookmarks",
    requiresUsername: false,
  },

  {
    title: "Communities",
    icon: <IconUsers size={32} />,
    link: "/communities",
    requiresUsername: true,
  },

  {
    title: "Monetization",
    icon: <IconCash size={32} />,
    link: "/premium",
    requiresUsername: false,
  },
];
