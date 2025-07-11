export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'Landing Page Website',
        desc: 'This is a project of a Landing Page website which is responsive to various screen-sizes. Built using only HTML & CSS.',
        subdesc:
            '',
        link: "https://github.com/devikaharshey/landing-page",
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
        ],
    },
    {
        title: 'Simple Calculator',
        desc: 'A simple calculator which can perform basic mathematical operations. Built using HTML, CSS & JavaScript.',
        subdesc:
            '',
        link: "https://github.com/devikaharshey/web-dev-mini-projects/tree/main/calculator",
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
        ],
    },
    {
        title: 'My Piano',
        desc: 'A dynamic playlist of piano covers of popular songs built using HTML, CSS & JavaScript.',
        subdesc:
            '',
        link: "https://my-piano-d14.web.app/",
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: 'rgba(101,222,125,0.44)',
            border: '0.2px solid rgba(101, 222, 125, 0.43)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
        ],
    },
    {
        title: 'Hotel Website Design',
        desc: 'This is a project of a "Hotel Website Design" based on the concept of UI/UX Designing. Since it is only a design, so it does not have any functionalities, but it is responsive. Built using Canva. No HTML, CSS or JavaScript.',
        subdesc:
            '',
        link: "https://hotel-vista-views.my.canva.site/",
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Canva',
                path: '/assets/canva.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};
