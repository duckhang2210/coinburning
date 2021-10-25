import React from "react";
import ReactDom from 'react-dom'
import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom'

import App from './App'
import 'antd/dist/antd.css'

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))