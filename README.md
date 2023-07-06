# prueba-edwin-mejia
Prueba de pasantia
## DOCUMENTACION PARA EL BACKEND
-python --version
-npm --version
## para generar un entorno virtual de desarrollo en con python
-python -m venv venv 
##Estando dentro del entorno virtual 
##Para instalar django en el entorno virtual
-pip install django
## Para crear un un proyecto de django
-django-admin startproject backend_empleado .
## Crar la aplicacion de empleados en el backend
-python manage.py startapp empleados
## Creamos la migracion de las tablas
-python manage.py migrate
## instalamos restFramework
-pip install djangorestframework
## instalamos cors para poder hacer conexiones con el frontend
-pip install django-cors-headers
## crear un super usuario y verificar el funcionamiento de la aplicacion
-pip install django-cors-headers
## generar la migracion del modelo que se creo
-python manage.py makemigrations empleados
## Realizando la migracion del modelo empleados que se genero
-python manage.py migrate empleados
## Para ejecutar de la aplicación
-python manage.py runserver
## Se instalo coreapi para realizar la documentación automatica
-pip install coreapi



## DOCUMENTACION PARA EL FRONTEND
## Se creo la aplicacion con vite
-pip install coreapi
## Se eligio React como framework y JavaScript como lengaje
## Se instalo npm y se ejecuto el programa con npm run dev
-npm install && npm run dev
## Se instalaron los paquetes para el manejador de rutas y axios 
-npm i react-router-dom react-hot-toast axios react-hook-form
## se ejecuta la aplicacion con 
-npm run dev



