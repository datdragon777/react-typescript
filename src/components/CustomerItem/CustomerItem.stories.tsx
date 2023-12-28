import CustomerItem from "./CustomerItem";
import { infoAvatar } from "@assets/images";

export default {
  title: "Components/CustomerItem",
  component: CustomerItem,
  tags: ["autodocs"],
  argTypes: {
    customer: {
      table: {
        disable: false,
      },
    },
  },
};

const Template = (args) => (
  <div style={{width: 1000}}>
    <CustomerItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  customer: {
    avatar: infoAvatar,
    name: "Chrodinger Openheimer",
    mail: "Nuclear_weapon@destroy.com",
    phoneNumber: "0563489512",
    gender: "Male",
  },
};
