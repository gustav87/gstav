import requests
import util.env
from flask import request

def sendmail():
  name = request.args.get('name')
  email = request.args.get('email')
  topic = request.args.get('topic')
  message = request.args.get('message')

  return requests.post(
    util.env.url,
    auth=("api", util.env.api),
    data={"from": util.env.mailFrom,
      "to": "Gustav Andersson <gustav87and@gmail.com>",
      "subject": f'From {name} on gstav.se',
      "text": f'Name: {name}\nEmail: {email}\nTopic: {topic}\nMessage: {message}'})

