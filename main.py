print("--- main.py ---")

index = open("index.html").read().format(first_header='goodbye', 
                                         p1='World', 
                                         p2='Hello')




comidas = ["Papas a lo pobre",
           "Pizza",
           "Macarrones",]

a = [comida for comida in comidas]

print(a)




