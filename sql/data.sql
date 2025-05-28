-- Equipos
INSERT INTO "Equipo" (id, nombre, liga, pais, fundado) VALUES
(1, 'FC Barcelona', 'La Liga', 'España', 1899),
(2, 'Real Madrid', 'La Liga', 'España', 1902),
(3, 'Manchester City', 'Premier League', 'Inglaterra', 1880),
(4, 'PSG', 'Ligue 1', 'Francia', 1970),
(5, 'Bayern Munich', 'Bundesliga', 'Alemania', 1900);

-- Jugadores
INSERT INTO "Jugador" (id, nombre, posicion, edad, nacionalidad, "createdAt") VALUES
(1, 'Lionel Messi', 'Delantero', 36, 'Argentina', NOW()),
(2, 'Erling Haaland', 'Delantero', 24, 'Noruega', NOW()),
(3, 'Kevin De Bruyne', 'Mediocampista', 32, 'Bélgica', NOW()),
(4, 'Kylian Mbappé', 'Delantero', 25, 'Francia', NOW()),
(5, 'Manuel Neuer', 'Portero', 38, 'Alemania', NOW()),
(6, 'Joshua Kimmich', 'Mediocampista', 29, 'Alemania', NOW()),
(7, 'Vinícius Jr', 'Delantero', 23, 'Brasil', NOW());

-- Jugador-Equipo (relaciones muchos a muchos)
INSERT INTO "JugadorEquipo" (jugadorId, equipoId, "fechaIngreso") VALUES
(1, 1, '2004-07-01'),
(1, 4, '2021-08-10'),
(2, 3, '2022-07-01'),
(3, 3, '2015-08-30'),
(4, 4, '2017-07-01'),
(5, 5, '2011-06-01'),
(6, 5, '2015-07-01'),
(7, 2, '2018-07-01');

-- Estadísticas
INSERT INTO "Estadistica" (id, jugadorId, partidosJugados, goles, asistencias, temporada) VALUES
(1, 1, 30, 20, 15, 'T2022_2023'),
(2, 1, 28, 25, 12, 'T2023_2024'),
(3, 2, 34, 36, 5, 'T2022_2023'),
(4, 3, 32, 10, 18, 'T2022_2023'),
(5, 4, 30, 28, 10, 'T2023_2024'),
(6, 5, 25, 0, 0, 'T2023_2024'),
(7, 6, 31, 4, 9, 'T2022_2023'),
(8, 7, 33, 12, 14, 'T2023_2024');