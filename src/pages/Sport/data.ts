export const sports = [
    {
        key: "1",
        id: "1",
        name: "Soccer",
        isAvailable: true
    },
    {
        key: "2",
        id: "2",
        name: "BasketBall",
        isAvailable: false
    },
    {
        key: "3",
        id: "3",
        name: "Ice-Hockey",
        isAvailable: false
    },
    {
        key: "4",
        id: "4",
        name: "Tennis",
        isAvailable: false
    },
];

export const sportColumns = [
    {
        title: "ID",
        dataIndex: "id"
    },
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Status",
        dataIndex: "isAvailable",
        render: (text: boolean) => text ? 'Active' : 'Inactive'
    }
];