import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY') or 'your-openai-api-key'