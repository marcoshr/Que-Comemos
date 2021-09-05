import jinja2

env = jinja2.Environment(loader=jinja2.FileSystemLoader('.'))
template = env.get_template('index.html')
print template.render(text='Hi i am inside of a div')