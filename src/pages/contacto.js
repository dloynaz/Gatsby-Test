import React, { useEffect } from 'react'

import Head from '../components/head'

import contactStyle from './contact.module.scss'





const ContactPage = () => {

    useEffect(() => {
        const match = window.matchMedia(`(max-width: 768px)`);
        if (match.matches) {
            openTab();
        }
    }, [])


    const openTab = () => {
        const timer = setTimeout(() => {
            window.open("https://t.me/zensorfictus", "_blank")
        }, 3000)
    }


    return (
        <div>
            <Head title="Contact" />
            <div className={contactStyle.box}>
                <div className={contactStyle.box1}><h1></h1></div>
                <div className={contactStyle.box2}><h1></h1></div>
                <div className={contactStyle.box3}><h1></h1></div>
                <div className={contactStyle.box4}><h1></h1></div>
                <div className={contactStyle.box5}><h1></h1></div>
                <div className={contactStyle.box6}><h1></h1></div>
                <a style={{ cursor: "pointer" }} onClick={() => window.open("https://t.me/zensorfictus", "_blank")} className={contactStyle.email}>t.me/zensorfictus</a>
            </div>
        </div>
    )
}

export default ContactPage