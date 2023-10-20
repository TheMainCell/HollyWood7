# Importar flask
from flask import Flask
# Importar para trabajar en las páginas
from flask import render_template, request, redirect, session, send_file

# Enlace a base de datos
from flaskext.mysql import MySQL

# Información de las imagenes
from flask import send_from_directory

# Crear aplicación
app=Flask(__name__)

# Llave secreta
app.secret_key='hw7'

# Crear conexión a la base de datos
mysql=MySQL()

app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']=''
app.config['MYSQL_DATABASE_DB']='hw7'

# Iniciar aplicación
mysql.init_app(app)

# Ruta principal o inicial
@app.route('/')
def inicio():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM `peliculas`")
    peliculas=cursor.fetchall()


    return render_template('sitio/index.html', informacion=peliculas)

# Peliculas individuales
@app.route('/sitio/pelicula/<id>')
def peliculasIndividuales(id):
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM `peliculas` WHERE `id_pelicula` = %s ",(id))
    peliculas=cursor.fetchall()

    return render_template('sitio/peliculas/pelicula.html', info=peliculas[0])

#Categorias
# Accion
@app.route('/sitio/accion')
def accion():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM peliculas WHERE categoria = 'Acción'")
    peliculas=cursor.fetchall()

    return render_template('sitio/peliculas/categoria.html', info=peliculas)
# Animacion
@app.route('/sitio/animacion')
def animacion():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM peliculas WHERE categoria = 'Animación'")
    peliculas=cursor.fetchall()
    print(peliculas)

    return render_template('sitio/peliculas/categoria.html', info=peliculas)

# Comedia
@app.route('/sitio/comedia')
def comedia():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM peliculas WHERE categoria = 'Comedia'")
    peliculas=cursor.fetchall()

    return render_template('sitio/peliculas/categoria.html', info=peliculas)

# Heroes
@app.route('/sitio/heroe')
def heroe():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM peliculas WHERE categoria = 'SuperHéroe'")
    peliculas=cursor.fetchall()

    return render_template('sitio/peliculas/categoria.html', info=peliculas)

# Comprar
@app.route('/sitio/comprar')
def comprar():
    return render_template('sitio/comprar.html')

# Crear una instancia para poder ejecutar nuestra aplicación
if __name__ == '__main__':
    #Se utiliza el modo debug para que se vean los cambios
    app.run(debug=True)