from flask import Flask
from flask_cors import CORS
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

instance = Flask(__name__)
instance.config.from_object(Config)
cors = CORS(instance, origins=instance.config['FRONTEND_URL'])
db = SQLAlchemy(instance)
migrate = Migrate(instance, db)

from app import routes, models
