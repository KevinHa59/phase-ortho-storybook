// YourComponent.stories.js|jsx
import DialListTemplate from '../../Components/Templates/DialList/DialListTemplate';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/Dial',
  component: DialListTemplate,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DialListTemplate {...args} />;

export const DialList = Template.bind({});
DialList.args = {
  data: [
    {
      label: 'CAD',
      value: 25,
      max: 100,
    },
    {
      label: 'PRINT',
      value: 75,
      max: 100,
    },
    {
      label: 'THERM',
      value: 62.5,
      max: 100,
    },
    {
      label: 'LASER',
      value: 87.5,
      max: 100,
    },
    {
      label: 'MILL',
      value: 50,
      max: 100,
    },
    {
      label: 'TUMBLE',
      value: 37.5,
      max: 100,
    },
    {
      label: 'INSPECT',
      value: 12.5,
      max: 100,
    },
    {
      label: 'PACK & SHIP',
      value: 112.5,
      max: 100,
    },
  ],
  labelSize: '20px',
  colorList: ['#3FDF62', '#1DAEFF', '#ff7c7c', '#acb2eb', '#9c27b0', '#5a3ff3', '#f33ff3', '#ff5722', '#795548', '#607d8b'],
};
