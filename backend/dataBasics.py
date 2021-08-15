from flask import request

def insertRow(mongo):
  #creating the customer collection
  customer_collection = mongo.db.customers
  name = request.args.get('name')
  email = request.args.get('email')

  customer_collection.insert_one({'name': name, 'email': email})

