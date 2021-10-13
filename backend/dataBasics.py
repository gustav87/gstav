from flask import request
from bson.json_util import dumps
from datetime import datetime

def insertRow(mongo, collection):
  name = request.form.get('name')
  email = request.form.get('email')
  now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
  collection.insert_one({'name': name, 'email': email, 'dateAdded': now})

def getDocuments(mongo, collection):
  filter = request.args.get('filter')
  docs = collection.find({'name': filter}) if filter else collection.find()
  docs_list = list(docs)
  json_data = dumps(docs_list)
  return json_data
