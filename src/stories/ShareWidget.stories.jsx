import { ShareWidget } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ShareWidget',
    component: ShareWidget,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

const data = {
    people: [{
        name: "Tom Cook",
        email: "tom@oslash.com"
    }, {
        name: "Wade Cooper",
        email: "wade@oslash.com"
    }, {
        name: "Arlene Mccoy",
        email: "arlene@oslash.com"
    }],
    groups: [{ name: "Product", code: "prod" }, { name: "Engineering", code: "engg" }]
}

const Template = (args) => <ShareWidget {...args} data={data} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args