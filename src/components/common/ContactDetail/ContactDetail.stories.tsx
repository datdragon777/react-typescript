import ContactDetail from "./ContactDetail";
import { email, phone, location } from "@assets/images";

export default {
  title: "Components/Commons/ContactDetail",
  component: ContactDetail,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "radio", options: [email, phone, location] },
    info: { control: "text" },
    type: { control: "radio", options: ["email", "phone", "address"] },
  },
};

const Template = (args) => <ContactDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: email,
  info: "decker_ultra1402@gmail.com",
  type: "email",
};

export const Phone = Template.bind({});
Phone.args = {
  icon: phone,
  info: "0259785124",
  type: "phone",
};

export const Address = Template.bind({});
Address.args = {
  icon: location,
  info: "01 Phan Dang Luu",
  type: "address",
};
