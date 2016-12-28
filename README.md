# angular2-quickstart
Quickstart project for bootstraping your Angular 2 application with login and authentication implemented (login assumes you are returning tokens as a response to POST to api/users/login)

# Features
1. Architecture setup suggestion, with versions of Angular packages 2.4.0 (router 3.4.0)
2. Added folder structure that made the most sense with combining Angular 2+ guidelines and author's experience.
3. Added login and dashboard component and sample features (assuming you implement login on your api)
4. Overriden Http built in service to allow for implementing the equivalent of interceptors in AngularJS 1.* behaviour
5. Provided environment and general configuration with route table separation.
6. Routing module with sample override of CanActivate for auth restricting on route level
5. .vscode configuration present with configured ignoring of .js and .js.map files
6. Included sample favicons and referenced them in html.

# Running the app
Perform 'npm start' command from terminal, in the root of the repository to start the app on port 3000
Tip: If you're using Visual Studio Code (and I suggest you do), if you install Terminal extension you can use ctrl+` to start the built in terminal.
