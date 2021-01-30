/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
    title: 'Hannah Weber', // Title for your website.
    tagline: 'Hi my name is Hannah Weber, I am a second year Computer Science major at Northeastern University. I am concentrating in Artificial Intelligence with an focus in Machine Learning and Data Science, and minoring in Math. \n \n I chose to study Computer Science because of my curiosity for math, but coming into college I was unsure of what exactly I wanted to do with my degree or what I would concentrate in. Through my coursework I have found I most enjoy subjects in Computer Science  which intersect with or rely heavily on mathematical concepts and reasoning. I have also developed an interest in technology policy and the ethics of technology. I am currently in search of a 6-month co-op which would hopefully allow me to explore these curiosities further. \n \n Along with taking courses, I am currently working as a Teaching Assistant for Principles of Information Science and part time virtually as a Document Processor in support of a multibillion-dollar civil litigation. Both have given me experience with communication, organization, and have overall improved my work ethic and time management. \n \n I am a motivated worker, who works well with other and thrives in a challenging environment - always willing to learn or try something new. \n \n Feel free to explore this site to find out more about me and view some of my programming projects.',
    url: 'https://hannahweber2.github.io', // Your website URL
    baseUrl: '/tech-portfolio/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',
    profilePhoto: 'img/profile.png',
    // Used for publishing and more
    projectName: 'tech-portfolio',
    organizationName: 'hannah-weber',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: "about", label: "About"},
        { doc: "projects", label: "Projects" },
    ],
    
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap',
    ],

    // If you have users set above, you add it here:
    users,

    favicon: 'img/favicon.ico',
    
    /* Colors for website */
    colors: {
        primaryColor: '#5E4955',
        secondaryColor: '#C2B2B4',
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Hannah Weber`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Show documentation's last update time.
    enableUpdateTime: true,

    socialMedia: {
        linkedin: 'hannah-weber00',
        github: 'hannah-weber',
    },

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
