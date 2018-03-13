# PracticaProyectoDSI
Repositorio práctica grupal DSI Proyecto final

# The Snake Game
![Snake](https://github.com/DarwinGonzalez/PracticaProyectoDSI/blob/master/img/snake.png?raw=true)

Implementación del juego de la serpiente utilizando JavaScript.

## Componentes del Grupo:
* Darwin González Suárez
* Cristina González Pacheco
* Javier Castro González
* Daniel Alberto Melián León

## Documentación trabajo con ramas

Crear una nueva rama y posicionarse en la misma para trabajar en ella:
~~~
$ git branch nuevafuncionalidad
$ git checkout nuevafuncionalidad
~~~
Una vez tenemos varias ramas creadas podemos ver en que rama estamos actualmente(la señalada con '*') con el comando: 
~~~
$ git branch
master
* nuevafuncionalidad
~~~
Para ver las diferencias entre dos ramas podemos utilizar el comando :
~~~
git diff --stat master nuevafuncionalidad
deliverance.py                      |      4 ++--
lib/nuevafuncionalidad.py           |      4 ++++
lib/test/test_nuevafuncionalidad.py |      4 ++++
3 files changed, 7 insertions(+), 2 deletions(-)
~~~
Para mezclar las ramas debemos posicionarnos en la rama master y realizar el siguiente comando:
~~~
$ git checkout master
$ git merge nuevafuncionalidad
~~~
Una vez acabado si hemos mezclado la rama con éxito(no ha habido conflictos) y queremos eliminar la rama creada se utiliza el comando:
~~~
$ git branch -d nuevafuncionalidad
~~~
Por otra parte si Git nos impide realizar el merge el nos dirá los conflictos e incongruencias en el código, ofreciendonos la información relevante para poder solucionar el problema.

Por último cabe destacar que en cualquier momento se puede "deshacer" un Merge. 
El parámetro --hard se asegura de que tanto nuestro índice de archivos como el directorio de trabajo cambien para que coincidan con lo que era antes del merge. Por defecto solo se restablece el índice, dejando los archivos parcialmente mezclados en el directorio de trabajo.
~~~
$ git reset --hard HEAD
~~~
Si por casualidad has hecho un cambio y después de hacer un commit has decidido que era un error por que tus tests unitarios han empezado a romperse en mil pedazos (por ejemplo), aun puedes ir atrás y deshacer ese commit usando también reset.
~~~
$ git reset --head ORIG_HEAD
~~~

## Documentación relacionada con los Issues
[Documentación relacionada](https://guides.github.com/features/issues/)
