# Chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Homework Assignment prerequisites

1. clone project or check out latest master.
2. install dependencies using `npm install`
3. run CLI dev server with `npm start` in other process. It must stay up for dev rebuilds and live server to workk.

## Homework Assignment

1.  The app-list component (already created in channel/list) should output a list of channels with links where cliking would open the channel

    1.1. channels are now children of 'messages' list. each child is one channel.
    
    1.2. yes, it is expensive to "subscribe" to whole collection, but this is homework. If you want to do it better, check the "level up" section lower.

    1.3. Active channel on the left side should be somehow identified. Use routerLinkActive directive to assign a class and add some distinctive style yourself to the component's .scss file

2. in home.component.ts there is a method to create new channel. 

    1.1 Add a code that would create a new channel with "hello" message
    
    1.2 After the adding, please redirect user (using `navigateTo` from the `Router`) to this new channel so he would see the "hello world" message

3. For the "Level Up"

    3.1. Add own service for managing the list of channels. 
    
    3.2. Add the channel name to your own FireBase list (prefix it with your initials, for example)
    
    3.3. Output list of channels from your list. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
