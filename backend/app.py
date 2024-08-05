from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
import os
from flask_cors import CORS 

load_dotenv()

app = Flask(__name__)
CORS(app)  
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')

@app.route('/api/github/repos', methods=['GET'])
def get_repos():
    username = request.args.get('username')  
    headers = {'Authorization': f'token {GITHUB_TOKEN}'}
    
    if not username:
        return jsonify({"error": "Username is required"}), 400
    
    response = requests.get(f'https://api.github.com/users/{username}/repos', headers=headers)

    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch repositories"}), response.status_code

    return jsonify(response.json())

@app.route('/api/github/repos/<repo_name>/languages', methods=['GET'])
def get_repo_languages(repo_name):
    username = request.args.get('username') 
    headers = {'Authorization': f'token {GITHUB_TOKEN}'}

    if not username:
        return jsonify({"error": "Username is required"}), 400
    
    response = requests.get(f'https://api.github.com/repos/{username}/{repo_name}/languages', headers=headers)

    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch languages"}), response.status_code

    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
