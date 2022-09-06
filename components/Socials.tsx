import { FaTwitter, FaDiscord, FaTwitch, FaReddit } from "react-icons/fa";
import SocialItem from "../types/social";

const socials: SocialItem[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/NanoGiveaway",
    actionText: "Follow us on",
    Icon: (props) => <FaTwitter {...props} />,
    color: "#1d9bf0",
  },
  {
    name: "Discord",
    url: "https://discord.gg/xno",
    actionText: "Join our community on",
    Icon: (props) => <FaDiscord {...props} />,
    color: "#5865F2",
  },
  {
    name: "Twitch",
    url: "https://twitch.tv/nanogiveaway",
    actionText: "Watch the stream",
    Icon: (props) => <FaTwitch {...props} />,
    color: "#9146ff",
  },
  // {
  //   name: "Reddit",
  //   url: "https://reddit.com/r/NanoGiveaway",
  //   actionText: "Browse our subreddit",
  //   Icon: (props) => <FaReddit {...props} />,
  //   color: "#ff4500",
  // },
];

const Socials = ({ className = "" }) => {
  return (
    <ul className={className}>
      {socials.map(({ name, url, Icon, actionText, color }) => (
        <li key={name} className="lg:w-36">
          <a
            href={url}
            style={{ backgroundColor: color }}
            className="flex items-center gap-x-4 rounded p-4 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-gray hover:ring hover:ring-light focus:outline-none focus-visible:ring focus-visible:ring-light"
          >
            <Icon className="h-6 w-6" />
            <span className="md:text-xl">{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
