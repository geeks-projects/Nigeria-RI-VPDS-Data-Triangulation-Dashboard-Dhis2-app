import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    
    <div>
      <iframe height="800" width="100%" frameborder="no" src="https://afenetgeeks.shinyapps.io/data-triangulation-monthly-review/"> </iframe>
    </div>
)

export default MyApp
