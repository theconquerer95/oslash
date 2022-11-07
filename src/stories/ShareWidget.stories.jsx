import { ShareWidget } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ShareWidget',
    component: ShareWidget,
};

const orgData = {
    people: [{
        name: "Tom Cook",
        email: "tom@oslash.com",
        empId: "oslash1234"
    }, {
        name: "Wade Cooper",
        email: "wade@oslash.com",
        empId: "oslash2345",
    }, {
        name: "Arlene Mccoy",
        email: "arlene@oslash.com",
        empId: "oslash3456"
    }],
    groups: [{ name: "Product", deptCode: "prod", members: ["tom@oslash.com"] }, { name: "Engineering", deptCode: "engg", members: ["wade@oslash.com", "arlene@oslash.com"] }]
}

const sharedWith = [
    { name: "Every At Oslash", deptCode: "all", members: ["ravi@oslash.com", "pooja@oslash.com", "ayush@oslash.com", "anil@oslash.com"], access: 'full' }
]

const Template = (args) => <ShareWidget {...args} sharedWith={sharedWith} orgData={orgData} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args