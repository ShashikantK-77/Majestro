import React from 'react'
import { Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import { useStyles } from './HeaderStyle'

const DrawerComp = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles()
    return (
       
        <div>
      
            {/* <Drawer open={open}  onClose={()=>setOpen(false)>

                <List>
                    <ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText>
                        <NavLink to={"/Majstro"}>Home</NavLink>
                    </ListItemText></ListItemIcon></ListItemButton>

                    <ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText>
                        <NavLink to={"/about"}>About</NavLink>
                    </ListItemText></ListItemIcon></ListItemButton>

                    <ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText>
                        <NavLink to={"/product"}>Products</NavLink>
                    </ListItemText></ListItemIcon></ListItemButton>

                    <ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText>
                        <NavLink to={"/contact"}> Contact</NavLink>
                    </ListItemText></ListItemIcon></ListItemButton>

                </List>



            </Drawer>
            <IconButton sx={{ marginLeft: "auto", color: "white" }} onClick={() => setOpen(!open)}>
                <MenuIcon />
            </IconButton> */}


<Drawer   PaperProps={{
            sx: { width: "60%", backgroundColor:'orange' },
          }}  open={open}  onClose={()=>setOpen(false) }>

  
<List>
<NavLink className={classes.listlink} to={"/Majstro"}><ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText className={classes.listtext}>
                        Home
                        
                    </ListItemText></ListItemIcon></ListItemButton></NavLink>

                    <NavLink className={classes.listlink} to={"/about"}><ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText className={classes.listtext}>
                        About
                    </ListItemText></ListItemIcon> </ListItemButton></NavLink>

                    <NavLink className={classes.listlink} to={"/product"}>   <ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText className={classes.listtext}>
                        Products
                    </ListItemText></ListItemIcon></ListItemButton></NavLink>

                    <NavLink className={classes.listlink} to={"/contact"}>  <ListItemButton onClick={() => setOpen(false)} divider> <ListItemIcon> <ListItemText className={classes.listtext}>
                        Contact
                    </ListItemText></ListItemIcon></ListItemButton></NavLink>
</List>
</Drawer>
<IconButton  className={classes.BtnSmall}  onClick={()=>setOpen(!open)}>
<MenuIcon/>
</IconButton>
           
        </div>
    )
}

export default DrawerComp