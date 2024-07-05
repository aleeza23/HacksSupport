from openai import OpenAI
from config import Config
import logging

client = OpenAI(
    api_key=Config.OPENAI_API_KEY,
)


with open('Instructions for the JudgementGPT.txt', 'r') as file:
    instructions = file.read()



with open('Hackathon organization examples2.docx.txt', 'r') as file:
    hackathon_info = file.read()


def judge_idea(idea, code=None):

    messages = [
        {"role": "system", "content": instructions},
        {"role": "system", "content": "You are an expert in evaluating hackathon ideas."},
        {"role": "user", "content": f"Evaluate the following hackathon idea and provide a score out of 10 with a brief explanation:\n\nIdea: {idea}"}
    ]
    
    if code:
        messages.append({"role": "user", "content": f"Here is the code:\n{code}"})


    #logging.info(f"Sending messages to OpenAI: {messages}")

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages

    )
    return response.choices[0].message.content

def chatbot(query):
    messages = [
        {"role": "system", "content": "You are an AI assistant providing information based on external data."},
        {"role": "user", "content": f"Based on the following information, answer the query:\n\n{hackathon_info}\n\nQuery: {query}"}
    ]
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages

    )
    return response.choices[0].message.content
