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
  docs = collection.find({'name': filter}) if filter else collection.find() # <pymongo.cursor.Cursor object at 0x7f4378d280d0>
  docs_list = list(docs) # [{'a':'1'}, {'b':'2'}, {'c':'3'}]
  json_data = dumps(docs_list) # [{"a":"1"}, {"b":"2"}, {"c":"3"}]
  return json_data
