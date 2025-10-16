import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PdfService {
  async processPdf(file: Express.Multer.File) {
    const parserUrl = process.env.PARSER_URL || 'http://parser:6000/parse';

    const response = await axios.post(parserUrl, file.buffer, {
      headers: {
        'Content-Type': 'application/pdf',
      },
    });

    return response.data;
  }
}
