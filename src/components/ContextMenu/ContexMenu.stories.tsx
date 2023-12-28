import ContextMenu from "./ContextMenu";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
};

const Template = (args) => <ContextMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
