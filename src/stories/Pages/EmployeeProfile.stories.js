// YourComponent.stories.js|jsx
import UserProfileTemplate from '../../Components/Templates/Pages/UserProfile/UserProfileTemplate';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/SamplePages/EmployeeProfile',
  component: UserProfileTemplate,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UserProfileTemplate {...args} />;

export const EmployeeProfile = Template.bind({});
EmployeeProfile.args = {};
