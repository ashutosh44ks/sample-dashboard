import { IconBook, IconChartPie, IconFolder, IconIdBadge, IconNotebook, IconShoppingBagPlus, IconSpeakerphone, IconUser, IconUsersGroup } from "@tabler/icons-react";

export const sidebarData = {
  user: {
    name: "Bye Wind",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  dashboards: [
    {
      title: "Default",
      url: "/dashboard/default",
      icon: IconChartPie,
      items: [],
    },
    {
      title: "eCommerce",
      url: "/dashboard/ecommerce",
      icon: IconShoppingBagPlus,
      items: [
        {
          title: "Overview",
          url: "/dashboard/ecommerce/overview",
        },
        {
          title: "Orders",
          url: "/dashboard/ecommerce/orders",
        },
      ],
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: IconFolder,
      items: [
        {
          title: "Overview",
          url: "/dashboard/projects/overview",
        },
        {
          title: "Create New",
          url: "/dashboard/projects/create-new",
        },
      ],
    },
    {
      title: "Online Courses",
      url: "/dashboard/online-courses",
      icon: IconBook,
      items: [
        {
          title: "Overview",
          url: "/dashboard/online-courses/overview",
        },
        {
          title: "Create New",
          url: "/dashboard/online-courses/create-new",
        },
      ],
    },
  ],
  pages: [
    {
      title: "User Profile",
      url: "/pages/user-profile",
      icon: IconUser,
      items: [
        {
          title: "Overview",
          url: "/pages/user-profile/overview",
        },
        {
          title: "Projects",
          url: "/pages/user-profile/projects",
        },
        {
          title: "Campaigns",
          url: "/pages/user-profile/campaigns",
        },
        {
          title: "Documents",
          url: "/pages/user-profile/documents",
        },
        {
          title: "Followers",
          url: "/pages/user-profile/followers",
        },
      ],
    },
    {
      title: "Account",
      url: "/pages/account",
      icon: IconIdBadge,
      items: [
        {
          title: "Settings",
          url: "/pages/account/settings",
        },
        {
          title: "Billing",
          url: "/pages/account/billing",
        },
      ],
    },
    {
      title: "Corporate",
      url: "/pages/corporate",
      icon: IconUsersGroup,
      items: [
        {
          title: "About",
          url: "/pages/corporate/about",
        },
        {
          title: "Team",
          url: "/pages/corporate/team",
        },
      ],
    },
    {
      title: "Blog",
      url: "/pages/blog",
      icon: IconNotebook,
      items: [
        {
          title: "Posts",
          url: "/pages/blog/posts",
        },
        {
          title: "Post",
          url: "/pages/blog/post",
        },
      ],
    },
    {
      title: "Social",
      url: "/pages/social",
      icon: IconSpeakerphone,
      items: [
        {
          title: "Feed",
          url: "/pages/social/feed",
        },
        {
          title: "Connections",
          url: "/pages/social/connections",
        },
      ],
    },
  ],
};
