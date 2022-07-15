// YourComponent.stories.js|jsx
import CalendarPanelTemplate from '../../Components/Templates/CalendarPanel/CalendarPanelTemplate';
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PhaseOrtho/Component/Calendar',
  component: CalendarPanelTemplate,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CalendarPanelTemplate {...args} />;

export const CalendarPanel = Template.bind({});
CalendarPanel.args = {
  data: [
    {
      date: '06/01/2022',
      hours: 7,
    },
    {
      date: '06/02/2022',
      hours: 3,
    },
    {
      date: '06/03/2022',
      hours: 0,
    },
    {
      date: '06/04/2022',
      hours: 7,
    },
    {
      date: '06/05/2022',
      hours: 3,
    },
    {
      date: '06/06/2022',
      hours: 7,
    },
    {
      date: '06/07/2022',
      hours: 9,
    },
    {
      date: '06/08/2022',
      hours: 1,
    },
    {
      date: '06/09/2022',
      hours: 3,
    },
    {
      date: '06/10/2022',
      hours: 3,
    },
    {
      date: '06/11/2022',
      hours: 4,
    },
    {
      date: '06/12/2022',
      hours: 4,
    },
    {
      date: '06/13/2022',
      hours: 5,
    },
    {
      date: '06/14/2022',
      hours: 4,
    },
    {
      date: '06/15/2022',
      hours: 7,
    },
    {
      date: '06/16/2022',
      hours: 1,
    },
    {
      date: '06/17/2022',
      hours: 5,
    },
    {
      date: '06/18/2022',
      hours: 6,
    },
    {
      date: '06/19/2022',
      hours: 2,
    },
    {
      date: '06/20/2022',
      hours: 7,
    },
    {
      date: '06/21/2022',
      hours: 0,
    },
    {
      date: '06/22/2022',
      hours: 2,
    },
    {
      date: '06/23/2022',
      hours: 7,
    },
    {
      date: '06/24/2022',
      hours: 5,
    },
    {
      date: '06/25/2022',
      hours: 9,
    },
    {
      date: '06/26/2022',
      hours: 2,
    },
    {
      date: '06/27/2022',
      hours: 4,
    },
    {
      date: '06/28/2022',
      hours: 4,
    },
    {
      date: '06/29/2022',
      hours: 1,
    },
    {
      date: '06/30/2022',
      hours: 3,
    },
  ],
};
