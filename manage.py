from flask_script import Manager
from app.config import BaseConfig

# My Components
from app.routes import app



manager = Manager(app)

if __name__ == '__main__':
    manager.add_option("--dev", required=False, defaut=BaseConfig)
    manager.run()