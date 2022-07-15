// YourComponent.stories.js|jsx
import PlaqueTemplate from '../../Components/Templates/Plaque/PlaqueTemplate';
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/UserProfile',
  component: PlaqueTemplate,
  argTypes: {
    level: { control: 'select', options: [0, 1, 2, 3] },
    style: { control: 'select', options: ['Style1', 'Style2', 'Style3', 'Style4', 'Style5', 'Style6'] },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <PlaqueTemplate {...args} />;

export const Plaque = Template.bind({});
Plaque.args = {
  label: 'TQH',
  labelSize: '30px',
  level: 0,
  style: 'Style1',
  height: '120px',
};
