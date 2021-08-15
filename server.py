#!/usr/bin/env python3
from flask import Flask, render_template, send_from_directory
from flask_pymongo import PyMongo
import backend.contact, backend.dataBasics, backend.ip, secret.env as env

app = Flask(__name__)

#connect and create db
app.config["MONGO_URI"] = env.mongoURI

#initialize the client for mongodb
mongo = PyMongo(app)

@app.route("/")
def home():
  return render_template('default.html')

@app.route('/js/<path:path>')
def send_js(path):
  return send_from_directory('js', path)

@app.route('/css/<path:path>')
def send_css(path):
  return send_from_directory('css', path)

@app.route('/templates/<path:path>')
def send_templates(path):
  return send_from_directory('templates', path)

@app.route('/util/<path:path>')
def send_util(path):
  return send_from_directory('util', path)

@app.route('/xhr/<path:path>')
def send_xhr(path):
  return send_from_directory('xhr', path)

@app.route('/backend/contact')
def contact():
  backend.contact.sendmail()
  return f'Message sent.'

@app.route('/backend/databasics')
def databasics():
  backend.dataBasics.insertRow(mongo)
  return 'Record inserted into database.'

if __name__ == '__main__':
  #app.run(debug=True)
  app.run(host=backend.ip.get_ip())
