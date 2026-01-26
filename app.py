import sys
import os
import pickle 
import flask 
from flask import Flask, render_template, jsonify, request, url_for, send_from_directory
from pymongo import MongoClient
from flask_restful import reqparse
from flask_cors import CORS
import sklearn
import json
import zipfile


# Create an instance of Flask
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/favicon.ico')
# def favicon():
#     return send_from_directory(os.path.join(app.root_path, 'static'),
#                                'favicon.png', mimetype='image/vnd.microsoft.icon')