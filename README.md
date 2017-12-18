# ClubManager

This is an app that will manage fans of the band Prom Date Mixtape.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Specifications

* 1. User can visit website and view a list of fan club members.

 Sample Input: click on Fans List tab.
 Sample Output:
 Sara Anne, Member Since: 6/17/2017, Location: Seattle
 Wendy, Member Since: 6/17/2017, Location: Edmonds
 Joey Rad, Member Since: 8/19/17, Location: Kirkland

* 2. User can click on an individual fan and see their profile.

 Sample Input: click on individual fan name.
 Sample Output:
 Sara Anne, Member Since: 6/17/2017, Location: Seattle, Story: I first saw PDM at the High Dive on Dec. 21st, 2017 and they totally blew me away.......

 * 3. User can visit an about page that explains what the fan club is all about..

 Sample Input: click on About tab.
 Sample Output: Takes you to the About page.

 * 4. As a User/Administrator you can create a new fan profile.

 * 5. As a User/Administrator you can edit a fan profile.

 * 6. As an User/Administrator you can delete a fan profile.

## Wish List Specs

 * 1. Track number of shows a fan attends. Once they have attended 10 shows they achieve Super-Fan status.

 * 2. Add a chat room forum so fans can interact.

 * 3. Add a Performance Dates page listing all upcoming performances for the band.

 * 4. Add property showing last show attended for each fan.

 * 5. Add property for fans to add their favorite songs to their profile.

 * 6. Add ability for fans to request songs for upcoming shows and/or new songs to play.

 * 7. Add exclusive content for fans including videos, recordings, advance tickets.

 * 8. Add login authentication for fans and administrators.

 * 9. Allow fans to upload picture and videos from band performances and events.

## Getting Started

 1. Clone the project from https://github.com/pnapper/local-zoo-angular onto your local machine.

 2. Navigate to the project folder in the console and run "npm install" and "bower install".

 3. Open project in Atom.

 4. In src/app create a file named api-keys.ts

 5. In Atom create a file in the app/ directory called api-keys.ts. Paste this codeinto it.

 ```
 export var masterFirebaseConfig = {
   apiKey: "AIzaSyAH1NsTYxojYjK6ecQA855DsKYU-mBAv58",
   authDomain: "club-manager-60ec9.firebaseapp.com",
   databaseURL: "https://club-manager-60ec9.firebaseio.com",
   projectId: "club-manager-60ec9",
   storageBucket: "",
   messagingSenderId: "122773142418"
   };
   
```

 6. From the console run the application using "ng serve".

 7. Enjoy!

### Prerequisites

 Web browser required.
 Firebase API key.

### Installing

 From the console run:
 npm install
 bower install

## Technologies Used

 Angular 2
 Firebase
 TypeScript
 JavaScript
 HTML
 CSS
 Bootstrap

 ## Versioning

 version 1.0

 ## Authors

 * **Patrick Napper**  [Github](https://github.com/pnapper)

 ## License

 MIT Licence

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
