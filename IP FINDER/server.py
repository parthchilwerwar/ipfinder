from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

def get_location(ip):
    url = f"https://ipinfo.io/{ip}/json"
    response = requests.get(url)
    data = response.json()
    return data

@app.route('/location/<ip>')
def location(ip):
    data = get_location(ip)
    return jsonify(data)

if __name__ == '__main__':
    app.run()
