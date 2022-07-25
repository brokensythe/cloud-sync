from flask import Flask
from flask_cors import CORS

instance = Flask(__name__)
cors = CORS(instance, origins="")

from app import routes
