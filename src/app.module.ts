import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { ComprasModule } from './modules/compras/compras.module';
import { ProductsService } from './modules/productos/products/products.service';
import { ProductsController } from './modules/productos/products/products.controller';

@Module({
  imports: [ConfigModule, DatabaseModule, ComprasModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
    console.log('localhost', AppModule.port);
  }
}
