const clientKey = 'c8cf2ee76bcef0bf4e42b491f86c44b0005121d5'
const clientId = '403beed96884fcf48e82'
const redirect1 = 'http://localhost:8080/auth/github/callback'
// const hardCode = ‘https://github.com/login/oauth/authorize?response_type=code&client_id=403beed96884fcf48e82&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fgithub%2Fcallback’
const createLink = (cliendId, redirect1, scope) => {
  const state = Math.floor(Math.random() * 1000000000)
  const encodeLink = encodeURIComponent(redirect1)
  const encodeScope = encodeURIComponent(scope)
  let SampleLink = `https://github.com/login/oauth/authorize?response_type=code&client_id=${cliendId}&redirect_uri=${encodeLink}`
  return SampleLink
}
const redirectGHLink = createLink(clientId, redirect1 , 'read_user')
const setBearerToken = async (bearToken) => {
  const userResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${bearToken}`,
    },
  });
  const { name } = await userResponse.json()
  console.log(`Hello ${name}`)
}
const OauthOne = async (req, res, next) => {
    console.log('entered oauthone')
    console.log(redirectGHLink)
    res.redirect('https://github.com/login/oauth/authorize?response_type=code&client_id=403beed96884fcf48e82&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fgithub%2Fcallback')
//   try {
//     response.status = 200;
//     response.body = {
//       message: ‘success’,
//       data: response.redirect(redirectGHLink)
//       ,
//     };
//   } catch(err) {
//     return console.log(err);
//     }
  await next()
};
const OauthTwo = async (req, res, next) => {
    res.status = 200;
    const stringPathName = req.url;
    console.log(`stringPath ${stringPathName}`)
    const code = JSON.stringify(stringPathName.search)
    console.log(`code ${code}`)
    const parsedCode = code.slice(code.indexOf('"?code=')+7, code.indexOf('&state'))
    console.log(`parsedCode ${parsedCode}`)
    await fetch('https://github.com/login/oauth/access_token',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      client_id: clientId,
      client_secret: clientKey,
      code: parsedCode,
      redirect_uri: 'http://localhost:8080/auth/github/callback'
      })
    })
    .then((res) => {
      return res.text()
    })
    .then((paramsString) => {
      let params = new URLSearchParams(paramsString)
      let tokenKey = [];
      for (const [key, value] of params.entries()){
        tokenKey.push(key, value)
      }
      let obj = tokenKey[0]
      let values = Object.values(obj)
      const tokenArr = []
      let i = 17;
      while (values[i] !== '"') {
        tokenArr.push(values[i])
        i++
      }
    const bearerToken = tokenArr.join('')
    console.log('access_token', bearerToken)
    setBearerToken(bearerToken)
    })
  await next()
};
export { OauthTwo}