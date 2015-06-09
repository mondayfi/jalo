# The Jalo repository
Read the Wiki for further information

# Pull requests
Create a feature branch and a PR from that in order to merge it to master.
```
> git checkout -b branch-name
```

#### Installation

To run application you need to have **node.js** and **gulp** installed. Gulp can be installed globally as binary with:

  > npm install -g gulp

Git clone to clone the repo to local machine. Run install commands documented below to get required libraries.

```
> git clone git@bitbucket.org:mondaydigital/jalo.git
> cd jalo
> npm install
```

### Io.js

The backend is written with io.js. You have to install it separately. You need to install NVM to use io.js. 

```

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
```

Then in jalo folder type 

```
nvm use iojs

```



### Run server

```
gulp watch
```