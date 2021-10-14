from flask import request
from bson.json_util import dumps
import urllib.request
import secret.env as env
import time

flickr_api = 'https://api.flickr.com/services/rest'
json_format = 'format=json&nojsoncallback=1'
amount = '10'
now = int(time.time())
oneWeekAgo = now - 604800

def getTaggedImages():
  tag = f"&tags={request.args.get('tag')}" if request.args.get('tag') else ''
  # print(f"{flickr_api}?method=flickr.photos.search&api_key={env.flickrApiKey}{tag}&per_page={amount}&max_taken_date={now}&min_taken_date={oneWeekAgo}&{json_format}")
  url = f'{flickr_api}?method=flickr.photos.search&api_key={env.flickrApiKey}{tag}&per_page={amount}&max_taken_date={now}&min_taken_date={oneWeekAgo}&{json_format}'
  contents = urllib.request.urlopen(url).read()
  decoded = contents.decode('ascii')
  return decoded

def getDogs():
  url = f'{flickr_api}?method=flickr.galleries.getPhotos&api_key={env.flickrApiKey}&gallery_id=66911286-72157685568512954&{json_format}'
  contents = urllib.request.urlopen(url).read()
  print(f'contents: {contents}')
  decoded = contents.decode('ascii')
  return decoded
