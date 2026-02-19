import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title> - The Name’s The Book</title>
            <meta charSet="utf-8" />
            <meta name="title" content="ley malam Portfolio - Computer Engineering Student" />
            <meta name="description"
                content="ley malam's (x3rcyb) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="ley malam (x3rcyb)" />
            <meta name="keywords"
                content="x3rcyb, x3rcyb's portfolio, x3rcyb linux, kali linux portfolio, ley malam protfolio,ley malam computer, ley malam, kali linux, ley malam kali linux portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="ley malam Portfolio - Computer Engineering Student" />
            <meta itemProp="description"
                content="ley malam's (x3rcyb) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="ley malam Portfolio - Computer Engineering Student" />
            <meta name="twitter:description"
                content="ley malam's (x3rcyb) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="x3rcyb" />
            <meta name="twitter:creator" content="x3rcyb" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="ley malam Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="ley malam's (x3rcyb) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://x3rcyb.github.io/" />
            <meta name="og:site_name" content="ley malam Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/kali_linux.png" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
