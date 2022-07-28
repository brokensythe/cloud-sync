from app import instance
from flask import render_template, request
from flask_cors import cross_origin

@instance.route('/')
@instance.route('/index')
def index():
    return render_template('index.html')

@instance.route('/test')
# Had to add cross_origin decorator to pass intergration test on front end
@cross_origin()
def test():
    return {'data' : 'Hello World'}

@instance.route('/signup', methods=['POST'])
def signup():
    return request.json['email']
