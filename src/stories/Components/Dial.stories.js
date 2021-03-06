// YourComponent.stories.js|jsx
import DialTemplate from '../../Components/Templates/Dial/DialTemplate';
//๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/Dial',
  component: DialTemplate,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <DialTemplate {...args} />;

export const Dial = Template.bind({});
Dial.args = {
  label: 'CAD',
  value: 50,
  max: 100,
  size: '165px',
  labelSize: '23px',
  colorList: ['#3FDF62', '#1DAEFF', '#ff7c7c', '#acb2eb', '#9c27b0', '#5a3ff3', '#f33ff3', '#ff5722', '#795548', '#607d8b'],
};
