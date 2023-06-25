from flask import Flask
from flask import render_template
import utils
from flask import jsonify
from flask import request
app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")



@app.route('/get_left1',methods=['get','post'])
def get_left1():
    res = utils.get_left1()
    age = []
    for tup in res:

        age.append(tup[0])

    return jsonify({"age":age})

@app.route('/get_left2',methods=['get','post'])
def get_left2():
    res = utils.get_left2()
    education = []
    for tup in res:

        education.append(tup[0])

    return jsonify({"education":education})


@app.route('/get_center2',methods=['get','post'])
def get_center2():
    res = utils.get_center2()
    sport = []
    for tup in res:

        sport.append(tup[0])

    return jsonify({"sport":sport})




if __name__ == '__main__':
    app.run()
