// YourComponent.stories.js|jsx
import UserInfoPanelTemplate from '../../Components/Templates/UserInfoPanel/UserInfoPanelTemplate';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/UserProfile',
  component: UserInfoPanelTemplate,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UserInfoPanelTemplate {...args} />;

export const UserInfoPanel = Template.bind({});
UserInfoPanel.args = {
  AvatarVisibility: false,
  userData: {
    firstName: 'Tong',
    middleName: '',
    lastName: 'Ha',
    title: 'Web Developer',
    anniversary: 'Jan 1, 2022',
    yearsWithCompany: 1,
    avatarURL: 'https://robohash.org/blanditiisvoluptateid.png?set=set1',
    stationsData: [
      {
        name: 'CAD',
        detail: {
          value: 200,
          average: 100,
          goal: 200,
        },
      },
      {
        name: 'Print',
        detail: {
          value: 300,
          average: 100,
          goal: 200,
        },
      },
      {
        name: 'Therm',
        detail: {
          value: 400,
          average: 100,
          goal: 200,
        },
      },
      {
        name: 'Laser',
        detail: {
          value: 500,
          average: 100,
          goal: 200,
        },
      },
      {
        name: 'Mill',
        detail: {
          value: 600,
          average: 100,
          goal: 200,
        },
      },
      {
        name: 'Tumble',
        detail: {
          value: 200,
          average: 100,
          goal: 200,
        },
      },
      {
        name: 'Inspect',
        detail: {
          value: 200,
          average: 100,
          goal: 200,
        },
      },
      {
        name: 'Packing',
        detail: {
          value: 200,
          average: 100,
          goal: 200,
        },
      },
    ],
  },
};
