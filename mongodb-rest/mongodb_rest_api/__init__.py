from flask import Flask, jsonify, url_for, redirect, request
from flask_pymongo import PyMongo
from flask_restful import Api, Resource

app = Flask(__name__)
app.config.from_object('mongodb_rest_api.config')
mongo = PyMongo(app, config_prefix='MONGO')
APP_URL = "http://127.0.0.1:5000"

# this must be set
API_KEY = "super secret api key"

def collections(self):
	with app.app_context():
		return {'recipes':mongo.db.recipes}

from mongodb_rest_api.lib import *

api = Api(app)
api.add_resource(REST,"/api/<string:category>", endpoint="list")
api.add_resource(REST,"/api/<string:category>/<string:item_id>", endpoint="get_one")
api.add_resource(REST,"/api/search/<string:search>", endpoint="search")
