import { IconBaseProps } from "react-icons";

type SocialIconProp = JSX.IntrinsicAttributes & IconBaseProps;

interface SocialItem {
  name: string;
  url: string;
  actionText: string;
  Icon: (props: SocialIconProp) => JSX.Element;
  color: string;
}

export default SocialItem;
