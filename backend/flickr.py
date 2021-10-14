from flask import request
from bson.json_util import dumps
import urllib.request
import secret.env as env
import time

flickr_api = 'https://api.flickr.com/services/rest'
json_format = 'format=json&nojsoncallback=1'
amount = 20
now = int(time.time())
oneWeekAgo = now - 604800

def getTaggedImages():
  tag = f"tags={request.args.get('tag')}&" if request.args.get('tag') else ''
  url = (f'{flickr_api}?'
         f'method=flickr.photos.search&'
         f'api_key={env.flickrApiKey}&'
         f'{tag}'
         f'per_page={amount}&'
         f'max_taken_date={now}&'
         f'min_taken_date={oneWeekAgo}&'
         f'{json_format}')

  contents = urllib.request.urlopen(url).read()
  decoded = contents.decode('ascii')
  return decoded

def getDogs():
  url = (f'{flickr_api}?'
         f'method=flickr.galleries.getPhotos&'
         f'api_key={env.flickrApiKey}&'
         f'gallery_id=66911286-72157685568512954&'
         f'{json_format}')

  contents = urllib.request.urlopen(url).read()
  decoded = contents.decode('ascii')
  return decoded
