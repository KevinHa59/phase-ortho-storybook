// YourComponent.stories.js|jsx
import EmployeeSearch from '../../Components/Templates/EmployeeSearch/EmployeeSearch';
import { Employees } from '../../Data/Employees';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/Search',
  component: EmployeeSearch,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <EmployeeSearch {...args} />;

export const SearchWithSuggestion2 = Template.bind({});
SearchWithSuggestion2.args = {
  dummyData: Employees,
};
