from django.db import models
from django.core.validators import MinValueValidator
# Create your models here.
class Empleado(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    salario_base = models.DecimalField(max_digits=8, decimal_places=2, validators=[MinValueValidator(0)])
    horas_trabajadas = models.PositiveIntegerField()
    fecha_contratacion = models.DateField()
    departamento = models.CharField(max_length=100)
    correo_electronico = models.EmailField()

    def __str__(self):
        return self.nombre
