export default {
  title: "02 Auditoria P1",
  videoId: "8qr-3AZ5e3g",
  notes: [
    { type: "subtitle", content: "Flujo de petición PUT" },
    {
      type: "text",
      content:
        "El flujo de petición PUT para actualizar campos se realiza a través de la ruta /fields/{fieldId}",
    },
    { type: "subtitle", content: "Controller" },
    {
      type: "text",
      content:
        "No está implementado actualmente, pero vemos configuration/access/feature_api/users_api/router.py:83 como ejemplo ya que hay muchas similitudes",
    },
    { type: "subtitle", content: "Recomendaciones de implementación" },
    {
      type: "text",
      content: "Enviar DTO en lugar de argumentos por separado al caso de uso",
    },
    {
      type: "text",
      content:
        "Este patrón permite que se trate un command bus de medio simplemente hay que renombrar DTO a Command y enviarlo al bus en lugar del caso de uso",
    },
    {
      type: "text",
      content: "Problema de fieldPayloadPropertiesSchema como campo del DTO",
    },
    {
      type: "text",
      content:
        "Acoplamiento muy fuerte entre CreateUserPayload y UserCreatorDTO",
    },
    {
      type: "text",
      content:
        "El ejemplo organization_id se quita del Payload para cuando lo importe el DTO tenga los demás elementos",
    },
    { type: "subtitle", content: "Propuestas" },
    {
      type: "text",
      content:
        "1. Enviar los parámetros explícitos directamente a los casos de uso",
    },
    {
      type: "text",
      content: "2. O cuando se creen los DTOs hacerlo parámetro a parámetros",
    },
    {
      type: "text",
      content:
        "Con cualquiera de las dos opciones, se elimina reticencia al refactor de rename al ser automático + posibles bugs introducidos por ello",
    },
    { type: "subtitle", content: "Gestión de errores" },
    {
      type: "text",
      content:
        "Actualmente todos los controllers tienen un try catch que si falla cualquier cosa es un 400",
    },
    {
      type: "text",
      content:
        "Los errores provocados por el AuthenticatedService se pueden lanzar 401",
    },
    {
      type: "text",
      content:
        "En los errores 400 se le pasa de body el mensaje de error. Si se ha caído la base de datos también entraría allí",
    },
    {
      type: "text",
      content:
        "Le estamos dando información a los usuarios que no necesitan y que puede ser hasta peligroso",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content: "1. Controlar cada caso de error por separado. Ejemplo:",
    },
    {
      type: "code",
      content:
        "except InvalidAuthToken as error:\n    return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'error': str(error)})\n\nexcept InvalidAuthToken as error:\n    return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'error': str(error)})\n\nexcept InvalidAuthToken as error:\n    return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'error': str(error)})\n\nexcept Exception as error:\n    return JSONResponse(status_code=status.HTTP_500_SERVER_ERROR, content={'error': 'Server error'})",
    },
    {
      type: "text",
      content:
        "2. Esto se va a empezar a repetir en cada controller. Se puede crear una función utilitaria que nos simplifique esta parte.",
    },
    { type: "subtitle", content: "¿Dónde generar el ID?" },
    {
      type: "text",
      content:
        "Ante la duda la llamada no puede ser un PUT, así que al hemos de soportar ambos casos, seguimos siendo un POST",
    },
    {
      type: "text",
      content:
        "Actualmente, el ID se genera dentro de los DTOs user.py:44 , field.py:48",
    },
    {
      type: "text",
      content:
        "Se está generando un identificador fuera de la capa de infraestructura.",
    },
    { type: "text", content: "Dificulta el debugging." },
    {
      type: "text",
      content:
        "Una alternativa sería ponerlo en el caso de uso, pero estaríamos cubriendo un caso de 'los clientes no tienen identificador' cuando queremos que el ID venga desde fuera.",
    },
    {
      type: "text",
      content:
        "También hemos de devolver el id creado, si lo hiciéramos en el caso de uso, subiríamos la capa de uso para que nos devolviera el ID y lo propagaríamos DTOs.",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content: "1. Generar el identificador en el PostController:",
    },
    {
      type: "text",
      content:
        "- Inyectando un UuidGenerator para que sea fácil inyectar una implementación diferente en testing.",
    },
    {
      type: "text",
      content:
        "- Gracias a esto los tests de los casos de uso quedan igual y la generación de este ID si no viene no los afecta.",
    },
    {
      type: "text",
      content: "- Va muy de la mano de no acoplar los Payloads a los DTOs.",
    },
    {
      type: "text",
      content:
        "2. Por otro lado, tener también el PutController el cual no genera ID.",
    },
    { type: "subtitle", content: "Caso de uso FieldCreator" },
    { type: "subtitle", content: "Dónde añadir el código de autorización" },
    {
      type: "text",
      content: "Estamos añadiendo magia en nuestra capa de aplicación.",
    },
    {
      type: "text",
      content:
        "Ahora mismo el AuthUser depende del AuthenticatedUser que depende de que sea una llamada API para hacer el control de autorización.",
    },
    {
      type: "text",
      content:
        "¿Qué pasa si podemos crear un Field directamente desde un controller y desde un subscriber?",
    },
    { type: "subtitle", content: "Propuestas a elegir" },
    {
      type: "text",
      content: "1. Hacer la autorización en el controller o middleware:",
    },
    {
      type: "text",
      content: "- Aquí la magia no molesta ya que es infraestructura.",
    },
    {
      type: "text",
      content:
        "- Dejan de restar el caso de uso y podemos olvidarnos del control.",
    },
    {
      type: "text",
      content: "2. Hacer la autorización más explícita en los casos de uso:",
    },
    {
      type: "text",
      content:
        "- Se inyecta en los casos de uso un AuthUser el cual se le pasan explícitamente los permisos necesarios.",
    },
    {
      type: "text",
      content:
        "- El AuthUser puede lanzar una excepción si no está autorizado para evitar en cada caso de uso hacer el if AuthUser.tiene(AuthUserPermisos).",
    },
    {
      type: "text",
      content:
        "- Se puede hacer más llevando un servicio de dominio en shared para ello.",
    },
    { type: "subtitle", content: "Cómo llamar a otro caso de uso" },
    { type: "text", content: "Actualmente ya existe un FieldFinder:" },
    {
      type: "text",
      content:
        "- Con nombre Field Finder se espera que busque un field por su id y que si no lo encuentra lance un error.",
    },
    {
      type: "text",
      content:
        "- Esta clase hace más, depende lo que se le pase busca por una cosa u otra.",
    },
    {
      type: "text",
      content:
        "Propuesta de renombrarlo a FieldByIdCriteriaSearcher o FieldByFiltersSearcher",
    },
    { type: "text", content: "- Diferencia Searcher de Finder" },
    {
      type: "text",
      content:
        "Una alternativa sería crear un servicio de dominio FieldSearcher donde simplemente hace *get* + field_repository.get_by_filter(filter)",
    },
    {
      type: "text",
      content: "- Luego hablamos de los métodos de los repositorios.",
    },
    {
      type: "text",
      content: "- Mejor simplemente mover este código a una clase.",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content:
        "- Si este patrón se va a repetir mucho sacarlo a una clase, si no ponerlo en un método.",
    },
    {
      type: "text",
      content:
        "- La clase se podría llamar FieldDoesNotExistFinder, que busca el Field y si ya existe lanza el error.",
    },
    { type: "subtitle", content: "Crear Field" },
    {
      type: "text",
      content:
        "- Si usamos y queremos que el DTO llegue hasta field, el único que puede aceptar un FieldCreatedDTO debería de ser el método create",
    },
    {
      type: "text",
      content:
        "- Si vemos field_delete.py veremos que no hay necesidad de ello. Podríamos hacer directamente field_to_remove.delete()",
    },
    { type: "text", content: "- El caso contrario del delete" },
    {
      type: "text",
      content:
        "- Para no tener un método validate y otro fromPrimitives que hacen casi lo mismo y dado que no vemos que se debería de llamar desde el create, extraerlo todo desde el fromPrimitives y que el create llame allí.",
    },
    {
      type: "text",
      content:
        "- Estamos acoplando los parámetros de field al contenido del evento de dominio. Esto está bien porque nos permite ir más rápido, pero pasa igual que con los DTOs: Añade mucho al refactor.",
    },
    {
      type: "text",
      content: "- Mejor ser explícitos y pasar todos los parámetros.",
    },
    {
      type: "text",
      content:
        "- No podemos tener un esquema de los eventos de dominio pese a hacer algún refactor de un método interno",
    },
    { type: "subtitle", content: "Relacionar field con account" },
    {
      type: "text",
      content:
        "Entendemos que un account puede tener múltiples fields y que un field puede pertenecer a diversos accounts.",
    },
    {
      type: "text",
      content:
        "Tal y cómo está el código estamos acoplando nuestro código a cómo estaría implementado en base de datos.",
    },
    {
      type: "text",
      content:
        "Ahora estamos haciendo que el repositorio de Field conoce tanto a Field como a FieldAccount.",
    },
    {
      type: "text",
      content:
        "FieldAccount no es nada más que una relación de Field_id y account_id.",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content: "No tratar a account como una entidad, sino como un VO.",
    },
    { type: "text", content: "Transformarlo en una lista account_ids." },
    {
      type: "text",
      content:
        "En base de datos puede estar modelado de la misma propuesta actual, pero en el momento de recuperarlo se convierte al VO.",
    },
    {
      type: "text",
      content:
        "Alternativamente se podría guardar todo en el mismo campo de json.",
    },
    {
      type: "text",
      content:
        "Importante valorar qué es más consume de la base de datos. Si el data lake consume directamente de estas tablas, seguramente una tabla separada vaya mejor.",
    },
    {
      type: "text",
      content:
        "De esta forma cuando evento de FieldCreatedDomainEvent puede llevar también el accountId.",
    },
    {
      type: "text",
      content:
        "En un futuro, si se añaden más cuentas o se quitan, se lanzará el evento de AccountAssignedToFieldDomainEvent o AccountRemovedFromFieldDomainEvent (adaptado a nuestro lenguaje ubiquo).",
    },
    {
      type: "text",
      content:
        "El nombre actual es FieldAccountCreatedDomainEvent, creemos que el nombre propuesto es más específico y habla más de dominio.",
    },
    {
      type: "text",
      content:
        "Si os interesa saber quién creo el field se puede añadir un campo account_creator_id",
    },
    { type: "subtitle", content: "Logging" },
    {
      type: "text",
      content: "Actualmente el logger está añadido dentro de los casos de uso.",
    },
    {
      type: "text",
      content:
        "Aunque inyectemos una interfaz, estamos inyectando código de infra en nuestra aplicación.",
    },
    { type: "text", content: "El logger no es un requisito de negocio." },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content:
        "Añadir la capa de logging dentro de las implementaciones de la capa de infraestructura.",
    },
    {
      type: "text",
      content:
        "Podemos añadir uno en la implementación de dentro del repository y otro en el publish del event bus.",
    },
    {
      type: "text",
      content:
        "De esta forma ensuciamos la infraestructura y no las otras capas.",
    },
    {
      type: "text",
      content: "Diferenciar logging de monitoring de telemetría.",
    },
    { type: "subtitle", content: "Qué devuelve un caso de uso" },
    {
      type: "text",
      content:
        "Ahora mismo devuelve un FieldDTO que extiende de FieldCreateDTO para añadirle un factory method.",
    },
    {
      type: "text",
      content:
        "Los casos de uso de creación no deberían de devolver nada. Si hace falta por el ID que se ha generado, si lo hemos hecho desde el controller eliminamos ese necesidad.",
    },
    {
      type: "text",
      content:
        "Pero hay casos de uso (Finders...) donde sí que hace falta. Para ellos:",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content: "Devolver siempre lo que devuelve el toPrimitives.",
    },
    { type: "text", content: "De esta forma no hace falta crear tantos DTOs." },
    {
      type: "text",
      content:
        "De esta forma tampoco hacemos leaks de cómo están implementado internamente nuestros agregados.",
    },
    { type: "subtitle", content: "Repositorios" },
    {
      type: "subtitle",
      content: "Tener repositorio base como GeneralEntityRepository",
    },
    {
      type: "text",
      content:
        "Estamos obligando a implementar muchos métodos a nuestras implementaciones",
    },
    {
      type: "text",
      content:
        "Seguramente, si no utilizas todas nuestras implementaciones quedarán vacías",
    },
    {
      type: "text",
      content: "Es más complicado saber qué hace cada repository",
    },
    {
      type: "text",
      content:
        "Si un repository solo puede guardar y buscar por Id, es mucho más fácilmente verlo en la interfaz que buscar la llamada a cada método",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content: "Eliminar esa clase y que cada repository tenga sus métodos",
    },
    { type: "subtitle", content: "save VS update" },
    {
      type: "text",
      content:
        "Aunque técnicamente estamos acostumbrados, cuando pensamos en un repositorio (por ejemplo una biblioteca), me da igual que un libro esté vacío o lo acabe de rellenar, lo que quiero es guardarlo allí.",
    },
    {
      type: "text",
      content:
        "El concepto update no existe en NoSQL, entonces sabríamos detalle de implementación SQL",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content:
        "Dejar sólo el método save y éste se encarga de hacer update si es necesario.",
    },
    { type: "subtitle", content: "Método delete" },
    { type: "text", content: "Ejemplo field_deleter.py:68" },
    { type: "text", content: "El patrón va a ser:" },
    { type: "text", content: "1. Buscamos field." },
    { type: "text", content: "2. Ejecutamos método .delete()" },
    { type: "text", content: "3. repository.delete(entity)" },
    { type: "text", content: "Le pasamos la entidad entera" },
    {
      type: "text",
      content:
        "Por lo tanto se encarga de eliminar todos los datos de otras tablas que están en esa entidad. Ejemplo accounts.",
    },
    {
      type: "text",
      content:
        "Por lo tanto se encarga de eliminar todos los datos de su agregado aunque esté repartido en otras tablas.",
    },
    { type: "text", content: "4. emit(FieldDeletedDomainEvent)" },
    {
      type: "text",
      content:
        "Si hay otros agregados que han de borrar datos suyos lo hacen reaccionando a este evento.",
    },
    { type: "subtitle", content: "Procesos en batch" },
    {
      type: "text",
      content:
        "Es posible que hayan veces que querremos hacer cosas con diversas entidades.",
    },
    {
      type: "text",
      content:
        "Ahora mismo estamos haciendo operación a operación (cosa que es costosa a nivel de BD).",
    },
    { type: "subtitle", content: "Propuesta" },
    {
      type: "text",
      content: "Modelar nuestra propia clase Collection. En este caso Fields",
    },
    { type: "text", content: "Ejemplo field_deleter.py" },
    {
      type: "code",
      content:
        "t_fields: **Fields** = * *await* field_repository.searchBy(_...)\nfield.deleteAll()\n\n# self.fields.forEach(delete())\n\n*await* *self*.field_repository.deleteAll(fields)\n\nfields.publishDomainEvents()",
    },
  ],
};
