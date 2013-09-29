# Map Controller #

App with a main view panel for maps of any kind along with a controller view. 

### Application Stack ######

- Ruby/JRuby

- Sinatra

- Google Maps v3

- AngularJS

- Bootstrap 3

### Dependencies ######

    gem install bundler
    bundle install

### Launch ######

    rackup config.ru

### Creating War ######

    bundle exec warble

### Tips ######

#### Load specific ruby version and gemset ####

    # create file .ruby-version
    # [my-ruby-version]
    1.7.3 

    # create file .ruby-gemset
    # [my-ruby-version]
    sinatra 

    # which translates to rvm use 1.7.3@sinatra
    # or you can use a .rvmrc
    rvm use 1.7.3@sinatra
