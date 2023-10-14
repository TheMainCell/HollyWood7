# Importamos las librerias correspondientes

from flask import Flask,render_template, request, redirect, url_for
from flaskext.mysql import MySQL


app=Flask(__name__)


app.secret_key = "holamundo"
mysql = MySQL()  




# Coneccion de MySQL 
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']=''
app.config['MYSQL_DATABASE_DB']='hw7'


mysql.init_app(app)
 
# Configuramos que mi pantalla de inicio sea la de configuracion pero la a la hora de hacer el merge esta ruta no debe ser modificada 

# Aqui voy a renderizar las plantillas de las secciones
@app.route('/')
def configuracion():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM `clientes`")
    user=cursor.fetchall()

    print(user)

    return render_template('sitio/configuracion.html',user=user)


# ///////////////////////////////////////////////Mi cuenta/////////
@app.route('/micuenta')
def miCuenta():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM `clientes`")
    user=cursor.fetchall()

    print(user)

    return render_template('sitio/secciones/micuenta.html', user=user[0], mensaje="Process done successfully")


# Hacemos la ruta para editar los datos que esten en "micuenta" POR AHORA ESTE NO FUNCIONA
@app.route('/editarUsuario/<id>')
def editarUsuario(id):
    

    return render_template('sitio/secciones/contacto.html')


# Este es el metodo para eliminar la cuenta directamente a la base de datos POR AHORA ESTE NO FUNCIONA
@app.route('/eliminarCuenta/<id>')
def eliminarCuenta(id):
    conexion=mysql.connect()
    cur=conexion.cursor()
    cur.execute("DELETE FROM clientes WHERE id_cliente = %s",(id))
    cur.fetchall()
    cur.commit()

    return redirect('/')

# ///////////////////////////////////////////////Contacto//////////
@app.route('/contacto')
def contacto():

    return render_template('sitio/secciones/contacto.html')



# ///////////////////////////////////////////////Terminos y condiciones///////
@app.route('/terminosYcondiciones')
def terminosYcondiciones():

    return render_template('sitio/secciones/ter_y_cond.html')




# ///////////////////////////////////////////////Ayuda///////////////
@app.route('/ayuda')
def ayuda():

    return render_template('sitio/secciones/ayuda.html')




# ///////////////////////////////////////////////Salir de la cuenta////////////////
@app.route('/salirCuenta')
def salirCuenta():

    return render_template('sitio/secciones/salircuenta.html')





if __name__ == '__main__':
    app.run(debug=True)