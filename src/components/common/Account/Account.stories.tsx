import Account from "./Account";
import { accountAvatar, logoutIcon } from "@assets/images";

export default {
  title: "Components/Commons/Account",
  component: Account,
  tags: ["autodocs"],
  argTypes: {
    username: { control: "text" },
    avatar: { control: { type: "file", accept: "image/*" } },
    desc: { control: "text" },
    icon: { control: { type: "file", accept: ".svg" } },
  },
};

const Template = (args) => (
  <div style={{ width: 218 }}>
    <Account {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  username: "Easin Arafat",
  avatar: accountAvatar,
  desc: "Free Account",
  icon: logoutIcon,
};
