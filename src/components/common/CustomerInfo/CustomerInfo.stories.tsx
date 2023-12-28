import CustomerInfo from "./CustomerInfo";
import { accountAvatar } from "@assets/images";

export default {
  title: "Components/Commons/CustomerInfo",
  component: CustomerInfo,
  tags: ["autodocs"],
  argTypes: {
    avatar: { control: { type: "file", accept: "image/*" } },
    name: { control: "text" },
  },
};

const Template = (args) => <CustomerInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: accountAvatar,
  name: "Openheimer",
};
