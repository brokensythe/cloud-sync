from flask import Flask
from flask_cors import CORS
from config import Config

instance = Flask(__name__)
instance.config.from_object(Config)
cors = CORS(instance, origins=instance.config['FRONTEND_URL'])

from app import routes
