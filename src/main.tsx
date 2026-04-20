import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './routes/index'
import './styles.css'
import { siteConfig } from './config/site';

document.title = siteConfig.headTitle;
const meta = document.createElement('meta');
meta.name = "description";
meta.content = siteConfig.headDescription;
document.head.appendChild(meta);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
)
