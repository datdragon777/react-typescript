import FormValidation from './FormValidation';
import { CustomerProvider } from '@contexts';

export default {
  title: 'Components/FormValidation',
  component: FormValidation,
  tags: ['autodocs'],
};

const Template = (args) => (
  <CustomerProvider>
    <FormValidation {...args} />
  </CustomerProvider>
);

export const Default = Template.bind({});
Default.args = {};
