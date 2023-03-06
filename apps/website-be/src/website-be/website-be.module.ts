import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { KeywordEntity } from '../entities/keyword.entity';
import { KeywordBeModule } from '../keyword-be/keyword-be.module';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
const defaultOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  synchronize: false
}
@Module({
  imports: [
    KeywordBeModule,
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get('AWS_ELASTIC_HOSTS'),
        secretkey: configService.get('AWS_ACCESS_KEY_ID'),
        secretAcceskey: configService.get('AWS_SECRET_ACCESS_KEY'),
        region: configService.get('AWS_ELASTIC_REGION'),
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'social_entity_db',
      entities: [KeywordEntity],
    } as any), TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'YT',
      database: 'youtube_data',
      entities: [],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'quora',
      name: 'Q',
      entities: [],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'profile-piler',
      name: 'PP',
      entities: [],
    } as any)
  ],
})
export class WebsiteBeModule { }
