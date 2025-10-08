import { pool } from "../data/db-conexion";
import { RowDataPacket } from "mysql2";


interface Usuario extends RowDataPacket{
  id: number;
  fecha: string;
  usuario: string;
  constrasena: string;
}


export class CRUD {
  usuario: string;
  contrasena: string;
  id: number;

  //constructor
  constructor() {
    this.usuario = "";
    this.contrasena = "";
    this.id = 0;
  }

  //metodos
  async obtenerUsuario(usuario: string) {
    let array: string[];

    try {
      //con esta consulta yo se que solo va a devolver un valor, pero si son más hay que hacer otro proceso.
      const [rows] = await pool.execute<Usuario[]>(`SELECT * FROM playwright.login where playwright.login.usuario = ?`,[usuario]);
      //console.log("Users-crud-usuario-ts:", rows);
      if(rows.length > 0) {
        //console.log("dentro del if");
        const usuarioData = rows[0];
        
        this.usuario = usuarioData.usuario;
        this.contrasena = usuarioData.contrasena;
        this.id = usuarioData.id;
        //console.log("constraseñññ: "+this.contrasena);
        
      } else {
        console.log('Usuario no encontrado');
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
}