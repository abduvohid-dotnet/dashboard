import React from 'react';
import { HomeOutlined, BulbOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { LuTicket } from "react-icons/lu";
import { Menu } from 'antd';
import dashboardLogo from '../../../public/dashboardLogo.png';

const Sidebar = ({ selectedKey, setSelectedKey, collapsed }) => {
    const items = [
        {
            key: '1',
            icon: React.createElement(HomeOutlined),
            label: 'Home',
        },
        {
            key: '2',
            icon: React.createElement(LuTicket),
            label: 'Tickets',
        },
        {
            key: '3',
            icon: React.createElement(BulbOutlined),
            label: 'Content',
        },
        {
            key: '4',
            icon: React.createElement(UploadOutlined),
            label: 'Uploads',
        },
        {
            key: '5',
            icon: React.createElement(UserOutlined),
            label: 'Profile',
        },
    ];

    return (
        <>
            <div className='flex items-center'>
                <div className='flex justify-center p-3 '>
                    <img className={`${collapsed ? 'p-3' : ''}`} src={dashboardLogo} alt="Dashboard Logo" />
                </div>
                <h2 className={`text-[#A4A6B3] text-[19px] ${collapsed ? 'hidden' : ''}`}>Dashboard Kit</h2>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[selectedKey]}
                items={items}
                onClick={({ key }) => setSelectedKey(key)}
            />

        </>
    );
};

export default Sidebar;
