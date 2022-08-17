import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProdutoModule } from "./produto/produto.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProdutoModule, UsuarioModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
