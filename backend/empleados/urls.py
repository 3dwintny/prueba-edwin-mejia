from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from empleados import views
#api version
router = routers.DefaultRouter()
router.register(r'empleados', views.EmpleadoView, 'empleados')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title= "Empleados API"))
]

#Con el codigo anterio generamos lo que son las rutas Get, pous, put, delete
#Para no generarlo de manera manial 