// YourComponent.stories.js|jsx
import SearchPanel from '../../Components/Templates/SearchPanel/SearchPanel';
import { Employees } from '../../Data/Employees';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/Search',
  component: SearchPanel,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SearchPanel {...args} />;

export const SearchWithSuggestion = Template.bind({});
SearchWithSuggestion.args = {
  limit: 10,
  showAvatar: true,
  EmployeeData: Employees,
};
