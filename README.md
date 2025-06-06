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


### Pasos para correr

docker db

```bash
docker run --name lab3-db -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=lab3 -p 5432:5432 -d postgres
```

```bash migrar
bunx prisma migrate dev --name init
```

poblar db
```bash linux
docker exec -i lab3-db psql -U postgres -d lab3 < ./sql/data.sql
```

```bash windows
Get-Content .\sql\data.sql | docker exec -i lab3-db psql -U postgres -d lab3
```

TONO:

| Punto                                                | ¿Cumplido?                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------- |
| CRUD con Prisma para tabla principal                 | no hay                                                              |
| Crear/asociar registros relacionados en 1 formulario | flata                                                               |
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
