export default function (request) {
	let { user, pass } = request
	let message = {}
	let fail;

	if(!user) message.user = 'required!'
  if(!pass) message.pass = 'required!'

  fail = Object.keys(message).length > 0
  return { fail, message }
}