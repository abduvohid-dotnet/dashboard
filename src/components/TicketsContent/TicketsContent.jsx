import React, { useState } from 'react';
import { Table, Tag, Avatar, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import profileImage1 from '../../../public/1stImage.png';
import prodileImage2 from '../../../public/2ndImage.png';
import profileImage3 from '../../../public/3rdImage.png';
import { FiTrash } from 'react-icons/fi';
import Highlighter from 'react-highlight-words';

const data = [
    {
        key: '1',
        image: profileImage1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['high'],
    },
    {
        key: '2',
        image: prodileImage2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['low'],
    },
    {
        key: '3',
        image: profileImage3,
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['normal'],
    },
];

const TicketsContent = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = React.createRef(); // Reference for input

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div className="p-2" onKeyDown={e => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    className="mb-2"
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        className="w-20"
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        className="w-20"
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        filterDropdownProps: {
            onOpenChange(open) {
                if (open) {
                    setTimeout(() => {
                        searchInput.current?.select();
                    }, 100);
                }
            },
        },
        render: text => 
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <Avatar src={image} size={50} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
            sorter: (a, b) => a.name.length - b.name.length,
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address'),
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'green' : 'volcano';
                        if (tag === 'low') {
                            color = 'yellow';
                        }
                        return (
                            <Tag color={color} key={tag} className="mr-2">
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
            sorter: (a, b) => {
                const order = { high: 1, normal: 2, low: 3 };
                const tagA = a.tags[0];
                const tagB = b.tags[0];
                return order[tagA] - order[tagB];
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className="flex items-center space-x-2">
                    <a href="#">Invite {record.name}</a>
                </div>
            ),
        },
        {
            title: '',
            key: 'delete',
            render: () => (
                <div className="flex justify-center">
                    <button className="text-black hover:text-red-700 transform transition-all hover:duration-200 cursor-pointer">
                        <FiTrash />
                    </button>
                </div>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} />;
};

export default TicketsContent;
