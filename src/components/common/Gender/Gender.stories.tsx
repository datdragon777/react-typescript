import Gender from "./Gender";

export default {
  title: "Components/Commons/Gender",
  component: Gender,
  tags: ["autodocs"],
  argTypes: {
    gender: {
      options: ["Male", "Female"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Gender {...args} />;

export const Default = Template.bind({});
Default.args = {
  gender: "Male",
};

export const Female = Template.bind({});
Female.args = {
  gender: "Female",
};
