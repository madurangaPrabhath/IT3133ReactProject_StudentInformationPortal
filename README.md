# Students' Information Portal - React Project 

This project is part of the initial selection process for the IT development committee of the University of Vavuniya. The goal is to build an online Students' Information Portal using **React**, which will allow students to view and manage their personal information. The portal should be developed with an emphasis on efficient programming methods and component-based architecture.

![ss](https://github.com/user-attachments/assets/8ff8bb6b-0614-4a1e-8524-713bd263ffdc)


## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **React** (for building the UI components)
- **React Router** (for navigation)
- **Axios** (for API calls, if needed)
- **CSS/SCSS** (for styling)
- **Node.js** and **npm** (for development environment)

## Project Setup

Follow the steps below to set up this project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/students-information-portal.git
cd students-information-portal
```

### 2. Install Dependencies

Ensure you have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org/).

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

After running this command, the app should be available in your browser at [http://localhost:3000](http://localhost:3000).

### 4. Running Tests (Optional)

If you have set up unit tests, you can run them with:

```bash
npm test
```

## Folder Structure

The project is organized as follows:

```
/students-information-portal
|-- /public
|   |-- index.html
|-- /src
|   |-- /components
|   |   |-- Header.js
|   |   |-- StudentList.js
|   |   |-- StudentDetail.js
|   |-- /pages
|   |   |-- Dashboard.js
|   |   |-- LoginPage.js
|   |-- /assets
|   |   |-- /images
|   |-- App.js
|   |-- index.js
|-- package.json
|-- .gitignore
|-- README.md
```

- **/public**: Contains the public-facing HTML file (index.html).
- **/src**: Contains all source code files.
  - **/components**: Reusable React components such as `Header`, `StudentList`, and `StudentDetail`.
  - **/pages**: Components for each page, such as `Dashboard` and `LoginPage`.
  - **/assets**: Images, icons, and other assets used in the application.
  - **App.js**: The main application component.
  - **index.js**: Entry point for the React app.

## Components

Here are some of the key components used in the application:

- **Header.js**: The navigation bar that appears on every page.
- **StudentList.js**: Displays a list of students.
- **StudentDetail.js**: Displays detailed information about a selected student.
- **LoginPage.js**: A page that handles user authentication.

## Features

- **User Authentication**: Login and logout functionality to access the portal.
- **Student List**: Displays a list of students with their basic details.
- **Student Profile**: View detailed information about a selected student.
- **Routing**: The app uses **React Router** for navigating between pages such as the dashboard, student list, and login page.
- **Responsive Design**: The portal is designed to be mobile-friendly and adjusts to various screen sizes.

## Contributing

If you'd like to contribute to the development of this portal, please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please ensure that your code follows the project's code style and includes appropriate tests.

## License

This project is open source and available under the [MIT License](LICENSE).
