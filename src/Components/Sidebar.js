import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

const Sidebar = () => {
    
    return (
        <div className='sidebar' >
            <SidebarRow src="https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png" title="Fabba" />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' /> 
            <SidebarRow Icon={PeopleIcon} title='Friends' />  
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
  );
}

export default Sidebar;
