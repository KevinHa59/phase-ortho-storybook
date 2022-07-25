// YourComponent.stories.js|jsx
import LoadingIcon1 from "../../Components/Templates/Loading/Icon/LoadingIcon1";
import LoadingPanel1 from "../../Components/Templates/Loading/Panel/1/LoadingPanel1";
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "PhaseOrtho/Component/Loading/Panel",
  component: LoadingPanel1,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <LoadingPanel1 {...args} />;

export const _1 = Template.bind({});
_1.args = {
  icon: <LoadingIcon1 color={'#ffffff'} iconNo={18} duration='0.5s'/>,
  dev: true,
  blur: '3px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  isShow: true,
};
