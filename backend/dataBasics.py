from flask import request
from bson.json_util import dumps
from datetime import datetime

def insertRow(mongo, collection):
  name = request.args.get('name')
  email = request.args.get('email')
  now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
  collection.insert_one({'name': name, 'email': email, 'dateAdded': now})

def getAllDocs(mongo, collection):
  docs = collection.find()
  docs_list = list(docs)
  json_data = dumps(docs_list)
  return json_data
