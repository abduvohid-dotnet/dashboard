import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../SideBar/SideBar';
import HeaderBar from '../HeaderBar/HeaderBar';
import MainContent from '../MainContent/MainContent';
import TicketsContent from '../TicketsContent/TicketsContent';

const { Sider, Header, Content } = Layout;

const Dashboard = () => {
    const [selectedKey, setSelectedKey] = useState('1');
    const [collapsed, setCollapsed] = useState(false);

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <MainContent />;
            case '2':
                return <TicketsContent />;
            case '3':
                return <div>Content Page</div>;
            case '4':
                return <div>Uploads Page</div>;
            case '5':
                return <div>Profile Page</div>;
            default:
                return <MainContent />;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={250} collapsed={collapsed}>
                <Sidebar selectedKey={selectedKey} setSelectedKey={setSelectedKey} collapsed={collapsed} />
            </Sider>

            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <HeaderBar selectedKey={selectedKey} collapsed={collapsed}
                        setCollapsed={setCollapsed} />
                </Header>


                <Content style={{ margin: '16px', padding: 24, background: '#fff' }}>
                    {renderContent()}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
