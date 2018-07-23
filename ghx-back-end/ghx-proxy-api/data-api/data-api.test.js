const api = require('./data-api');

describe('queries to GitHub API', ()=>{
  it('get a list of users from GitHub', (done)=> {
    expect.assertions(1)
    api.getUsers(1)
    .then((data)=>{
      expect(Array.isArray(data)).toEqual(true);
      done();
    })
  })

  it('get a GitHub user\'s details', ()=> {
    expect(api.getUserDetails()).toEqual('User details');
  })

  it('get a GitHub user\'s repositories', ()=> {
    expect(api.getUserRepos()).toEqual('User repositories');
  })
});
