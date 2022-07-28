from app import instance, db
from app.models import User

@instance.shell_context_processor
def make_shell_context():
    return {'db' : db, 'User' : User, 'instance' : instance}
