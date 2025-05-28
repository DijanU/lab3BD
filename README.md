# bun-react-template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
bun start
```

This project was created using `bun init` in bun v1.2.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

docker db

```bash
docker run --name lab3-db -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=lab3 -p 5432:5432 -d postgres
```
TONO:

| Punto                                                | ¿Cumplido?                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------- |
| CRUD con Prisma para tabla principal                 | Depende si ya hiciste el código                                     |
| Crear/asociar registros relacionados en 1 formulario | Si implementaste lógica como el ejemplo, sí                         |
| Validaciones en DB y aplicación                      | Parcial (tipos y restricciones básicas en DB, lógica app pendiente) |
| Uso de 2 tipos personalizados                        | Sí (enums)                                                          |
| Vista creada para índice                             | Sí                                                                  |

VIEW(no se donde se pone):
CREATE VIEW vista_index_jugadores AS
SELECT
  j.id AS jugador_id,
  j.nombre AS nombre_jugador,
  j.posicion,
  j.nacionalidad,
  j."fechaNacimiento",
  e.id AS equipo_id,
  e.nombre AS nombre_equipo,
  e.liga,
  e.pais,
  je."fechaIngreso",
  je."fechaSalida"
FROM "Jugador" j
JOIN "JugadorEquipo" je ON j.id = je."jugadorId"
JOIN "Equipo" e ON e.id = je."equipoId";
