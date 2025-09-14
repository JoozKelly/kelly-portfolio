# Kelly's 3D Interactive Portfolio
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/JoozKelly/kelly-portfolio)

**[Live Demo](https://JoozKelly.github.io/kelly-portfolio/)**

This is my personal portfolio website, designed to showcase my journey, skills, and projects in a unique and interactive way. Built with React and Three.js, the homepage features a 3D island that users can explore by rotating it. Different sections of my story appear as you navigate through various points of interest on the island.

## Features

-   **Interactive 3D Experience:** A fully interactive homepage built with React Three Fiber, featuring a rotatable 3D island.
-   **Dynamic Content:** Information pop-ups and content change dynamically based on the island's rotation angle.
-   **Comprehensive Sections:** Detailed pages for "About," "Projects & Activities," and "Contact."
-   **Showcase Pages:** Dedicated pages highlighting key experiences like my Bachelor Thesis, Work Attachment (Startup), Community Engagement, and Overseas Experience.
-   **Functional Contact Form:** A fully working contact form integrated with EmailJS to send messages directly to my inbox.
-   **Responsive Design:** Optimized for both desktop and mobile viewing, with touch and swipe controls implemented for the 3D island on mobile devices.
-   **Ambient Audio:** Background music with a toggle switch to enhance the user experience.

## Tech Stack

-   **Frontend:** React.js, Vite, Tailwind CSS
-   **3D Graphics:** React Three Fiber, Drei
-   **Animation:** react-spring
-   **Email Service:** EmailJS
-   **Deployment:** GitHub Pages

## Installation and Setup

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/JoozKelly/kelly-portfolio.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd kelly-portfolio
    ```

3.  Install the dependencies:
    ```bash
    npm install
    ```

4.  Set up your environment variables (see the section below).

5.  Start the development server:
    ```bash
    npm run dev
    ```

## Environment Variables

This project uses EmailJS to handle the contact form. To get it working, you need to create a `.env` file in the root of the project and add the following variables with your own credentials from [EmailJS](https://www.emailjs.com/):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Credits & Acknowledgements

This portfolio was made possible by the beautiful 3D assets created by talented artists on Sketchfab. Many thanks to them for their contributions.

-   **iangchang** - Robo Bomb
-   **Denys Almaral** - Idle 2 Male
-   **Romain Perrone** - Taipei 101
-   **Ivan Norman** - Low-Poly University
-   **itslerm** - Low Poly Book Pile (2)
-   **generalista3D** - Capsule Corporation Spaceship - Low Poly - Free
-   **Business boy** - Cactuar
-   **Shayan4321** - BASKET BALL COURT
-   **Alex Martire** - Data Center (low-poly)
-   **Rylae Shylna** - Blue mailbox on a wooden stand
-   **A Certain Duck** - Sydney Emerald-Class Low Poly
-   **Michael Hooper** - Low Poly Rocks
-   **NEEEU Spaces GmbH** - Jo on Bike – Rigged & Animated

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
