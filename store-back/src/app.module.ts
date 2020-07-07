import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ConfigModule, DatabaseModule, ProductModule],

})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
    console.log('localhost', AppModule.port);
  }
}
