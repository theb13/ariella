import React from 'react';
import { Row } from '../../styles';

// import { Container } from './styles';


import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';



function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
}));

function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState<Number>(0);

    const handleChange = (newValue:Number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value} aria-label="simple tabs example">
                <Link to='/' onClick={()=>(handleChange(0))} >
                    <Tab label="Início" {...a11yProps(0)} />
                </Link>
                <Link to='/'  onClick={()=>(handleChange(1))} >
                    <Tab label="AriellaStudio" {...a11yProps(1)} />
                </Link>
                <Link to='/'  onClick={()=>(handleChange(2))} >
                    <Tab label="Contacto" {...a11yProps(2)} />
                </Link>
                <Link to='/blog'  onClick={()=>(handleChange(3))} >
                    <Tab label="Notícias" {...a11yProps(3)} />
                </Link>
                <Link to='/about' onClick={()=>(handleChange(4))}>
                    <Tab label="Sobre nós" {...a11yProps(4)} />
                </Link>
            </Tabs>

        </div>
    );
}




const AppMenu: React.FC = () => {
    return (

        <Row justifyContent='space-between'>
            <div>
                <h1>AriellaBoats</h1>
            </div>
            <Row>
                {/* <li>Início</li>
                <li>AriellaStudio</li>
                <li>Contacto</li>
                <li>Notícias</li>
                <li>Sobre nós</li> */}
                {SimpleTabs()}
            </Row>
        </Row>

    );
}

export default AppMenu;