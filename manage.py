from flask_script import Manager
from config import config

# My Components
from app.routes import app



manager = Manager(app)

if __name__ == '__main__':
    manager.add_option("--dev", required=False, defaut=config.BaseConfig)
    manager.run()