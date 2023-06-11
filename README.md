<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Database Backup Cron using NodeJS</h3>

  <p align="center">
    DB Backup using cron job and mailing it
    <br />
    <a href="https://github.com/barefacedbear/database-cron-node/issues">Report Bug</a>
    ·
    <a href="https://github.com/barefacedbear/database-cron-node/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This repository focuses on creating a CRON job using [node-cron](https://www.npmjs.com/package/node-cron). I have created a CRON job to creat backup of a database (I have taken example of MySQL) and mail it to a specific user using [nodemailer](https://www.npmjs.com/package/nodemailer).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![NodeJS][NodeJS]][NodeJS-url] [![NPM][NPM]][NPM-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* Node JS (v10 or above)
* npm

  ```sh
  npm install npm@latest -g
  ```

* Database of your choice (I preffered MySQL)

### To run the project

1. Clone the repo

   ```sh
   git clone https://github.com/barefacedbear/database-cron-node.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Configure the CRON value of your choice. Default is `* * * * *`. You can play with the value in [crontab.guru](https://crontab.guru/)
4. Configure **.env** file

   ```sh
   DB_USER = USERNAME
   DB_PASSWORD = PASSWORD
   DB_NAME = DATABASE NAME
   EMAIL_ID = example@example.com
   # If using GMAIL, use the App password
   EMAIL_PASSWORD = example
   ```

5. Create a directory where the dump will be stored temporarily and add that path to the `directory` variable.
6. Fetch your SMTP details to configure Nodemailer. If you are using gmail account then create App Password by following the procedures.
7. Run the project using

   ```sh
   node app.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Avishek Datta Ray
<br /><br />
[![Avishek Datta Ray][Facebook]](Facebook-url) [![barefacedbear][Instagram]](Instagram-url) [![avishek.arunavo1997@gmail.com][Email]](Email-url)

Project Link: [https://github.com/barefacedbear/database-cron-node](https://github.com/barefacedbear/database-cron-node)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/barefacedbear/database-cron-node.svg?style=for-the-badge
[contributors-url]: https://github.com/barefacedbear/database-cron-node/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/barefacedbear/database-cron-node.svg?style=for-the-badge
[forks-url]: https://github.com/barefacedbear/database-cron-node/network/members
[stars-shield]: https://img.shields.io/github/stars/barefacedbear/database-cron-node.svg?style=for-the-badge
[stars-url]: https://github.com/barefacedbear/database-cron-node/stargazers
[issues-shield]: https://img.shields.io/github/issues/barefacedbear/database-cron-node.svg?style=for-the-badge
[issues-url]: https://github.com/barefacedbear/database-cron-node/issues
[license-shield]: https://img.shields.io/github/license/barefacedbear/database-cron-node.svg?style=for-the-badge
[license-url]: https://github.com/barefacedbear/database-cron-node/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/avishekdr-2611
[NodeJS]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[NPM]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/
[Facebook]: https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white
[Facebook-url]: https://www.facebook.com/arunavo.dattaray
[Instagram]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[Instgram-url]: https://instagram.com/barefacedbear
[Email]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[Email-url]: mailto:avishek.arunavo1997@gmail.com
