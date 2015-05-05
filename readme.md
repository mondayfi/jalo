# The Jalo repository
Read the Wiki for further information

# Pull requests
Create a feature branch and a PR from that in order to merge it to master.
```
> git co -b branch-name
```

#### Installation

To run application you need to have **node.js** and **gulp** installed. Gulp can be installed globally as binary with:

  > npm install -g gulp

Git clone to clone the repo to local machine. Run install commands documented below to get required libraries.

```
> git clone git@bitbucket.org:mondaydigital/jalo.git
> cd jalo
> npm install
> bower install
```

### Run browser-sync

```
gulp watch
```