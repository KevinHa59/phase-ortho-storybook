// YourComponent.stories.js|jsx
import LoadingCustom1 from "../../Components/Templates/Loading/Custom/1/LoadingCustom1";
//๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "PhaseOrtho/Component/Loading/Custom",
  component: LoadingCustom1,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <LoadingCustom1 {...args} />;

export const Custom1 = Template.bind({});
Custom1.args = {
  size: "80px",
  color: "red",
  shadowColor: "#ff08086b",
  circleColor: "transparent",
};
