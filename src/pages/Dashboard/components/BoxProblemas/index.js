import React from 'react';
import Style from './styles';
import Divider from '@material-ui/core/Divider';
import Title from "../../../../component/Title";

export default function BoxProblemas(){
    const classes = Style();
    return (
            <div className={classes.root}>
                    <Title>Problemas</Title>
                    <Divider />
            </div>
       
    );
}