import SortData from "./SortData";

export default {
  title: "Components/Commons/SortData",
  component: SortData,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <SortData {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Email",
};
