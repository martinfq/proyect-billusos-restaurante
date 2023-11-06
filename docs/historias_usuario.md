# Aplicación de gestión de restaurantes
## Ejercicio Billusos

**Martín Fierro**

--------------------------------------

## Historias de usuario

|**HU: 1** | Registro de Restaurantes|
|----------|----------|
| **Usuario** | Manager del restaurante |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como el Manager del restaurante, quiero registrar mi restaurante en la app para promocionar mi local|
| **Criterios de aceptación** | |

**Flujo de HU1:**

El Manager inicia sesión en la aplicación.
El sistema valida las credenciales
el sistema despliega un listado de opciones
El Manager selecciona la opción de "Registro de Restaurante".
El Manager ingresa la información del restaurante.
El sistema valida y almacena la información en la base de datos.
El sistema envía una notificación de confirmación al Manager.



|**HU: 2** | Visualización de Detalles de Restaurante |
|----------|----------|
| **Usuario** | Usuario |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como usuario, quiero poder ver detalles sobre un restaurante, incluyendo los platillos que ofrecen, nombre y ubicacion. |
| **Criterios de aceptación** | |

**Flujo de HU2:**

El Usuario entra en la aplicación.
El sistema despliega barra de busqueda
El Usuario busca un restaurante por nombre, tipo de comida, disponibilidad o ubicación.
El Usuario selecciona un restaurante de la lista de resultados.
La aplicación muestra los detalles del restaurante, incluyendo nombre, ubicación y platillos disponibles.


|**HU: 3** | Actualización de Restaurante |
|----------|----------|
| **Usuario** | Manager del restaurante |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como el Manager del restaurante, quiero actualizar los detalles de mi restaurante para que mis clientes y yo pueda ver los datos de mi negocio actualizados |
| **Criterios de aceptación** | |

**Flujo de HU3:**

El Manager inicia sesión en la aplicación.
El sistema valida las credenciales
El sistema despliega un listado de opciones
El Manager selecciona configuracion de restaurante
El Manager edita la información del restaurante.
El sistema valida y almacena los cambios en la base de datos.
Los cambios se reflejan en la página de detalles del restaurante.

|**HU: 4** | Eliminación de Restaurante |
|----------|----------|
| **Usuario** | Manager del restaurante |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como el Manager del restaurante, quiero eliminar mi restaurante de la app porque no voy a utilizar más la app |
| **Criterios de aceptación** | |

**Flujo de HU4:**
El Manager inicia sesión en la aplicación.
El sistema valida las credenciales
El sistema despliega un listado de opciones
El Manager selecciona configuracion de restaurante
El Manager selecciona la opción de "Eliminar Restaurante".
El Manager confirma la eliminación.
El sistema elimina el restaurante de la base de datos.
El restaurante ya no aparece en la lista de restaurantes disponibles.


|**HU: 5** | Registro de Platillos |
|----------|----------|
| **Usuario** | Manager del restaurante |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como el Manager del restaurante, quiero registrar nuevos platillos en mi perfil del restaurant para que mis clientes y yo puedan ver los platillos/menus/promociones que tengo registrados |
| **Criterios de aceptación** | |

**Flujo de HU5:**
El Manager inicia sesión en la aplicación.
El Manager selecciona configuracionde restaurante
El Manager elige la opción de "Agregar Platillo".
El Manager ingresa los detalles del platillo, incluyendo nombre, descripción, precio y foto.
El sistema almacena el nuevo platillo en la base de datos y lo asocia con el restaurante.


|**HU: 6** | Visualización de Detalles de Platillo |
|----------|----------|
| **Usuario** | Usuario |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como usuario, quiero poder ver detalles sobre un plato, incluyendo el restaurante que lo vende, descripción, precio y foto. |
| **Criterios de aceptación** | |

**Flujo de HU6:**
El Usuario entra en la aplicación.
El Usuario selecciona la barra de busqueda
El Usuario busca un platillo por nombre, tipo de comida, precio o disponibilidad.
El Usuario selecciona un platillo de la lista de resultados.
La aplicación muestra los detalles del platillo, incluyendo restaurante, descripción, precio y foto.


|**HU: 7** | Actualización de Platillos |
|----------|----------|
| **Usuario** | Manager del restaurante |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como el Manager del restaurante, quiero actualizar los platillos en mi perfil del restaurant para que mis clientes y yo pueda ver los platillos/menus/promociones actualizados |
| **Criterios de aceptación** | |

**Flujo de HU7:**
El Manager inicia sesión en la aplicación.
El Manager selecciona configuracion de restaurante.
El Manager selecciona platillos registrados.
El Manager edita la información de un platillo.
El sistema valida y almacena los cambios en la base de datos.
Los cambios se reflejan en la página de detalles del platillo.


|**HU: 8** | Eliminación de Platillos |
|----------|----------|
| **Usuario** | Manager del restaurante |
| **Prioridad (Alta/Media/Baja)** | Alta |
| **Descripción** | Como el Manager del restaurante, quiero eliminar los platillos en mi perfil del restaurant para que los platillos que ya no venda esten fuera de mi perfil |
| **Criterios de aceptación** | |

**Flujo de HU8:**
El Manager inicia sesión en la aplicación.
El Manager selecciona configuracionde restaurante.
El Manager selecciona platillos registrados.
El Manager elige la opción de "Eliminar Platillo".
El Manager selecciona el platillo que desea eliminar.
El sistema elimina el platillo de la base de datos y lo quita de la lista de platillos disponibles en el restaurante.

|**HU: 9** | Tipos de comida |
|----------|----------|
| **Usuario** | Cliente |
| **Prioridad (Alta/Media/Baja)** | Media |
| **Descripción** | Como usuario, quiero poder buscar restaurantes por nombre, tipo de comida, disponibilidad o ubicación para encontrar opciones específicas. |
| **Criterios de aceptación** | |

**Flujo de HU9:**
El Cliente entra en la aplicación.
El Cliente utiliza la función de búsqueda.
El Cliente ingresa un nombre, tipo de comida, disponibilidad o ubicación.
La aplicación muestra los resultados de la búsqueda de restaurantes que coinciden con los criterios.


|**HU: 10** | Filtro de comida|
|----------|----------|
| **Usuario** | Usuario |
| **Prioridad (Alta/Media/Baja)** | Media |
| **Descripción** | Como usuario, quiero poder filtrar los platos por precio, tipo de comida (por ejemplo, vegetariana, comida rápida, etc.) y disponibilidad. |
| **Criterios de aceptación** | |

**Flujo de HU10:**
El Usuario entra en la aplicación.
El Usuario selecciona la opción de "Filtrar Platos".
El Usuario elige los filtros deseados, como precio, tipo de comida y disponibilidad.
La aplicación muestra los platos que cumplen con los filtros seleccionados.
