print("--- main.py ---")

HTML_File=open('index.html','r')
s = HTML_File.read().format(first_header='goodbye', 
                            p1='World', 
                            p2='Hello')
print(s)



comidas = ["Papas a lo pobre",
           "Pizza",
           "Macarrones",]

a = [comida for comida in comidas]

print(a)




