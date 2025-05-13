import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function NextGenStore() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Cabeçalho de promoções */}
      <motion.div
        className="bg-black text-white text-center p-2 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frete grátis para compras acima de R$199!
      </motion.div>

      {/* Menu principal */}
      <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-10">
        <h1 className="text-xl font-bold">NextGen</h1>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#produtos" className="hover:underline">Produtos</a>
          <a href="#cadastro" className="hover:underline">Cadastro</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      {/* Seção Home */}
      <motion.section
        id="home"
        className="text-center py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Bem-vindo à NextGen Store</h2>
        <p className="text-lg mb-6">Tecnologia e inovação para o seu dia a dia.</p>
        <Button size="lg">Ver Produtos</Button>
      </motion.section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-16 px-6 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            A NextGen Store é especializada em produtos tecnológicos modernos, oferecendo qualidade, inovação e um atendimento diferenciado.
          </p>
        </motion.div>
      </section>

      {/* Seção Produtos */}
      <section id="produtos" className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Produto {item}</h3>
                  <p className="text-sm text-gray-600 mb-4">Descrição breve do produto {item}.</p>
                  <Button>Comprar</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seção Cadastro */}
      <section id="cadastro" className="py-16 px-6 bg-gradient-to-br from-gray-100 to-white">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <UserPlus size={24} /> Cadastre-se
          </h2>
          <p className="mb-6 text-gray-600">Receba ofertas exclusivas e novidades por e-mail.</p>
          <form className="space-y-4">
            <Input type="text" placeholder="Nome completo" />
            <Input type="email" placeholder="Seu e-mail" />
            <Input type="password" placeholder="Senha" />
            <Button type="submit" className="w-full">Cadastrar</Button>
          </form>
        </motion.div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-16 px-6 bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">Fale Conosco</h2>
          <form className="max-w-xl mx-auto space-y-4">
            <Input type="text" placeholder="Seu nome" />
            <Input type="email" placeholder="Seu e-mail" />
            <Input type="text" placeholder="Assunto" />
            <textarea className="w-full border rounded p-2" rows={4} placeholder="Sua mensagem"></textarea>
            <Button type="submit">Enviar</Button>
          </form>
          <div className="flex justify-center gap-4 mt-6 text-sm text-gray-700">
            <span className="flex items-center gap-1"><Phone size={16} /> (11) 99999-9999</span>
            <span className="flex items-center gap-1"><Mail size={16} /> contato@nextgen.com</span>
          </div>
        </motion.div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-white text-center p-4 text-sm">
        &copy; 2025 NextGen Store. Todos os direitos reservados.
      </footer>
    </div>
  );
} 