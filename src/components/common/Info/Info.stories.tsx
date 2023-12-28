import Info from "./Info";
import { infoAvatar } from "@assets/images";
export default {
  title: "Components/Commons/Info",
  component: Info,
  tags: ["autodocs"],
  argTypes: {
    avatar: { control: { type: "file", accept: "image/*" } },
    name: { control: "text" },
    job: { control: "text" },
  },
};

const Template = (args) => (
  <div style={{ width: 302 }}>
    <Info {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  avatar: infoAvatar,
  name: "John Deo",
  job: "UI/UX Designer",
};
