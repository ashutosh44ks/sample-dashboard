import bugIcon from "@/assets/bug.svg";
import userIcon from "@/assets/user.svg";
import channelIcon from "@/assets/channel.svg";

const dummyNotifications = [
  {
    type: "BUG",
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    type: "USER",
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    type: "BUG",
    title: "You have a bug that needs to be fixed.",
    time: "12 hours ago",
  },
  {
    type: "CHANNEL",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];
const dummyActivities = [
  {
    name: "You have a bug that needs...",
    time: "Just now",
    icon: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Released a new version",
    time: "59 minutes ago",
    icon: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Submitted a bug",
    time: "12 hours ago",
    icon: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    icon: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    name: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    icon: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];
const dummyContacts = [
  {
    name: "Natali Craig",
    icon: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Drew Cano",
    icon: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Orlando Diggs",
    icon: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Andi Lane",
    icon: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Kate Morrison",
    icon: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Koray Okumus",
    icon: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

const SecondarySidebar = () => {
  return (
    <div className="h-screen bg-sidebar p-4 flex flex-col gap-4 fixed">
      <div className="flex-1">
        <h3 className="text-custom-text-primary font-medium">Notifications</h3>
        <div className="mt-4 flex flex-col gap-4 max-h-[150px] max-w-[225px] overflow-y-auto overflow-x-hidden">
          {dummyNotifications.map((notification, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img
                src={
                  notification.type === "BUG"
                    ? bugIcon
                    : notification.type === "USER"
                    ? userIcon
                    : channelIcon
                }
                alt={notification.type}
                className="h-6 w-6"
              />
              <div>
                <p className="text-sm text-custom-text-primary truncate">
                  {notification.title}
                </p>
                <p className="text-xs text-custom-text-secondary">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-custom-text-primary font-medium">Activities</h3>
        <div className="mt-4 flex flex-col gap-4 max-h-[150px] max-w-[225px] overflow-y-auto overflow-x-hidden">
          {dummyActivities.map((activity, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img
                src={activity.icon}
                alt={activity.name}
                className="h-6 w-6 rounded-full"
              />
              <div>
                <p className="text-sm text-custom-text-primary truncate">
                  {activity.name}
                </p>
                <p className="text-xs text-custom-text-secondary">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-custom-text-primary font-medium">Contacts</h3>
        <div className="mt-4 flex flex-col gap-4 max-h-[150px] max-w-[225px] overflow-y-auto overflow-x-hidden">
          {dummyContacts.map((contact, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img
                src={contact.icon}
                alt={contact.name}
                className="h-6 w-6 rounded-full"
              />
              <p className="text-sm text-custom-text-primary truncate">
                {contact.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondarySidebar;
