import Formulario from "../Formulario"

export default function Destino() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Formulario />
       <a href='./pacote'>ir p/ PAGINA dos detalhes do pacote </a>
      </main>
    )
  }