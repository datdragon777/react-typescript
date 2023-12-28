import { MESSAGES, TOAST_TYPES } from '@constants';
import Toast from './Toast';

export default {
  title: 'Components/Commons/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: MESSAGES.ADD.SUCCESS,
  type: TOAST_TYPES.SUCCESS
};

export const Danger = Template.bind({});
Danger.args = {
  message: MESSAGES.ADD.FAIL,
  type: TOAST_TYPES.FAIL
};
