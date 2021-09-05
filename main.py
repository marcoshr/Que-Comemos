print("--- main.py ---")


from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello World!"



# comidas = ["Papas a lo pobre",
#            "Pizza",
#            "Macarrones",]

# a = [comida for comida in comidas]

# print(a)




