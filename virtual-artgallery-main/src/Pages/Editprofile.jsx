import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Navbar from '../Pages/Navbar';
import ProfileContent from './ProfileContent'; 
import EditProfileContent from './EditProfileContent';
import AccountSettingsContent from './AccountSettingsContent';
import OrderHistoryContent from './OrderHistoryContent';
import BidsContent from './BidsContent';
import PaymentContent from './PaymentContent';
import ShippingContent from './ShippingContent';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return <ProfileContent />;
      case 1:
        return <EditProfileContent />;
      case 2:
        return <AccountSettingsContent />;
      case 3:
        return <OrderHistoryContent />;
      case 4:
        return <BidsContent />;
      case 5:
        return <PaymentContent />;
      case 6:
        return <ShippingContent />;
      default:
        return null;
    }
  };

  return (
    <center>
      <br />
      <div id='nav'>
        <Navbar />
      </div>    

      <div id='homehead1'>
        <p>______________________________________________________________________________________________________________________________________________________________________________________________________________________________ </p>
        <Box sx={{ maxWidth: { xs: 320, sm: 1000 }, bgcolor: '#b8b0b0' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Profile" />
            <Tab label="Edit Profile" /> 
            <Tab label="Account Settings" />
            <Tab label="Order History" />
            <Tab label="Bids" />
            <Tab label="Payment" />
            <Tab label="Shipping" />
          </Tabs>
          {renderTabContent(value)}
        </Box>
      </div>
    </center>
  );
}
