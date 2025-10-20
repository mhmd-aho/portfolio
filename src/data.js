import edge from '/src/assets/img/icons8-edge-48.png';
import spotify from '/src/assets/img/icons8-spotify-48.png';
import netflix from '/src/assets/img/icons8-netflix-48.png';
import linkedin from '/src/assets/img/icons8-linkedin-48.png';
import youtube from '/src/assets/img/icons8-youtube-logo-48.png';
import skype from '/src/assets/img/icons8-skype-48.png';
import jetbrains from '/src/assets/img/icons8-jetbrains-toolbox-48.png';
import vscode from '/src/assets/img/icons8-vs-code-50.png';
import insta from '/src/assets/img/icons8-instagram-94.png';
import figma from '/src/assets/img/icons8-figma-50.png';
import flStudio from '/src/assets/img/icons8-fl-studio-48.png';
import netBeans from '/src/assets/img/icons8-apache-netbeans-48.png';
import word from '/src/assets/img/wordFile.png';
import powerPoint from '/src/assets/img/ms-power-point-office-file-icon-free-png.webp';
import settings from '/src/assets/img/72008_settings_icon.png';
import trash from '/src/assets/img/icons8-bin-windows-48.png';
import explorer from '/src/assets/img/icons8-file-explorer-48.png';
import github from '/src/assets/img/icons8-github-50.png';
import chrome from '/src/assets/img/icons8-chrome-48.png';
import project1 from '/src/assets/img/randomMessages.png';
import project2 from '/src/assets/img/salaryCal.png';
import project3 from '/src/assets/img/randomMovie.png';
import project4 from '/src/assets/img/taskManager.png';
import project5 from '/src/assets/img/healthDashboard.png';
import project6 from '/src/assets/img/walletTrack.png';
import project7 from '/src/assets/img/ticketGenerator.png';
import project8 from '/src/assets/img/eCommerce.png';
import whatsapp from '/src/assets/img/whatsapp.png';
import settingIcon from '/src/assets/img/72008_settings_icon.png';
import adanHand from '/src/assets/img/adamHand.jpg';
import dot from '/src/assets/img/dot.png';
import homeScreen from '/src/assets/img/home-screen.jpg'
const appList = [
        {
            name:'Trash',
            icon: trash,
            place:'desktop',
            tab: true
        },
        {
            name:"About me",
            icon: word,
            place:'both',
            tab: true
        },
        {
            name:'Projects',
            icon:powerPoint,
            place:'desktop',
            tab: true
        },
        {
            name:'Explorer',
            icon: explorer,
            place:'both',
            tab:true
        },
        {
            name:'Github',
            icon: github,
            place:'desktop',
            link:'https://github.com/mhmd-aho',
            contact: true
        },
        {
            name:'Chrome',
            icon: chrome,
            place:'both',
            link:'https://www.google.com/'
        },
        {
            name:'Edge',
            icon: edge,
            link:'https://www.google.com/'
        },
        {
            name:'Spotify',
            icon: spotify,
        },
        {
            name:'Netflix',
            icon: netflix,
        },
        {
            name:'Linkedin',
            icon: linkedin,
            place:'recommed',
            des:'Recently added',
            link:'www.linkedin.com/in/mhmd-abou-hamoud',
            contact: true
        }, 
        {
            name:'Youtube',
            icon: youtube,
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'
        },
        {
            name:'Skype',
            icon:skype,
        },
        {
            name:'jetBrains',
            icon: jetbrains,
        },
        {
            name:'Instagram',
            icon: insta,
            link:'https://www.instagram.com/m_abouhamoud/',
            contact: true
        },
        {
            name:'whatsApp',
            icon:whatsapp ,
            link:'https://wa.me/+96171547591',
            contact: true
        },
        {
            name:'Vs code',
            icon: vscode,
            place:'recommed',
            des:"2h ago"
        },
        {
            name: 'Figma',
            icon: figma
        },
        
        {
            name: 'NetBeans',
            icon: netBeans,
        },{
            name: 'Settings',
            icon: settings,
        },
        {
            name: 'Fl studio',
            icon: flStudio,
            place:'recommed',
            des:'4h ago'
        },
    ]
    const desktopApp = appList.filter(app=> app.place === 'desktop' || app.place === 'both');
    const taskBarApp = appList.filter(app=> app.place === 'both');
    const recommedApp = appList.filter(app=> app.place === 'recommed');
    const contactApp = appList.filter(app=>app.contact);
        const projects = [
        {
            name: "RANDOM MESSAGE",
            src: project1,
            tools:'Html5 | Css3 | Javascript',
            link:'https://mhmd-aho.github.io/mixed-message/',
            repo:'https://github.com/mhmd-aho/mixed-message',
            des:'A fun project that generates a new random message every time the user interacts. It’s designed to be lighthearted and engaging, making each visit feel fresh and unexpected.'
        },
        {
            name: "SALARY CALCULATOR",
            src: project2,
            tools: 'Html5 | Css3 | Javascript',
            link:'https://mhmd-aho.github.io/salary-cal/',
            repo:'https://github.com/mhmd-aho/salary-cal',
            des:'A straightforward calculator that allows users to quickly estimate their salary after deductions or additions. It provides a simple way to get accurate results without any complexity.'
        },
        {
            name: "RANDOM MOVIE",
            src: project3,
            tools:'Html5 | TailwindCss | React.js',
            link:'https://mhmd-aho.github.io/randomMovie/',
            repo:'https://github.com/mhmd-aho/randomMovie',
            des:'An app that suggests random movies for users who can’t decide what to watch. It delivers quick recommendations in an easy-to-use format, helping users discover new films effortlessly.'
        },
        {
            name: "Task Manager",
            src: project4,
            tools: 'Html5 | TailwindCss | React.js',
            link:'https://mhmd-aho.github.io/task-manager/',
            repo:'https://github.com/mhmd-aho/task-manager',
            des:'A productivity-focused app where users can create, organize, and manage tasks. It’s designed to keep track of daily to-dos in a clear and structured way, helping users stay on top of their schedules.'
        },
        {
            name: "health Dashboard",
            src: project5,
            tools: 'Html5 | TailwindCss | React.js',
            link:'https://mhmd-aho.github.io/healthDashboard/',
            repo:'https://github.com/mhmd-aho/healthDashboard',
            des:'A personal health tracker that brings together multiple aspects of well-being, including mood, sleep, hydration, and exercise. It gives users an overview of their daily habits and progress in one place.'
        },
        {
            name: "Wallet Track",
            src: project6,
            tools: 'Html5 | TailwindCss | React.js',
            link:'https://mhmd-aho.github.io/wallet-track/',
            repo:'https://github.com/mhmd-aho/wallet-track',
            des:'A finance-tracking app that helps users monitor their income and expenses. It provides an easy way to manage budgets and visualize spending patterns for better money management.'
        },
        {
            name:'Ticket generator (frontend mentor project)',
            src: project7,
            tools: 'Html5 | TailwindCss | React.js',
            link:'https://mhmd-aho.github.io/ticket-generator/',
            repo:'https://github.com/mhmd-aho/ticket-generator',
            des:'A small project that generates scrolling ticker text based on user input. It’s an interactive way to create live-updating ticker displays, often seen in news or stock websites.'
        },
        {
            name:'e-commerce (frontend mentor project)',
            src: project8,
            tools: 'Html5 | TailwindCss | React.js',
            link:'https://mhmd-aho.github.io/e-commerce/',
            repo:'https://github.com/mhmd-aho/e-commerce',
            des:'A product page simulation for an e-commerce site. It allows users to browse items, adjust quantities, and add products to a cart, providing a realistic shopping experience.'
        }
    ];
    const imageArray = [
        {
            src:settingIcon,
            name:'Settings icon',
        },{
            src:adanHand,
            name:'Adam hand',
        },{
            src: dot,
            name:'Dot',
        },{
            src:project8,
            name:'E-commerce'
        },{
            src:project5,
            name:'health Dashboard',
        },{
            src: homeScreen,
            name:'Home screen',
        },
    ]
    export {appList,desktopApp,taskBarApp,recommedApp,contactApp,projects,imageArray};
