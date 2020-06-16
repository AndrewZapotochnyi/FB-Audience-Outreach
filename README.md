# The Social Scope 
Marketing tool for social media analytics and research using Facebook API.

## How to use this tool
The web app enables users to access statistical data about particular demographics. With the click of a few buttons, curious users can do a specific search for the population count of individuals who, for example, are University graduates with interests in contemporary art and who live in downtown Toronto. Logged in users can archive data findings and revisit them through the platform. 

## Preview
![“Landing Page”](https://github.com/matichmike/FB-Audience-Outreach/blob/master/screenshots/landing.png?raw=true)
<br/>
<br/>
!["Features"](https://github.com/matichmike/FB-Audience-Outreach/blob/master/screenshots/features.png?raw=true)
<br/>
<br/>
![“Dashboard”](https://github.com/matichmike/FB-Audience-Outreach/blob/master/screenshots/dashboard.png?raw=true)
<br/>
<br/>
![“Profile”](https://github.com/matichmike/FB-Audience-Outreach/blob/master/screenshots/profile.png?raw=true)

## Setup 
* npm install (front-end) 
* bundle install (back-end)
* rake db:reset (back-end) 
* Rails: bin/rails s -b 0.0.0.0 -p 3001

## Dependencies
### Front-end
* "@material-ui/core": "^4.10.1",
* "@material-ui/lab": "^4.0.0-alpha.55",
* "@testing-library/jest-dom": "^4.2.4",
* "@testing-library/react": "^9.5.0",
* "@testing-library/user-event": "^7.2.1",
* "axios": "^0.19.2",
* "chart.js": "^2.9.3",
* "es6-promise": "^4.2.8",
* "isomorphic-fetch": "^2.2.1",
* "react": "^16.13.1",
* "react-chartjs-2": "^2.9.0",
* "react-dom": "^16.13.1",
* "react-router": "^5.2.0",
* "react-router-dom": "^5.2.0",
* "react-scripts": "3.4.1",
* "sass": "^1.26.8"

### Back-end
* ruby '2.7.1'
* gem 'rails', '~> 6.0.3', '>= 6.0.3.1'
* gem 'sqlite3', '~> 1.4'
* gem 'puma', '~> 4.1'
* gem 'jwt'
* gem 'bcrypt', '~> 3.1.7'
* gem 'knock'
* gem 'bootsnap', '>= 1.4.2'
* gem 'rack-cors'
* gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
* gem 'listen', '~> 3.2'
* gem 'spring'
* gem 'spring-watcher-listen', '~> 2.0.0'
* gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
