// YourComponent.stories.js|jsx
import YearWithCompanyTemplate from '../../Components/Templates/YearWithCompany/YearWithCompanyTemplate';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/UserProfile',
  component: YearWithCompanyTemplate,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <YearWithCompanyTemplate {...args} />;

export const YearsWithCompany = Template.bind({});
YearsWithCompany.args = {
  label: 'Years with company: ',
  labelSize: '15px',
  year: 2,
  yearSize: '20px',
  height: '40px',
};
