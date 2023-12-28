import Button from './Button';
import { plusIcon, editIcon, deleteIcon } from '@assets/images';
import { BUTTON_VARIANTS } from '@constants';

export default {
  title: 'Components/Commons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    btnName: { control: { type: 'text' } },
    variant: {
      control: 'select',
      options: [
        BUTTON_VARIANTS.PRIMARY,
        BUTTON_VARIANTS.SECONDARY,
        BUTTON_VARIANTS.EDIT,
        BUTTON_VARIANTS.DELETE,
        BUTTON_VARIANTS.TOGGLE,
      ],
    },
    icon: { control: { type: 'file', accept: '.svg' } },
    onClick: { action: 'handleClick' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: BUTTON_VARIANTS.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: BUTTON_VARIANTS.SECONDARY,
  icon: plusIcon,
};

export const AlignLeftEdit = Template.bind({});
AlignLeftEdit.args = {
  btnName: 'Edit',
  variant: BUTTON_VARIANTS.EDIT,
  icon: editIcon,
};

export const AlignLeftDelete = Template.bind({});
AlignLeftDelete.args = {
  btnName: 'Delete',
  variant: BUTTON_VARIANTS.DELETE,
  icon: deleteIcon,
};

export const DisabledBtn = Template.bind({});
DisabledBtn.args = {
  btnName: 'Disable click',
  variant: BUTTON_VARIANTS.PRIMARY,
  disabled: true,
};
