import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { MovieImage, FoodImage, MusicImage, CassandraImage } from '../content/images';
import { Typography, CardMedia, Card, CardHeader, Chip, ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelSummary, ExpansionPanelDetails, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    homeParent: {
      marginTop: '64px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
    homeHead: {
      display: 'flex',
      backgroundColor: '#42a5f5',
      flexDirection: 'row',
      justifyContent: 'center',
      minHeight: 90,
    },
    chip: {
        margin: '20px 20px',   
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    flexbox: {
        margin: '100px',
        display: 'flex',
    },
    media: {
        display: 'flex',
        paddingTop: '56.25%', // 16:9
    },
    stack: {
        margin: '20px'
    },
    chanllangesAndActions: {
        margin: '50px auto',
        width: '50%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    expansion: {
        display: 'flex',
        flexDirection: 'column',
    },

}));
const Cassandra_Data_Manager = (props) => {
    const classes = useStyles()
    const cassandra_stack = ['Apache Cassandra', 'NoSQL', 'CQL']
    const intro = 'Cassandra Data Manager is a system to handle, store and fetch big data. It is built with 3 Cassandra clusters from the Datastax company any many tables for different fetch requirements. 70,000+ data entries are involved in this system to test the functionality of it.'
    const chllngAndAct = [{title: 'Fetch data by target attribute?', sol:'Solution: Design Tables with specific partition Key', content:'The Apache Cassandra is an Application Driven NoSQL Database system. In order to search data with filter, table need to have the specific partition keys.'},
        {title:'How to display data in order?', sol:'Solution: Create Table with specific Clustering column', content:'Clustering column Defines the order rows within a partition. We can defined the order of retrieved data with clutering column.'},
        {title:'How to set the proper consistency for database?', sol:'Solution: Testing with different replication_factors', content:'The QUORUM consistency of Apache Cassandra is related to the replication_factors with formula (sum_of_replication_factors/2 + 1). I can use different replication_factor to test for the enough consistency whle maintaining availability.'}]
    return(
        <div className={classes.homeParent}>
            <div className={classes.homeHead} >
                <div>
                <Typography variant="h2" color='primary'> Cassandra Data Manager </Typography>
                {cassandra_stack.map((element) => 
                    <Chip
                      className={classes.chip}
                      clickable
                      color="primary"
                      label={element}
                      variant='outlined'
                    /> 
                  )}
                </div>
            </div>
            <Divider />
            <div className={classes.wrapper}>
                <div className={classes.flexbox}>
                    <div>
                    <Typography variant="h3" gutterBottom>Project Introduction</Typography>
                    <Typography variant='h6' gutterBottom> {intro} </Typography>
                    </div>
                </div>
                <div className={classes.flexbox}>
                    <Card style={{minWidth: '450px'}}>
                        <CardHeader
                            title="Technology Stack"
                        />
                        <CardMedia
                            className={classes.media}
                            image={CassandraImage}
                            title='Cassandra'
                        />
                        <div className={classes.stack}>
                            <Typography>Front-End: TypeScript, Angular, HTML/CSS</Typography>
                            <Typography>Back-End:  JavaScript, Node.js, Express, OAuth</Typography>
                            <Typography>Database: the database of Spotify</Typography>
                        </div>
                    </Card>
                </div>
            </div>
            <Divider />
            <div className={classes.chanllangesAndActions}>
                <Typography variant='h3' style={{margin: '50px'}}>Challenges And Actions</Typography>
                {chllngAndAct.map((element) => {
                    return(
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}>{element.title}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expansion}>
                                <Typography variant='h4' > {element.sol} </Typography>
                                <Typography variant='h6'>
                                    {element.content}
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })}
            </div>
            <Divider />
            <div style={{margin: '100px auto'}}>
                <Typography variant='h2'  >Thanks for watching</Typography>
            </div>
        </div>
    )
}

export default Cassandra_Data_Manager;