// YourComponent.stories.js|jsx
import UserListTemplate from '../../Components/Templates/UserList/UserListTemplate';
import { EmployeesData } from '../../Data/EmployeesData';
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/SamplePages/EmployeeList',
  component: UserListTemplate,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UserListTemplate {...args} />;
const employeeData = EmployeesData;
export const EmployeeList = Template.bind({});
EmployeeList.args = {
  AvatarVisibility: false,
  employeesData: employeeData,
};
