import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ProfileBeService {

   async getRecords(){
        const fileContents = await fs.readFileSync('../assets/js/profile.json', 'utf-8');
        return JSON.parse(fileContents);
      }

}
