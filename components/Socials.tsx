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
  {
    name: "Reddit",
    url: "https://reddit.com/r/NanoGiveaway",
    actionText: "Browse our subreddit",
    Icon: (props) => <FaReddit {...props} />,
    color: "#ff4500",
  },
];

const Socials = ({ className = "" }) => {
  return (
    <ul className={className}>
      {socials.map(({ name, url, Icon, actionText, color }) => (
        <li key={name}>
          <a
            href={url}
            style={{ backgroundColor: color }}
            className="flex gap-x-4 rounded p-4"
          >
            <Icon className="h-6 w-6" />
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
