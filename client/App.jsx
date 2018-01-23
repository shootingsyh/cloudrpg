import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './layout/Grid';
import Loader from './resource/Loader';
Loader.loadAllImages().then(() => {
    ReactDOM.render(
        <Grid />, 
        document.getElementById('app')
    )
});