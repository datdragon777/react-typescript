import Contact from "./Contact";

export default {
  title: "Components/Contact",
  component: Contact,
  tags: ["autodocs"],
  argTypes: {
    selectedCustomer: {
      table: {
        disable: false,
      }
    }
  },
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedCustomer: {
    mail: "decker_ultra1780@ultraman.com",
    phoneNumber: "0457863245",
    address: "123 Main St, City, Country",
  },
};
