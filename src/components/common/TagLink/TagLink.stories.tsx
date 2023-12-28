import TagLink from "./TagLink";
import { BrowserRouter } from "react-router-dom";
import { dashboard } from "@assets/images";

export default {
  title: "Components/Commons/Tag Link",
  component: TagLink,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: { type: "file", accept: ".svg" } },
    name: { control: "text" },
    path: { control: "text" },
    isActive: { control: "boolean" },
    isAnalytics: { control: "boolean" },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <TagLink {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  icon: dashboard,
  name: "Default Link",
  path: "https://www.youtube.com/",
  isActive: false,
  isAnalytics: true,
};

export const Active = Template.bind({});
Active.args = {
  icon: dashboard,
  name: "Active Link",
  path: "/",
  isActive: true,
  isAnalytics: true,
};
