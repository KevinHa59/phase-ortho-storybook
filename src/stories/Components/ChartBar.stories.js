// YourComponent.stories.js|jsx
import ChartBarTemplate from '../../Components/Templates/ChartBar/ChartBarTemplate';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/ChartBar',
  component: ChartBarTemplate,
  argTypes: {
    CADLocation: { control: 'select', options: ['CAD-IMPORT', 'CAD-ALIGN', 'CAD-CUT', 'CAD-EXTRUDE', 'CAD-KEYJOIN', 'CAD-SPLINE', 'CAD-SPLINEGEN', 'CAD-LASERGEN'] },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ChartBarTemplate {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  chartHeight: '200px',
  label: ['Label 1', 'Label 2'],
  color: ['#00818F', '#99F5FF'],
  valueColor: ['#000', '#000'],
  CADLocation: 'CAD-IMPORT',
  CADData: [
    {
      Cases: 3,
      Units: 6,
      ID: 2,
      Location: 'CAD-IMPORT',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 3,
      Units: 6,
      ID: 3,
      Location: 'CAD-ALIGN',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 4,
      Units: 13,
      ID: 4,
      Location: 'CAD-CUT',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 1,
      Units: 7,
      ID: 5,
      Location: 'CAD-EXTRUDE',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 2,
      Units: 2,
      ID: 6,
      Location: 'CAD-KEYJOIN',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 2,
      Units: 2,
      ID: 7,
      Location: 'CAD-SPLINE',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 4,
      Units: 20,
      ID: 8,
      Location: 'CAD-SPLINEGEN',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 3,
      Units: 19,
      ID: 10,
      Location: 'CAD-LASERGEN',
      Date: '2022-07-13 00:00:00.000',
    },
    {
      Cases: 9,
      Units: 220,
      ID: 2,
      Location: 'CAD-IMPORT',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 9,
      Units: 220,
      ID: 3,
      Location: 'CAD-ALIGN',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 9,
      Units: 220,
      ID: 4,
      Location: 'CAD-CUT',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 5,
      Units: 188,
      ID: 5,
      Location: 'CAD-EXTRUDE',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 2,
      Units: 10,
      ID: 6,
      Location: 'CAD-KEYJOIN',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 7,
      Units: 83,
      ID: 7,
      Location: 'CAD-SPLINE',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 18,
      Units: 423,
      ID: 8,
      Location: 'CAD-SPLINEGEN',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 18,
      Units: 423,
      ID: 10,
      Location: 'CAD-LASERGEN',
      Date: '2022-07-12 00:00:00.000',
    },
    {
      Cases: 11,
      Units: 261,
      ID: 2,
      Location: 'CAD-IMPORT',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 12,
      Units: 281,
      ID: 3,
      Location: 'CAD-ALIGN',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 12,
      Units: 330,
      ID: 4,
      Location: 'CAD-CUT',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 4,
      Units: 115,
      ID: 5,
      Location: 'CAD-EXTRUDE',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 3,
      Units: 41,
      ID: 6,
      Location: 'CAD-KEYJOIN',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 4,
      Units: 71,
      ID: 7,
      Location: 'CAD-SPLINE',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 15,
      Units: 363,
      ID: 8,
      Location: 'CAD-SPLINEGEN',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 15,
      Units: 363,
      ID: 10,
      Location: 'CAD-LASERGEN',
      Date: '2022-07-11 00:00:00.000',
    },
    {
      Cases: 3,
      Units: 106,
      ID: 2,
      Location: 'CAD-IMPORT',
      Date: '2022-07-08 00:00:00.000',
    },
    {
      Cases: 3,
      Units: 106,
      ID: 3,
      Location: 'CAD-ALIGN',
      Date: '2022-07-08 00:00:00.000',
    },
    {
      Cases: 3,
      Units: 106,
      ID: 4,
      Location: 'CAD-CUT',
      Date: '2022-07-08 00:00:00.000',
    },
    {
      Cases: 3,
      Units: 106,
      ID: 5,
      Location: 'CAD-EXTRUDE',
      Date: '2022-07-08 00:00:00.000',
    },
    {
      Cases: 27,
      Units: 376,
      ID: 8,
      Location: 'CAD-SPLINEGEN',
      Date: '2022-07-08 00:00:00.000',
    },
    {
      Cases: 27,
      Units: 376,
      ID: 10,
      Location: 'CAD-LASERGEN',
      Date: '2022-07-08 00:00:00.000',
    },
  ],
};
