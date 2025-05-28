import { PrismaClient, Posicion } from '@prisma/client';

const prisma = new PrismaClient();

// Crear jugador con equipos asociados
export async function crearJugador(data: {
  nombre: string;
  posicion: Posicion;
  edad: number;
  nacionalidad: string;
  equipos?: { equipoId: number; fechaIngreso: Date; fechaSalida?: Date | null }[];
}) {
  return await prisma.jugador.create({
    data: {
      nombre: data.nombre,
      posicion: data.posicion,
      edad: data.edad,
      nacionalidad: data.nacionalidad,
      equipos: data.equipos
        ? {
            create: data.equipos.map((eq) => ({
              equipo: { connect: { id: eq.equipoId } },
              fechaIngreso: eq.fechaIngreso,
              fechaSalida: eq.fechaSalida ?? null,
            })),
          }
        : undefined,
    },
    include: {
      equipos: { include: { equipo: true } },
    },
  });
}

// Obtener todos los jugadores (ejemplo básico, puedes usar la VIEW con $queryRaw también)
export async function obtenerJugadores() {
  return await prisma.jugador.findMany({
    include: {
      equipos: {
        include: {
          equipo: true,
        },
      },
      estadisticas: true,
    },
  });
}

// Actualizar jugador (sin tocar equipos por simplicidad)
export async function actualizarJugador(
  id: number,
  data: Partial<{ nombre: string; posicion: Posicion; edad: number; nacionalidad: string }>
) {
  return await prisma.jugador.update({
    where: { id },
    data,
  });
}

// Eliminar jugador y sus relaciones
export async function eliminarJugador(id: number) {
  // Opcional: borrar relaciones en JugadorEquipo primero si necesitas manejo manual
  // Pero prisma elimina en cascada si configuras bien la DB
  return await prisma.jugador.delete({
    where: { id },
  });
}