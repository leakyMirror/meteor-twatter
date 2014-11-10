#### Some conventions and notes for development

  - If a template is used in more than one view, it should be defined in ```client/views/includes/``` as a separate file. For example: ```gravatar``` template: [client/views/includes/gravatar](https://github.com/leakyMirror/meteor-twatter/blob/master/client/views/includes/gravatar.jade)

  - If template requires a contentex, it should be defined explicitly when called (same as a function with parameters):
  ```jade
    +profileNumbers currentUser

    //- or

    with currentUser
      +profileNumbers this
      +gravatar this
  ```
  Also it should have a comment in template difinition for future reference:
  ```jade
  template(name='foo')
    //- Takes currentUser as a context
  ```

  - Very useful alias for searching things across countless files in Meteor project.

  ```bash
  alias searchMeteor="grep --exclude-dir=.meteor --exclude-dir=.git -irn"
  ```

  Usage:
  ```bash
  searchMeteor 'helpers'
  ```
