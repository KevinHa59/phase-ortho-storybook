// YourComponent.stories.js|jsx
import SearchPanel from '../../Components/Templates/SearchPanel/SearchPanel';
import { Employees } from '../../Data/Employees';
//๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/Search',
  component: SearchPanel,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <SearchPanel {...args} />;

export const SearchWithSuggestion = Template.bind({});
SearchWithSuggestion.args = {
  limit: 10,
  showAvatar: true,
  EmployeeData: Employees,
};
