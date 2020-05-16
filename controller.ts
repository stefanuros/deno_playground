function helloWorld({ request, response, params }: 
  { request: any, response: any, params: { id: string }}) {
  console.log(params);
  response.body = { message: "Hello World" };
  response.status = 200;
}

function init({ request, response}: { request: any, response: any }) {
  response.body = "Welcome to this page";
  response.status = 200;
}

function test(x: any) {
  console.log(x);
  x.response.body = x;
}

export {
  helloWorld,
  init,
  test
};
