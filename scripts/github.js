const ghpages = require('gh-pages')

ghpages.publish('public',
  {
    branch: 'master',
    repo: 'https://github.com/LUAPPInc/luappinc.github.io.git',
    dest: './public'
  },
  () => {
    console.log('Deploy Complete!')
  }
)