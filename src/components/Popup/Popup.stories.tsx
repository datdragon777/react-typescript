import Popup from './Popup';

export default {
  title: 'Components/Popup',
  component: Popup,
  tags: ['autodocs'],
  argTypes: {
    popupText: { control: { type: 'text' } },
    onTogglePopup: { action: 'handleClick' },
    onConfirm: { action: 'handleClick' },
  },
};

const Template = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  popupText: 'Are you sure to delete customer?',
};
