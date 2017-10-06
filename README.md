# Chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Homework Assignment prerequisites

1. clone project or check out latest master.
2. install dependencies using `npm install`
3. run CLI dev server with `npm start` in other process. It must stay up for dev rebuilds and live server to workk.

## Homework Assignment

1. Let's know who you are! 

    1.1 There is User component, User service and User interface in "shared" foldet

    1.2. During ngOnInit Check for user name in `window.localStorage.getItem('name')` and if nothing found, ask for user name using `window.prompt()` function.
    
    1.3. Store the response from `window.prompt()` back in the localStorage using `setItem`
    
    1.4. If everything is fine then after page load and/or user entering the name it should appear in the view above app-channel

2. IMessage interface has been updated with properties `name` and `date`

    2.1. no new form inputs required, but send user name and current date stamp to FireBase
    
    2.2. Output user name and date in the message-list component. Design is up to you. worst case just output them one by one as in rocket chat. 
          !!! Please take into accont, that AngularFire converted date to ISO string, therefore you need to revert it back to date in the mapping function on message list subscriber. to get a valid date from ISO string just pass it to the Date 
          function as `msg.date = new Date(msg.date)`
    
3. For a LevelUp!

    3.1. Message FormControl now has Validate.required. Make "send" disabled if form is not valid. There are at least two ways to do it - from class and from template  

    3.2. Figure out a way (there exists at least dozen of them, basically there is no right answer) to reverse list (unshift instead of push, sort by date desc, pipe that reverses array, use AngularFire API, etc)
    
    3.2. After sending - Reset form without making new FormGroup

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
