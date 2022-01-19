# Mountebank Demonstration (Eshopper - Web Ecommerce)

## Overview

This project was developed using a web application (e-commerce) integrated with Mountebank tool to inject behaviour through Javascript to keep and control the state of users between all pages and endpoints during the user flows to contemplate all business flows.

More details can be found in this [presentation](https://drive.google.com/file/d/1kb-uOA37rSwl3gjEeWb1KXtI9jt5ju2r/view?usp=sharing) .


## Requirements

- [*NodeJS*](https://nodejs.org/en/)
- [*Docker*](https://docs.docker.com/)

## Project Structure

- mountebank-demo-eshopper
    - bootstrap.: Files do configure web layout.
    - css.: Files do configure web layout.
    - font-awesome.: Files do configure fonts in project.
    - fonts.: Files do configure fonts in project.
    - html.: Pages to user interact with e-commerce.
    - images.: Used in all web application.
    - imposters
        - stubs.: Files to configure all stubs used to give mocked response to e-commerce.
        - imposters.ejs.: File to define the imposters used by mountebank.
    
    - js.: JS files using fetch API library to call stubs stored in Mountbank.
    - php.: File to send email used by contact.js file.
    - docker-compose.yml
    - DockerFile
    - README.md               

## How to Run

1. Start docker-compose using "docker-compose up" command to run mountbank

2. Open the index.html file in any browser using the data defined in the stubs.

3. At the endpoint /sales it is possible to verify the state of the product that has changed according to the stage of the user's journey in the application.

## References

- [*Mountebank Official Website*](http://www.mbtest.org/docs/gettingStarted)
- [*Mountbank Book*](https://www.manning.com/books/testing-microservices-with-mountebank?utm_source=mb&utm_medium=affiliate&utm_campaign=book_byars_testing_12_20_18&a_aid=mb&a_bid=ee3288f4)
- [*Mountbank Groups*](https://groups.google.com/g/mountebank-discuss?pli=1)

## Contacts and Maintainers

If you have questions or suggestions, please contact the current maintainers.:

-   André Diegues Rodrigues - andrevdrodrigues@gmail.com

