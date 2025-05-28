// server.ts
import { serve } from "bun";
import { crearJugador, obtenerJugadores, eliminarJugador, actualizarJugador } from "./crudJugador"; // asumiendo que pusiste ese archivo en crud.ts
import { Posicion } from "@prisma/client";

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;
    const method = req.method;

    // GET /jugadores
    if (method === "GET" && path === "/jugadores") {
      const jugadores = await obtenerJugadores();
      return Response.json(jugadores);
    }

    // POST /jugadores
    if (method === "POST" && path === "/jugadores") {
      const body = await req.json();
      const nuevoJugador = await crearJugador({
        nombre: body.nombre,
        posicion: body.posicion as Posicion,
        edad: body.edad,
        nacionalidad: body.nacionalidad,
        equipos: body.equipos, // [{equipoId: 1, fechaIngreso: "..."}]
      });
      return Response.json(nuevoJugador);
    }

    // PUT /jugadores/:id
    if (method === "PUT" && path.startsWith("/jugadores/")) {
      const id = Number(path.split("/")[2]);
      const body = await req.json();
      const actualizado = await actualizarJugador(id, body);
      return Response.json(actualizado);
    }

    // DELETE /jugadores/:id
    if (method === "DELETE" && path.startsWith("/jugadores/")) {
      const id = Number(path.split("/")[2]);
      const eliminado = await eliminarJugador(id);
      return Response.json(eliminado);
    }

    return new Response("Not Found", { status: 404 });
  },
});
