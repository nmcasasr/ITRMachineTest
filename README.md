# Prueba  ITMachines

## Partes del proyecto:

 El proyecto consiste de un backend realizado en el framework Sails y un frontend realizado en Angular.

 Para lanzar la aplicacion se debe primero hacer npm install en la carpeta testITM, configurar la base de datos en config/datastore, y instalar sails con el comando "npm install sails -g", por ultimo se lanza con el comando "lift sails".
 *  Las consultas relacionadas con el cliente se hacen a: http://localhost:1337/client
 *  Las consultas relacionadas con las ventas se hacen a: http://localhost:1337/sale
 *  Las consultas relacionadas con los vehiculos se hacen a: http://localhost:1337/vehicle
 
 Las consultas mixtas se hacen de la siguiente manera:
  *  Para consultar los vehiculos vendidos en cierta fecha se usa: http://localhost:1337/vehicles/date/<"Fecha">
  *  Para consultar las compras hechas por los clientes se usa: http://localhost:1337/client/sale/<"Unique Id cliente">
  *  Para consultar que clientes poseen que vehiculos se usa: http://localhost:1337/vehicles/client/<"Unique Id cliente">
    


