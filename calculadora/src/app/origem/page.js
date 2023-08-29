import Formulario from "../Formulario"

export default function Origem() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Formulario />
       <a href='./destino'>ir p/ PAGINA do destino </a>
      </main>
    )
  }