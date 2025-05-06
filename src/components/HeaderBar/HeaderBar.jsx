import { Avatar, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined } from '@ant-design/icons';
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import profileImage1 from '../../../public/1stImage.png'

const HeaderBar = ({ selectedKey, collapsed, setCollapsed }) => {
    const getTitle = () => {
        switch (selectedKey) {
            case '1':
                return 'Home';
            case '2':
                return 'Tickets';
            case '3':
                return 'Content';
            case '4':
                return 'Uploads';
            case '5':
                return 'Profile';
            default:
                return '';
        }
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <h2 className="text-xl font-semibold text-gray-800">{getTitle()}</h2>
            </div>
            <div className="flex items-center space-x-4 px-4">
                <i className="text-xl cursor-pointer"><SearchOutlined /></i>
                <i className="text-xl cursor-pointer"><IoMdNotificationsOutline /></i>
                <RxDividerVertical />
                <h4>Name Surname</h4>
                <Avatar src={profileImage1} alt="ProfileImage" size={45} style={{border: '3px solid blue'}} />
            </div>
        </div>
    );
};

export default HeaderBar;
