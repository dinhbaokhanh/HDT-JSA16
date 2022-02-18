// B1
async function loadJson(url) { 
    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    throw new Error(response.status);
}
  
loadJson('no-such-user.json').catch(alert);

//B2
class HttpError extends Error {
  constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
  }
}

async function loadJson(url){
  let response = await fetch(url);

  if(response.status === 200){
      return response.json();
  } else {
      throw new HttpError(response);
  }
}

async function demoGithubUser(){
  let name = promt ('Enter a name?', 'iliakan');
  let user = await loadJson(`https://api.github.com/users/${name}`);
  try{
      alert(`Full name: ${user.name}.`);
      return user; 

  } catch(err) {
      if (err instanceof HttpError && err.response.status == 404){
          alert('No such user, please reenter.');
          return demoGithubUser();
      } else {
          throw err;
      }
  }
}
demoGithubUser();
