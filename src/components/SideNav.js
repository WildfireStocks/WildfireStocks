import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

const [anchor, setAnchor] = useState(0);

const SideNav = (props) => {
   return (
      <React.Fragment>
         <Button onClick={toggleDrawer(anchor, true)}></Button>
         <SwipeableDrawer
            anchor={anchor}
         >
         </SwipeableDrawer>
      </React.Fragment>
   )
}

const toggleDrawer = (anchor, open) => {
   setAnchor({ open });
}

export default SideNav;