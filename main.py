print("--- main.py ---")

f = open('helloworld.html','w')

message = """<html>
<head></head>
<body><p>Hello World!</p></body>
</html>"""

f.write(message)
f.close()

comidas = ["Papas a lo pobre",
           "Pizza",
           "Macarrones",]

a = [comida for comida in comidas]

print(a)