import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Title from '../../../../component/Title';
import Style from './styles';
import Divider from '@material-ui/core/Divider';
import ComMsg from './comMsg';

import mensagens from '../../../../temp/mensagens';

export default function BoxMensages(){
    const classes = Style();
    return (
        <div>
            <div className={classes.root}>
                <Paper elevation={2}>
                    <Box fontWeight="fontWeightLight" m={1}>
                        <Title>Ultimas mensagens</Title>
                        <Divider />
                        <ComMsg mensagens={mensagens}/>
                    </Box>
                </Paper>
            </div>
        </div>
    );
}