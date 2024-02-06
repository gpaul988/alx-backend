#!/usr/bin/env python3
# Graham S. Paul - 3-app.py
"""ABasic Flask-babel app"""
from flask import Flask, render_template, request
from flask_babel import Babel


class Config(object):
    """Configurations class"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale() -> str:
    """match with our supported languages."""
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index() -> str:
    """Main/index route"""
    return render_template('3-index.html')


if __name__ == "__main__":
    app.run(port="5000", host="0.0.0.0")

