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
 
# Configuramos que mi pantalla de inicio sea la de configuracion pero la a la hora de hacer el merge esta ruta debe ser modificada 

# Aqui voy a renderizar las plantillas de las secciones, este seria el apartado de configuracion
@app.route('/configuracion')
def configuracion():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM `clientes`")
    user=cursor.fetchall()

    print(user)
        
    return render_template('sitio/configuracion.html',user=user)


# ///////////////////////////////////////////////Mi cuenta/////////
@app.route('/configuracion/micuenta')
def miCuenta():
    conexion=mysql.connect()
    cursor=conexion.cursor()
    cursor.execute("SELECT * FROM `clientes`")
    user=cursor.fetchall()
    print(user) 
    return render_template('sitio/secciones/micuenta.html', user=user[0])  

# Hacemos la ruta para editar los datos que esten en "micuenta" NOTA: Lo de actualizar los datos por id es una manera que hice para que funcione de acuerdo a como estoy trabajando
@app.route('/configuracion/editarUsuario/<id>', methods=['GET','POST'])
def editarUsuario(id):
    if request.method == 'POST':
        nombre=request.form['nombre']
        apellido=request.form['apellido']
        usuario=request.form['usuario']
        passUsuario=request.form['passUsuario']
        # Actualizacion a la BD
        conexion=mysql.connect()
        cursor=conexion.cursor()
        cursor.execute("UPDATE `clientes` SET `nombre`=%s, `apellido`=%s,`usuario`=%s,`passUsuario`=%s WHERE `id_cliente` =%s",(nombre,apellido,usuario,passUsuario,id))
        datosUsuario=cursor.fetchall()
        conexion.commit() 
        # Retornar
        return redirect('/configuracion/micuenta')
    


# Este es el metodo para eliminar la cuenta directamente a la base de datos POR AHORA ESTE NO FUNCIONA
@app.route('/configuracion/eliminarCuenta/<id>')
def eliminarCuenta(id):
    conexion=mysql.connect()
    cur=conexion.cursor()
    cur.execute("DELETE FROM clientes WHERE id_cliente = %s",(id))
    cur.fetchall()
    conexion.commit()
    return 'El usuario ha sido eliminado exitosamente'

# ///////////////////////////////////////////////Contacto//////////
@app.route('/configuracion/contacto')
def contacto():

    return render_template('sitio/secciones/contacto.html')



# ///////////////////////////////////////////////Terminos y condiciones///////
@app.route('/configuracion/terminosYcondiciones')
def terminosYcondiciones():

    return render_template('sitio/secciones/ter_y_cond.html')




# ///////////////////////////////////////////////Ayuda///////////////
@app.route('/configuracion/ayuda')
def ayuda():

    return render_template('sitio/secciones/ayuda.html')




# ///////////////////////////////////////////////Salir de la cuenta////////////////
@app.route('/configuracion/salirCuenta')
def salirCuenta():

    return render_template('sitio/secciones/salircuenta.html')





if __name__ == '__main__':
    app.run(debug=True)