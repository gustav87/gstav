import requests
import secret.env as env
from flask import request

def sendmail():
  name = request.args.get('name')
  email = request.args.get('email')
  topic = request.args.get('topic')
  message = request.args.get('message')

  return requests.post(
    env.url,
    auth=("api", env.api),
    data={"from": env.mailFrom,
      "to": "Gustav Andersson <gustav87and@gmail.com>",
      "subject": f'From {name} on gstav.se',
      "text": f'Name: {name}\nEmail: {email}\nTopic: {topic}\nMessage: {message}'})

