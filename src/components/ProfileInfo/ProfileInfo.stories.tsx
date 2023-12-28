import ProfileInfo from './ProfileInfo';

export default {
  title: 'Components/ProfileInfo',
  component: ProfileInfo,
  tags: ['autodocs'],
};

const Template = (args) => <ProfileInfo {...args} />;

export const Default = Template.bind({});
Default.args = {};
