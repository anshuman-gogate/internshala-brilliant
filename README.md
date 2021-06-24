# Title : Clone of brilliant.org using React.js

# Description : 
  This webpage was made using React.js, apart from that I only used the Material UI library and rest of the code was written from scratch.
  
  Structure -
    - All the components are in the src folder.
    - All the components referenced in App.js are present in the Components folder.
    - Entire CSS is in the index.css file in src folder.
    - Images are in the images folder, also a lot of images are called from external websites.
    - Icons are either taken from the Material UI Library or from Font Awesome Website.
    - Production build of the project is in the build folder.
    
  Basic Features -
    - Sticky Navbar - Navbar will always stick to the top while scrolling making a good user experience.
    - Modal(pop-up) - Clicking on login / signup button , course cards , start course button makes a modal pop out asking user to login/signup.
    - Premium Courses - Premium courses are by default locked and have different styling than the normal courses.
    - show/hide course button - buttons are provided to hide or show courses in each section
    
  Layout -
     The layout consists of-
      - A Header Component-
          Header further consists of 3 sub-components :
            - Logo component 
            - Navbar 
            - login/signup
      - Intro Component-
          Intro further consists of 2 sub-components :
            - Intro About
            - Intro Card
      - Previous Page Component
      - Card Holder Section Component-
          This section is resued multiple times throughout the website and has 1 sub-component :
            - Card { This component is called multiple times throughout all sections }
      - Next step Component-
          This component futher renders 1 sub-component :
            - Next Card 
            
   Additional Information -
    - Working with Material UI-
        Install the package in your project directory with:
          // with npm
          npm install @material-ui/icons
          // with yarn
          yarn add @material-ui/icons
        Icons can be imported like -
          import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
            Add this to the top of your Component file and then call using name like <AccessAlarmIcon />
            
   - Working with React.js -
        - Install node.js and npm
        - Install create-react-app globally with following command in your terminal
            npm install -g create-react-app
        - Command to create new project
            npx create-react-app <projectname>
        - To start a development server run following command
            npm start
        - To create build directory with production build run following command
            npm run build
        - To serve production build with a static server run following command
            serve -s build
